import { Component } from '@angular/core';
import { STUDENTS, Students } from 'src/app/mocks/absents.mock';
import { AjoutAbsentsService } from 'src/app/services/ajout-absents.service';

@Component({
  selector: 'app-absent-list-by-gender',
  templateUrl: './absent-list-by-gender.component.html',
  styleUrls: ['./absent-list-by-gender.component.css']
})
export class AbsentListByGenderComponent {

  // injection du service
  constructor(public data: AjoutAbsentsService){
      
  };

  ngOnInit(){
// this.studentList = this.data.studentsList
// this.data.absents.push(this.selectedAbsents)
}
studentList : Students[] = STUDENTS;

// removeAbsent(){
//   let index: number = this.data.absents.indexOf(this.data.absents[]);
//   this.data.absents.splice(index);
// }

}
