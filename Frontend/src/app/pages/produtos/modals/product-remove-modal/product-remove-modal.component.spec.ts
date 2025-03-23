import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRemoveModalComponent } from './product-remove-modal.component';

describe('ProductRemoveModalComponent', () => {
  let component: ProductRemoveModalComponent;
  let fixture: ComponentFixture<ProductRemoveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductRemoveModalComponent]
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
