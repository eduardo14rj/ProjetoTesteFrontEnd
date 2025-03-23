import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductEditModalComponent } from './product-edit-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatBasicSpinnerDirective } from 'ngx-loading-buttons';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Produto } from '../../../../core/models/produto.model';

describe('ProductEditModalComponent', () => {
  let component: ProductEditModalComponent;
  let fixture: ComponentFixture<ProductEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductEditModalComponent],
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule, // Add MatInputModule here
        ReactiveFormsModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatBasicSpinnerDirective,
        MatSnackBarModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { id: 1, nome: "John", preco: 36.8 } as Produto },
        { provide: MatDialogRef, useValue: {} },
        { provide: HttpClient, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductEditModalComponent);
    component = fixture.componentInstance;

    // Inicializa o formulário com um valor para todos os controles
    component.form.setValue({
      name: "John",
      price: 36.8
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
