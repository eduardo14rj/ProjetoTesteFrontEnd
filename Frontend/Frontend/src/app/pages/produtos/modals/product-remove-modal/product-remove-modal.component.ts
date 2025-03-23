import { Component, Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Produto } from '../../../../core/models/produto.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-remove-modal',
  standalone: false,
  templateUrl: './product-remove-modal.component.html',
  styleUrl: './product-remove-modal.component.css'
})
export class ProductRemoveModalComponent {
  public productName: string = "";
  public productId: number = -1;
  public load: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Produto,
    private dialog: MatDialogRef<ProductRemoveModalComponent>,
    private http: HttpClient,
    private snackbar: MatSnackBar
  ) {
    this.productName = data.nome;
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
    this.http.delete(`produto/delete`, {
      body: data
    })
      .subscribe({
        next: () => {
          this.snackbar.open('Produto removido com sucesso!', 'Fechar', {
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
