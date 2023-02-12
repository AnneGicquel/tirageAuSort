import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectionButtonComponent } from './components/selection-button/selection-button.component';
import { AddAbsentComponent } from './components/add-absent/add-absent.component';
import { MessageRectangleComponent } from './components/message-rectangle/message-rectangle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SelectionButtonComponent,
    AddAbsentComponent,
    MessageRectangleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
