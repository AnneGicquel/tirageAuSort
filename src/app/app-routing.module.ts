import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsentPageComponent } from './pages/absent-page/absent-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes=[
  {
    path:"",
    component:HomepageComponent
  },

  {
    path:'absents',
    component:AbsentPageComponent
  }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { 
  
}
