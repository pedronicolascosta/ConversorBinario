import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  textoFinal: string = '';   
  palavraAtual: string = 'decimal';  
  indice: number = 0;    
  intervalo: any;        

  ngOnInit() {
    this.iniciarEfeitoDeDigitação();
  }

  alternarValor() {
    if (this.palavraAtual === 'decimal') {
      this.palavraAtual = 'octal';
    } else if (this.palavraAtual === 'octal') {
      this.palavraAtual = 'hexadecimal';
    } else {
      this.palavraAtual = 'decimal';
    }

    this.textoFinal = '';    
    this.indice = 0;         
    this.iniciarEfeitoDeDigitação();
  }

  
  iniciarEfeitoDeDigitação() {
    this.intervalo = setInterval(() => {
      if (this.indice < this.palavraAtual.length) {
        this.textoFinal += this.palavraAtual.charAt(this.indice);
        this.indice++;
      } else {
        clearInterval(this.intervalo); 
        setTimeout(() => {
          this.alternarValor(); 
        }, 1500);  
      }
    }, 100);  
  }
}