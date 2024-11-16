import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  textoFinal: string = '';   // Variável que vai receber a palavra final com o efeito
  palavraAtual: string = 'decimal';  // Palavra inicial (decimal)
  indice: number = 0;    // Para controlar qual letra está sendo digitada
  intervalo: any;        // Para armazenar o intervalo da digitação

  ngOnInit() {
    this.iniciarEfeitoDeDigitação();
  }

  // Função para alternar entre 'decimal', 'octal' e 'hexadecimal'
  alternarValor() {
    if (this.palavraAtual === 'decimal') {
      this.palavraAtual = 'octal';
    } else if (this.palavraAtual === 'octal') {
      this.palavraAtual = 'hexadecimal';
    } else {
      this.palavraAtual = 'decimal';
    }

    this.textoFinal = '';    // Limpa o texto antes de iniciar a nova animação
    this.indice = 0;         // Reseta o índice para começar a digitar de novo
    this.iniciarEfeitoDeDigitação();
  }

  // Função para iniciar o efeito de digitação
  iniciarEfeitoDeDigitação() {
    this.intervalo = setInterval(() => {
      if (this.indice < this.palavraAtual.length) {
        this.textoFinal += this.palavraAtual.charAt(this.indice);
        this.indice++;
      } else {
        clearInterval(this.intervalo); // Para o efeito quando a palavra inteira for escrita
        setTimeout(() => {
          this.alternarValor(); // Muda para a próxima palavra após o efeito
        }, 1500);  // Espera 1,5 segundos antes de alternar a palavra
      }
    }, 100);  // Intervalo de tempo entre cada letra
  }
}