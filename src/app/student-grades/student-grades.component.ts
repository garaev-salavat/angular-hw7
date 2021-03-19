import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lesson } from '../lesson';
import { LESSONS, STUDENT } from '../mock-lessons';
import { Student } from '../student';

@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.css'],
})
export class StudentGradesComponent {
  students: Student[] = STUDENT;
  lessons: Lesson[] = LESSONS;

  gradeForm: FormGroup;

  fioStudentsArr = new Array();
  lessonIdArr = new Array();
  lessonDateArr = new Array();
  lessonThemesArr = new Array();
  roundToDecArr = new Array();
  roundToIntArr = new Array();

  constructor(private fb: FormBuilder) {
    for (var i = 0; i < this.students.length; i++) {
      this.fioStudentsArr.push(this.students[i].fio);
      this.lessonIdArr.push(this.lessons[i].id);
      this.lessonDateArr.push(new Date(this.lessons[i].date));
      this.lessonThemesArr.push(this.lessons[i].theme);
      this.roundToDecArr.push(this.roundToDec(i));
      this.roundToIntArr.push(this.roundToInt(i));
    }

    this.gradeForm = fb.group({
      studentsFios: fb.array(this.fioStudentsArr),
      lessonIds: fb.array(this.lessonIdArr),
      lessonDates: fb.array(this.lessonDateArr),
      lessonThemes: fb.array(this.lessonThemesArr),
      grades: fb.array(this.students),
      roundToDecs: fb.array(this.roundToDecArr),
      roundToInts: fb.array(this.roundToIntArr),
    });

    for (var i = 0; i < this.students.length; i++) {
      this.roundToDecs.controls[i].setValidators([
        Validators.required,
        Validators.min(3.9),
      ]);
    }
  }

  roundToDec(index: number): number {
    var tmp = [];
    if (this.gradeForm == undefined) {
      for (var i = 0; i < this.students[index].grades.length; i++) {
        tmp.push(this.students[index].grades[i].grade);
      }
    } else {
      for (
        var i = 0;
        i < this.grades.controls[index].value.grades.length;
        i++
      ) {
        tmp.push(this.grades.controls[index].value.grades[i].grade);
      }
    }
    return (
      Math.round(
        (tmp.reduce((a, b) => a + b, 0) / tmp.length) * 10
      ) / 10
    );
  }

  roundToInt(index: number): number {
    var tmp = [];
    if (this.gradeForm == undefined) {
      for (var i = 0; i < this.students[index].grades.length; i++) {
        tmp.push(this.students[index].grades[i].grade);
      }
    } else {
      for (
        var i = 0;
        i < this.grades.controls[index].value.grades.length;
        i++
      ) {
        tmp.push(this.grades.controls[index].value.grades[i].grade);
      }
    }
    return Math.round(
      tmp.reduce((a, b) => a + b, 0) / tmp.length
    );
  }

  changeGrade(i: number, j: number, changedGrade: string): void {
    this.grades.controls[i].value.grades[j].grade = parseInt(changedGrade);
    this.roundToDecs.controls[i].setValue(this.roundToDec(i));
    this.roundToDecs.controls[i].setValue(this.roundToInt(i));
    this.roundToDecs.value[i] = this.roundToDec(i);
    this.roundToInts.value[i] = this.roundToInt(i);
  }

  get studentsFios(): FormArray {
    return this.gradeForm.get('studentsFios') as FormArray;
  }

  get lessonIds(): FormArray {
    return this.gradeForm.get('lessonIds') as FormArray;
  }

  get lessonDates(): FormArray {
    return this.gradeForm.get('lessonDates') as FormArray;
  }

  get lessonThemes(): FormArray {
    return this.gradeForm.get('lessonThemes') as FormArray;
  }

  get grades(): FormArray {
    return this.gradeForm.get('grades') as FormArray;
  }

  get roundToInts(): FormArray {
    return this.gradeForm.get('roundToInts') as FormArray;
  }

  get roundToDecs(): FormArray {
    return this.gradeForm.get('roundToDecs') as FormArray;
  }


}
