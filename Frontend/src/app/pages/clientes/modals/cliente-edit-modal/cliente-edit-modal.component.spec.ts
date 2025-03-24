import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteEditModalComponent } from './cliente-edit-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatBasicSpinnerDirective } from 'ngx-loading-buttons';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Cliente } from '../../../../core/models/cliente';
import { of } from 'rxjs';

describe('ClienteEditModalComponent', () => {
  let component: ClienteEditModalComponent;
  let fixture: ComponentFixture<ClienteEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteEditModalComponent],
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatBasicSpinnerDirective,
        MatSnackBarModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { id: 1, nome: 'John Doe', email: 'john.doe@example.com', telefone: '1234567890', ativo: true } as Cliente },
        { provide: MatDialogRef, useValue: {} },
        { provide: HttpClient, useValue: {} }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ClienteEditModalComponent);
    component = fixture.componentInstance;

    // Inicializa o formulário com um valor para todos os controles
    component.form.setValue({
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      active: true
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
