import { Component} from '@angular/core';
import { STUDENTS, Students } from 'src/app/mocks/absents.mock';
import { AjoutAbsentsService } from 'src/app/services/ajout-absents.service';

@Component({
  selector: 'app-add-absent',
  templateUrl: './add-absent.component.html',
  styleUrls: ['./add-absent.component.css']
})
export class AddAbsentComponent {

  constructor(public data: AjoutAbsentsService){

  }
 
  // liste des students
  studentsList: Students[] = STUDENTS;

  // recevra le nom cliqué dans la drop-down avec (change)
  selectedAbsents = "";


  onSelected(value: any) {
  // remplace "" par la valeur cliquée dans la drop-down  
  this.selectedAbsents = value.target.value;
  }

  addAbsent(){
  // envoyer les noms capturés au service
  this.data.absents.push(this.selectedAbsents)
  console.log(this.selectedAbsents)
  // et remets à vide
  this.selectedAbsents="";
  }







  // STOCKER DANS LE LOCAL STORAGE
  // addAbsent() {
  //   // Stocker les données dans le local storage
  //   let absents = [];
  // storedAbsents est une variable utilisée pour stocker la valeur du tableau absents 
  //   const storedAbsents = localStorage.getItem('absents');
  //   if (storedAbsents !== null) {
  //     absents = JSON.parse(storedAbsents);
  //   }
  //   this.data.absents.push(this.selectedAbsents);
  //   localStorage.setItem('absents', JSON.stringify(absents));

  //   // envoyer les noms capturés au service
  //   this.data.absents = absents;
  //   console.log(this.data.absents);

  //   // Remettre à vide
  //   this.selectedAbsents = "";
  // }
}
  





