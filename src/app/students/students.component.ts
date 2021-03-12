import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Lesson } from '../lesson';
import { STUDENT } from '../mock-lessons';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  students: Student[] = STUDENT;

  studentSendForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.studentSendForm = fb.group({
      id: fb.control(0),
      firstName: fb.control(''),
      lastName: fb.control(''),
    });
  }

  studentForm(): void {
    let student: Student = new Student();
    student.id = this.studentSendForm.get('id').value;
    student.firstName = this.studentSendForm.get('firstName').value;
    student.lastName = this.studentSendForm.get('lastName').value;

    for (let i = 0; i < this.students.length; i++) {
      let element = this.students[i];
      if (element.id == student.id) {
        this.students.splice(i, 1);
        this.students.push(student);
        break;
      } else {
        this.students.push(student);
        break;
      }

    }
    this.studentSendForm.reset()

    console.log(this.studentSendForm);
  }

  deleteStudent(i: number) {
    this.students.splice(i, 1);
  }

  resetForm(){
    this.studentSendForm.reset();
  }

  editStudent(student: Student) {
    this.studentSendForm.get("id").setValue(student.id);
    this.studentSendForm.get("firstName").setValue(student.firstName);
    this.studentSendForm.get("lastName").setValue(student.lastName);
  }
}

