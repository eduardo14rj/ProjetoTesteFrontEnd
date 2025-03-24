import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDeleteModalComponent } from './cliente-delete-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatBasicSpinnerDirective } from 'ngx-loading-buttons';

describe('ClienteDeleteModalComponent', () => {
  let component: ClienteDeleteModalComponent;
  let fixture: ComponentFixture<ClienteDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteDeleteModalComponent],
      imports: [MatDialogModule, MatBasicSpinnerDirective],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: HttpClient, useValue: {} }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ClienteDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
