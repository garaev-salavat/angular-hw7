import { Lesson } from './lesson';
import { Student } from './student';
// import { StudentGrade } from './student-grade';

export const LESSONS: Lesson[] = [
  {
    id: 1,
    date: new Date(2021, 1, 16),
    theme: 'Привязка данных',
    homework: 'Домашнее задание на тему привязки данных',
    note: 'Примечания к уроку по привязке данных',
  },
  {
    id: 2,
    date: new Date(2021, 1, 23),
    theme: 'Компоненты',
    homework: 'Домашнее задание на тему Компоненты',
    note: 'Примечания к уроку по Компоненты',
  },
  {
    id: 3,
    date: new Date(2021, 1, 30),
    theme: 'Директивы',
    homework: 'Домашнее задание на тему Директивы',
    note: 'Примечания к уроку по Директивы',
  },
  {
    id: 4,
    date: new Date(2021, 2, 6),
    theme: 'Жизненный цикл',
    homework: 'Домашнее задание на тему Жизненный цикл',
    note: 'Примечания к уроку по Жизненный цикл',
  },
];

export const STUDENT: Student[] = [
  {
    id: 1,
    firstName: 'Иван',
    lastName: 'Иванов',
  },
  {
    id: 2,
    firstName: 'Георгий',
    lastName: 'Паравозов',
  },
  {
    id: 3,
    firstName: 'Ксения',
    lastName: 'Павлова',
  },
  {
    id: 4,
    firstName: 'Роман',
    lastName: 'Горбунов',
  },
  {
    id: 5,
    firstName: 'Андрей',
    lastName: 'Орлов',
  },
];

// export const STUDENT_GRADE: StudentGrade[] = [
//   {
//     lessonId: 1,
//     studentId: 1,
//     grade: 3,
//   },
//   {
//     lessonId: 2,
//     studentId: 1,
//     grade: 5,
//   },
//   {
//     lessonId: 3,
//     studentId: 1,
//     grade: 4,
//   },
//   {
//     lessonId: 4,
//     studentId: 1,
//     grade: 6,
//   },
//   {
//     lessonId: 1,
//     studentId: 2,
//     grade: 4,
//   },
//   {
//     lessonId: 2,
//     studentId: 2,
//     grade: 4,
//   },
//   {
//     lessonId: 3,
//     studentId: 2,
//     grade: 5,
//   },
//   {
//     lessonId: 4,
//     studentId: 2,
//     grade: 3,
//   },
//   {
//     lessonId: 1,
//     studentId: 3,
//     grade: 3,
//   },
//   {
//     lessonId: 2,
//     studentId: 3,
//     grade: 6,
//   },
//   {
//     lessonId: 3,
//     studentId: 3,
//     grade: 5,
//   },
//   {
//     lessonId: 4,
//     studentId: 3,
//     grade: 3,
//   },
//   {
//     lessonId: 1,
//     studentId: 4,
//     grade: 3,
//   },
//   {
//     lessonId: 2,
//     studentId: 4,
//     grade: 6,
//   },
//   {
//     lessonId: 3,
//     studentId: 4,
//     grade: 5,
//   },
//   {
//     lessonId: 4,
//     studentId: 4,
//     grade: 4,
//   },
//   {
//     lessonId: 1,
//     studentId: 5,
//     grade: 3,
//   },
//   {
//     lessonId: 2,
//     studentId: 5,
//     grade: 3,
//   },
//   {
//     lessonId: 5,
//     studentId: 5,
//     grade: 3,
//   },
//   {
//     lessonId: 4,
//     studentId: 5,
//     grade: 3,
//   },

// ];
