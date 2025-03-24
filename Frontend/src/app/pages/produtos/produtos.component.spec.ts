import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutosComponent } from './produtos.component';
import { ListTemplateComponent } from '../../template/list-template/list-template.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule
import { baseUrlInterceptor } from '../../core/interceptors/http/config/baseUrl.interceptor';
import { of, Subject } from 'rxjs';

describe('ProdutosComponent', () => {
  let component: ProdutosComponent;
  let fixture: ComponentFixture<ProdutosComponent>;

  // Cria um stub para ListTemplateComponent com os métodos necessários
  const listTemplateStub = {
    changeTitle: jasmine.createSpy('changeTitle'),
    changePlaceholderSearch: jasmine.createSpy('changePlaceholderSearch'),
    changeCreateText: jasmine.createSpy('changeCreateText'),
    SearchEmitter: new Subject<string>(),
    CreateEmitter: new Subject<void>()
  };

  // Cria um mock para HttpClient
  const httpClientStub = {
    get: jasmine.createSpy('get').and.returnValue(of({ results: [], totalRecords: 0 }))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutosComponent],
      imports: [MatPaginatorModule, MatTableModule, HttpClientModule], // Add MatTableModule here
      providers: [
        { provide: ListTemplateComponent, useValue: listTemplateStub },
        { provide: HTTP_INTERCEPTORS, useClass: baseUrlInterceptor, multi: true },
        { provide: HttpClient, useValue: httpClientStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
