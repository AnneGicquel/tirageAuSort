import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectionButtonComponent } from './components/selection-button/selection-button.component';
import { AddAbsentComponent } from './components/add-absent/add-absent.component';
import { MessageRectangleComponent } from './components/message-rectangle/message-rectangle.component';
import { AbsentListByGenderComponent } from './components/absent-list-by-gender/absent-list-by-gender.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AbsentPageComponent } from './pages/absent-page/absent-page.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SelectionButtonComponent,
    AddAbsentComponent,
    MessageRectangleComponent,
    AbsentListByGenderComponent,
    HomepageComponent,
    AbsentPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
