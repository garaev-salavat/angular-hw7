import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonsComponent } from './lessons/lessons.component';
import { StudentsComponent } from './students/students.component';
import { StudentGradesComponent } from './student-grades/student-grades.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    StudentsComponent,
    StudentGradesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LessonsComponent, StudentsComponent, StudentGradesComponent]
})
export class AppModule { }
