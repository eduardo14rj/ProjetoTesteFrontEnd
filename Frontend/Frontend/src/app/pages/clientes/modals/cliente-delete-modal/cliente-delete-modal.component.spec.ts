import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDeleteModalComponent } from './cliente-delete-modal.component';

describe('ClienteDeleteModalComponent', () => {
  let component: ClienteDeleteModalComponent;
  let fixture: ComponentFixture<ClienteDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteDeleteModalComponent]
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
