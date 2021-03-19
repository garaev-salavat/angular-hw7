import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STUDENT } from '../mock-lessons';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  studentsSourse: Student[] = STUDENT;
  studentForm: FormGroup;
  fioStudentsArr = new Array();

  constructor(private fb: FormBuilder) {
    for (var i = 0; i < this.studentsSourse.length; i++) {
      this.fioStudentsArr.push(this.studentsSourse[i].fio);
    }

    this.studentForm = fb.group({
      students: fb.array(this.fioStudentsArr),
    });

    for (var i = 0; i < this.studentsSourse.length; i++) {
      this.students.controls[i].setValidators([Validators.required]);
    }
  }

  get students(): FormArray {
    return this.studentForm.get('students') as FormArray;
  }

  delete(i: number): void {
    this.students.removeAt(i);
  }

  create(i): void {
    this.students.insert(i+1,this.fb.control('', Validators.required));
  }
}
