import { Lesson } from './lesson';
import { Student } from './student';

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
];

export const STUDENT: Student[] = [
  {
    fio: 'Иван Грозный',
    "grades": [
      {
        lessonId: 1,
        grade: 1,
      },
      {
        lessonId: 2,
        grade: 3,
      },
      {
        lessonId: 3,
        grade: 4,
      },
    ]
  },
  {
    fio: 'Георгий Паравозов',
    grades: [
      {
        lessonId: 1,
        grade: 4,
      },
      {
        lessonId: 2,
        grade: 4,
      },
      {
        lessonId: 3,
        grade: 5,
      },
    ]
  },
  {
    fio: 'Ксения Павлова',
    grades: [
      {
        lessonId: 1,
        grade: 3,
      },
      {
        lessonId: 2,
        grade: 6,
      },
      {
        lessonId: 3,
        grade: 5,
      },
    ]
  },
 
];