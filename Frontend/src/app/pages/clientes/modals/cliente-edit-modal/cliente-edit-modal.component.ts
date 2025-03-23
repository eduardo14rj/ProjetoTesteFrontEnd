import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductCreateModalComponent } from '../../../produtos/modals/product-create-modal/product-create-modal.component';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from '../../../../core/models/cliente';

@Component({
  selector: 'app-cliente-edit-modal',
  standalone: false,
  templateUrl: './cliente-edit-modal.component.html',
  styleUrl: './cliente-edit-modal.component.css'
})
export class ClienteEditModalComponent {
  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{2}\d{4,5}\d{4}$/)]),
    active: new FormControl(true, [Validators.required])
  });
  public load: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Cliente,
    private dialog: MatDialogRef<ProductCreateModalComponent>,
    private http: HttpClient,
    private snackbar: MatSnackBar
  ) {
    this.form.setValue({
      name: this.data.nome,
      email: this.data.email,
      phone: this.data.telefone,
      active: this.data.ativo
    });
  }

  edit() {
    this.load = true;
    this.http.put(`cliente/update`, { ...this.form.value, id: this.data.id }).subscribe({
      next: () => {
        this.snackbar.open('Cliente editado com sucesso!', 'Fechar', {
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
