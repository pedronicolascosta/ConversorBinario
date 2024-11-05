import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  convercao = {
    tipo: '',
    valor: '',
  };

  valorConvertido: string | null = null;

  onSubmit() {
    console.log('Form submitted!', this.convercao);
    // Aqui você pode adicionar a lógica para enviar os dados para um backend
    console.log(`Tipo: ${this.convercao.tipo}`);
    console.log(`Valor: ${this.convercao.valor}`);

    if (!this.convercao.tipo || !this.convercao.valor) {
      alert('Por favor, preencha todos os campos!');
      return;
  }

    const url = `http://localhost:3001/converter/${this.convercao.tipo}/${this.convercao.valor}`;

    fetch(url)
      .then(response => response.json())  
      .then(data => {
        console.log('Resultado da conversão:', data);
        this.valorConvertido = data.valorConvertido || data;
      })
      .catch(error => {
        console.error('Erro ao converter:', error);
      });
  }
}