import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cliente } from '../../../../core/models/cliente';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cliente-delete-modal',
  standalone: false,
  templateUrl: './cliente-delete-modal.component.html',
  styleUrl: './cliente-delete-modal.component.css'
})
export class ClienteDeleteModalComponent {
  public clientName: string = "";
  public productId: number = -1;
  public load: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Cliente,
    private dialog: MatDialogRef<ClienteDeleteModalComponent>,
    private http: HttpClient,
    private snackbar: MatSnackBar
  ) {
    this.clientName = data.nome;
    this.productId = data.id;
  }

  close() {
    this.dialog.close();
  }

  remove() {
    this.load = true;
    var data = {
      id: this.productId
    }
    this.http.delete(`cliente/delete`, {
      body: data
    })
      .subscribe({
        next: () => {
          this.snackbar.open('Cliente removido com sucesso!', 'Fechar', {
            duration: 5000
          });
          this.dialog.close(true);
        },
        error: (error) => {
          this.snackbar.open(JSON.stringify(error), 'Fechar', {});
          this.load = false;
        }
      });
  }
}
