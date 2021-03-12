import { DatePipe } from '@angular/common';
import { Component, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lesson } from '../lesson';
import { LESSONS } from '../mock-lessons';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
})
export class LessonsComponent {
  lessons: Lesson[] = LESSONS;

  lessonSendForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.lessonSendForm = fb.group({
      id: fb.control(0, Validators.required),
      date: fb.control(Date, Validators.required),
      theme: fb.control('', Validators.required),
      homework: fb.control(''),
      note: fb.control(''),
    });
  }

  lessonForm(): void {
    let lesson: Lesson = new Lesson();
    lesson.id = this.lessonSendForm.get('id').value;
    lesson.date = this.lessonSendForm.get('date').value;
    lesson.theme = this.lessonSendForm.get('theme').value;
    lesson.homework = this.lessonSendForm.get('homework').value;
    lesson.note = this.lessonSendForm.get('note').value;

    for (let i = 0; i < this.lessons.length; i++) {
      let element = this.lessons[i];
      if (element.id == lesson.id) {
        this.lessons.splice(i, 1);
        this.lessons.push(lesson);
        break;
      } else {
        this.lessons.push(lesson);
        break;
      }

    }
    this.lessonSendForm.reset()

    console.log(this.lessonSendForm);
  }

  deleteLesson(i: number) {
    this.lessons.splice(i, 1);
  }

  resetForm(){
    this.lessonSendForm.reset();
  }

  editLesson(lesson: Lesson) {
    this.lessonSendForm.get("id").setValue(lesson.id);
    this.lessonSendForm.get("date").setValue(lesson.date);
    this.lessonSendForm.get("theme").setValue(lesson.theme);
    this.lessonSendForm.get("homework").setValue(lesson.homework);
    this.lessonSendForm.get("note").setValue(lesson.note);  }
}
