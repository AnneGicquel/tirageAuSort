import { Injectable } from '@angular/core';
import { STUDENTS, Students } from '../mocks/absents.mock';

@Injectable({
  providedIn: 'root'
})
export class AjoutAbsentsService {

  constructor() { }

  // liste des students
  studentsList: Students[] = STUDENTS;

  // liste vide des absents qui se rempli avec addAbsents()
  absents: string[] = []
}
