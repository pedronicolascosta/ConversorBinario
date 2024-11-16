// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Importando o componente home
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Tela inicial
  { path: 'formulario', component: FormComponent }, // Rota para o formulário
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }