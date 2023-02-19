import { Component } from '@angular/core';
import { STUDENTS, Students } from 'src/app/mocks/absents.mock';

@Component({
  selector: 'app-selection-button',
  templateUrl: './selection-button.component.html',
  styleUrls: ['./selection-button.component.css']
})
export class SelectionButtonComponent {

//   constructor(){
  
//   }
//   // liste des students
//   studentsList: Students[] = STUDENTS;
  
//   // "est inactive". Variable booléenne assignée à true
//   isDisabled: boolean = true;
    
//   // fonction "est active" qui assigne false à la variable isDisabled
//   // change l'état du bouton
    
//   isEnable(){
    
//     this.isDisabled = false;
    
//   }
    
     
//   // ---> il n'y a que si enable est à false que cela fonctionne dans le console.log 
  
  
//   getWinnerName() {
  
//     // renvoie un nombre pseudo-aléatoire à virgule flottante compris entre 0 (inclus) et 1 (exclusif).
//     let rand = Math.random();
//     // multiplie le nombre aléatoire par la longueur du tableau.
//     let totalStudents = this.studentsList.length;
//     // .floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x.
//     let randIndex = Math.floor(rand * totalStudents);
//     let winner = this.studentsList[randIndex];
//     // retourne le.la gagnant.e
//     console.log (winner)
//     return winner
      
//     }
  
}

