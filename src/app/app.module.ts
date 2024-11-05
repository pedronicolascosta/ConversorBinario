import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // se você estiver usando formulários

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component'; // Importe o FormComponent

@NgModule({
  declarations: [
    AppComponent,
    FormComponent  // Declare o FormComponent aqui
  ],
  imports: [
    BrowserModule,
    FormsModule // Certifique-se de que o FormsModule está importado se usar forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }