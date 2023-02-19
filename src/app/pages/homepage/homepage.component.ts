import {Component} from '@angular/core';
import { Students, STUDENTS } from 'src/app/mocks/absents.mock';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

constructor(){
  
}
  // liste des students
  studentsList: Students[] = STUDENTS;

  // "est inactive". Variable booléenne assignée à true
  isDisabled: boolean = true;
  
  // fonction "est active" qui assigne false à la variable isDisabled
  // change l'état du bouton
  
  isEnable(){
  
    this.isDisabled = false;
  
  }
  
   
// ---> il n'y a que si enable est à false que cela fonctionne dans le console.log 


  getWinnerName() {

    // renvoie un nombre pseudo-aléatoire à virgule flottante compris entre 0 (inclus) et 1 (exclusif).
    let rand = Math.random();
    // multiplie le nombre aléatoire par la longueur du tableau.
    let totalStudents = this.studentsList.length;
    // .floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x.
    let randIndex = Math.floor(rand * totalStudents);
    let winner = this.studentsList[randIndex];
    // retourne le.la gagnant.e
    console.log (winner)
    return winner
    
    }

}






// FONCTIONS TEST...🤯

// // "est inactive". Variable booléenne assignée à true
// // isDisabled: boolean = true;

// // fonction "est active" qui assigne false à la variable isDisabled
// // change l'état du bouton
// isEnable() {

//   this.isDisabled = false;   

// }

// GETWINNERNAME ICI!!!!

// // TEST mais GETWINNERNAME.ISMALE FONCTIONNE
// genderIsMale(){

// let person = this.getWinnerName();
// let gender = person.isMale
// console.log (gender)

// }
   

// }


  
// FONCTION GETWINNERNAME EN 2 FONCTIONS

// getWinnerName() {

// let winner = this.studentsList[this.randomIndex()];
// retourne le.la gagnant.e
// console.log (winner)
// return winner

// }

// randomIndex() {
// renvoie un nombre pseudo-aléatoire à virgule flottante compris entre 0 (inclus) et 1 (exclusif).
// let rand = Math.random();
// multiplie le nombre aléatoire par la longueur du tableau.
// let totalStudents = this.studentsList.length;
// .floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x.
// let randIndex =Math.floor(rand * totalStudents);
// console.log('randomindex'+this.randomIndex())
// return randIndex

// }

// TESTS POUR TRAITER ERROR NG0100: ExpressionChangedAfterItHasBeenCheckedError:🤪

  
// ngOnInit() {
// //code à exécuter lors de l'initialisation du composant
// this.isDisabled
// // this.isEnable();
// }



// ngAfterViewInit() {
//   Promise.resolve().then(() => this.isEnable)
// }

// // fonction "est active" qui assigne false à la variable isDisabled
// // change l'état du bouton

// isEnable(){

//   this.isDisabled = false;

// }


// 
// @ViewChild('item')item: any;
// isDisabled=true;

//   // "est inactive". Variable booléenne assignée à true
//   // isDisabled: boolean = true;
  
//   ngAfterViewInit() {
//     this.isEnable
//     this.cd.detectChanges();
//   }


// DIFFERENCE ENTRE DEUX ARRAYS
  // let arr1 = [1, 2, 3, 4, 5];
  // let arr2 = [5, 6, 7, 8];
  // let difference = arr1.filter(x => arr2.indexOf(x) === -1);
  // console.log(difference);
