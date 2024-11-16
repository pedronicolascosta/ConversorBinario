import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component'; 
import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home.component'; 
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component'; 

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,  
    MenuComponent,  
    HomeComponent,
    FooterComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }