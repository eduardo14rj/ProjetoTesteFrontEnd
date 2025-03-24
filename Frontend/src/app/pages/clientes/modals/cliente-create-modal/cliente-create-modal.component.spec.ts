import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteCreateModalComponent } from './cliente-create-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { MatBasicSpinnerDirective } from 'ngx-loading-buttons';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { baseUrlInterceptor } from '../../../../core/interceptors/http/config/baseUrl.interceptor';
import { API_BASE_URL } from '../../../../core/interceptors/http/config/api-base-url.token';
import { environment } from '../../../../../environments/environment';

describe('ClienteCreateModalComponent', () => {
  let component: ClienteCreateModalComponent;
  let fixture: ComponentFixture<ClienteCreateModalComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteCreateModalComponent],
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatBasicSpinnerDirective,
        HttpClientTestingModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: API_BASE_URL, useValue: environment.apiUrl }, // ✅ baseUrl real do environment
        { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } },
        { provide: HTTP_INTERCEPTORS, useClass: baseUrlInterceptor, multi: true }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteCreateModalComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new client', () => {
    const nameInput = fixture.debugElement.query(By.css('input[formControlName="name"]')).nativeElement;
    const emailInput = fixture.debugElement.query(By.css('input[formControlName="email"]')).nativeElement;
    const phoneInput = fixture.debugElement.query(By.css('input[formControlName="phone"]')).nativeElement;
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;

    nameInput.value = 'John Doe';
    nameInput.dispatchEvent(new Event('input'));
    emailInput.value = 'johnDoe@gmail.com';
    emailInput.dispatchEvent(new Event('input'));
    phoneInput.value = '9820394832';
    phoneInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.form.valid).toBeTrue();

    submitButton.click();

    // ✅ Agora verificando a URL com base no API_BASE_URL real (interceptor já aplicou)
    const req = httpTestingController.expectOne(
      (request) =>
        request.url === `${environment.apiUrl}cliente/create` &&
        request.method === 'POST',
    );

    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(component.form.value);

    

    req.flush({}); // simula resposta do servidor

    // Você pode adicionar aqui mais asserts se quiser testar se o diálogo foi fechado, etc.
  });
});
