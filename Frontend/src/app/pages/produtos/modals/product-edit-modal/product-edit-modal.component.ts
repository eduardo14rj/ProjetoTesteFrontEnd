import { Component, Inject, Input, OnInit } from '@angular/core';
import { Produto } from '../../../../core/models/produto.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateProduto } from '../../../../core/models/update-produto';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-edit-modal',
  standalone: false,
  templateUrl: './product-edit-modal.component.html',
  styleUrls: ['./product-edit-modal.component.css']
})
export class ProductEditModalComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required])
  });
  
  public load: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Produto,
    private dialogRef: MatDialogRef<ProductEditModalComponent>,
    private http: HttpClient,
    private snackbar: MatSnackBar
  ) {
    this.form.setValue({
      name: this.data.nome,
      price: this.data.preco
    })
  }

  ngOnInit(): void {
    this.form.setValue({
      name: this.data.nome,
      price: this.data.preco
    });
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.load = true;
    if (this.form.valid) {

      var data = { ...this.form.value, id: this.data.id };

      this.http.put('produto/Update', data)
        .subscribe({
          next: () => {
            this.snackbar.open('Produto atualizado com sucesso!', 'Fechar', {
              duration: 5000
            });
            this.dialogRef.close(true);
          },
          error: (error) => {
            this.snackbar.open(JSON.stringify(error), 'Fechar', {
              panelClass: ['snackbar-error']
            });
          }
        });


    }
    this.load = false;
  }
}
