import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-create-modal',
  standalone: false,
  templateUrl: './product-create-modal.component.html',
  styleUrl: './product-create-modal.component.css'
})
export class ProductCreateModalComponent {
  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    stock: new FormControl(1, [Validators.required, Validators.min(0), Validators.max(999999999)]),
  });
  public load: boolean = false;
  constructor(
    private dialog: MatDialogRef<ProductCreateModalComponent>,
    private http: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  close() {
    this.dialog.close();
  }

  create() {
    this.http.post(`produto/create`, this.form.value).subscribe({
      next: () => {
        this.snackbar.open('Produto criado com sucesso!', 'Fechar', {
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
