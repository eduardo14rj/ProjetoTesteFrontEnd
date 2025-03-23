import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateModalComponent } from './product-create-modal.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MAT_FORM_FIELD, MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBasicSpinnerDirective } from 'ngx-loading-buttons';
import { MatInputModule } from '@angular/material/input';

describe('ProductCreateModalComponent', () => {
  let component: ProductCreateModalComponent;
  let fixture: ComponentFixture<ProductCreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCreateModalComponent],
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatBasicSpinnerDirective,
        MatInputModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: HttpClient, useValue: {} }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
