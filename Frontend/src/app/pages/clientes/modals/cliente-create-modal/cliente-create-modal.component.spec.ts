import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCreateModalComponent } from './cliente-create-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { Cliente } from '../../../../core/models/cliente';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBasicSpinnerDirective } from 'ngx-loading-buttons';

describe('ClienteCreateModalComponent', () => {
  let component: ClienteCreateModalComponent;
  let fixture: ComponentFixture<ClienteCreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteCreateModalComponent],
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatBasicSpinnerDirective
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: HttpClient, useValue: {} },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ClienteCreateModalComponent);
    component = fixture.componentInstance;

    component.form.setValue({
      active: true,
      email: "johndoe@gmail.com",
      name: "John Doe",
      phone: "826378823"
    })

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
