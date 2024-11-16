import { Component } from '@angular/core';
import Swal from 'sweetalert2';

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

    if (!this.convercao.tipo || !this.convercao.valor) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Por favor, preencha todos os campos!',
        customClass: {
          confirmButton: 'custom-confirm-button',
        }
      });
      return;
    }

    const url = `http://localhost:3001/converter/${this.convercao.tipo}/${this.convercao.valor}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.valorConvertido = data.valorConvertido || data;

        // SweetAlert2 com botões personalizados
        Swal.fire({
          title: 'Conversão realizada com sucesso!',
          html: `Valor convertido: <b>${this.valorConvertido}</b>`,
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: 'Fechar',
          cancelButtonText: '<i class="fi fi-rr-copy"></i> Copiar valor',
          customClass: {
            confirmButton: 'custom-confirm-button', // Estilo do botão de fechar
            cancelButton: 'custom-cancel-button'   // Estilo do botão de copiar
          }
        }).then(result => {
          if (result.dismiss === Swal.DismissReason.cancel) {
            this.copiarParaClipboard(this.valorConvertido);
          }
        });
      })
      .catch(error => {
        console.error('Erro ao converter:', error);
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Ocorreu um erro ao tentar realizar a conversão.',
          customClass: {
            confirmButton: 'custom-confirm-button',
          }
        });
      });
  }

  copiarParaClipboard(valor: string | null) {
    if (valor) {
      navigator.clipboard.writeText(valor)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Copiado!',
            text: 'O valor foi copiado para a área de transferência.',
            timer: 2000,
            showConfirmButton: false,
            customClass: {
              confirmButton: 'custom-confirm-button',
            }
          });
        })
        .catch(err => {
          console.error('Erro ao copiar para a área de transferência: ', err);
          Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Não foi possível copiar o valor.',
            customClass: {
              confirmButton: 'custom-confirm-button',
            }
          });
        });
    }
  }
}