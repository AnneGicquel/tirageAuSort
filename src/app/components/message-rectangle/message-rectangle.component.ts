import { Component } from '@angular/core';
import { STUDENTS, Students } from 'src/app/mocks/absents.mock';

@Component({
  selector: 'app-message-rectangle',
  templateUrl: './message-rectangle.component.html',
  styleUrls: ['./message-rectangle.component.css']
})
export class MessageRectangleComponent {

// liste des students
studentsList: Students[] = STUDENTS;


}
