import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductCreateModalComponent } from '../../../produtos/modals/product-create-modal/product-create-modal.component';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cliente-create-modal',
  standalone: false,
  templateUrl: './cliente-create-modal.component.html',
  styleUrl: './cliente-create-modal.component.css'
})
export class ClienteCreateModalComponent {
  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{2}\d{4,5}\d{4}$/)]),
    active: new FormControl(true, [Validators.required])
  });
  public load: boolean = false;

  constructor(
    private dialog: MatDialogRef<ProductCreateModalComponent>,
    private http: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  create() {
    this.load = true;
    this.http.post(`cliente/create`, this.form.value).subscribe({
      next: () => {
        this.snackbar.open('Cliente criado com sucesso!', 'Fechar', {
          duration: 5000
        });
        this.load = false;
        this.dialog.close(true);
      },
      error: (error) => {
        this.snackbar.open(JSON.stringify(error), 'Fechar', {});
        this.load = false;
      }
    });
  }

  close() {
    this.dialog.close();
  }

}
