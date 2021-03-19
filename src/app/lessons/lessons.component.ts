import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lesson } from '../lesson';
import { LESSONS } from '../mock-lessons';
import { CustomValidators } from 'ng2-validation';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
  providers: [DatePipe]
})
export class LessonsComponent {

  lessons: Lesson[] = LESSONS;

  lessonSendForm: FormGroup;

  currentDate: Date = new Date();

  constructor(fb: FormBuilder,private datePipe: DatePipe) {
    this.lessonSendForm = fb.group({
      id: fb.control(0, [Validators.required, Validators.min(1)]),
      date: fb.control(null, [Validators.required, CustomValidators.minDate(datePipe.transform(this.currentDate, 'yyyy-MM-dd'))]),
      theme: fb.control(null, Validators.required),
      homework: fb.control(null, Validators.required),
      note: fb.control(null, Validators.required),
    });
  }

  lessonForm(): void {
    let lessonId: number = this.lessonSendForm.get('id').value;
    let lesson: Lesson = new Lesson();
  
    lesson.id = this.lessonSendForm.get('id').value;

    lesson.date = this.lessonSendForm.get('date').value;
    lesson.theme = this.lessonSendForm.get('theme').value;
    lesson.homework = this.lessonSendForm.get('homework').value;
    lesson.note = this.lessonSendForm.get('note').value;

    if(lesson.id === 0 || lesson.id === null){
      lesson.id = this.lessons.length + 1;
      this.lessons.push(lesson);
    } else {
      let lessonIndex: number = this.lessons.findIndex((o) => o.id === lessonId)
      this.lessons[lessonIndex].id = lessonId;
      this.lessons[lessonIndex].date = lesson.date;
      this.lessons[lessonIndex].theme = lesson.theme;
      this.lessons[lessonIndex].homework = lesson.homework;
      this.lessons[lessonIndex].note = lesson.note;
    }

    this.lessonSendForm.reset();

    console.log(this.lessonSendForm);
  }

  deleteLesson(i: number) {
    this.lessons.splice(i, 1);
  }

  resetForm() {
    this.lessonSendForm.reset();
  }

  editLesson(lesson: Lesson) {
    this.lessonSendForm.get('id').setValue(lesson.id);
    this.lessonSendForm.get('date').setValue(this.datePipe.transform(lesson.date, 'yyyy-MM-dd'));
    this.lessonSendForm.get('theme').setValue(lesson.theme);
    this.lessonSendForm.get('homework').setValue(lesson.homework);
    this.lessonSendForm.get('note').setValue(lesson.note);
  }
}
