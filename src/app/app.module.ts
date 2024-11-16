import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // se você estiver usando formulários

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component'; // Importe o FormComponent
import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home.component'; // Importe o HomeComponent
import { AppRoutingModule } from './app-routing.module'; // Importe o módulo de rotas

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,  // Declare o FormComponent aqui
    MenuComponent,  // Declare o MenuComponent aqui
    HomeComponent   // Declare o HomeComponent aqui
  ],
  imports: [
    BrowserModule,
    FormsModule, // Certifique-se de que o FormsModule está importado se usar formulários
    AppRoutingModule  // Inclua o AppRoutingModule para configurar o roteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }