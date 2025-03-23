import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import { ProductRemoveModalComponent } from './product-remove-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatBasicSpinnerDirective, NgxLoadingButtonsModule } from 'ngx-loading-buttons';

describe('ProductRemoveModalComponent', () => {
  let component: ProductRemoveModalComponent;
  let fixture: ComponentFixture<ProductRemoveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductRemoveModalComponent],
      imports: [
        MatDialogModule,
        MatButtonModule,
        NgxLoadingButtonsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: HttpClient, useValue: {} },
      ],
      schemas: []
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductRemoveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
