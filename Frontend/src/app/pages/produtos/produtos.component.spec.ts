import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutosComponent } from './produtos.component';
import { ListTemplateComponent } from '../../template/list-template/list-template.component';

describe('ProdutosComponent', () => {
  let component: ProdutosComponent;
  let fixture: ComponentFixture<ProdutosComponent>;

  // Cria um stub para ListTemplateComponent com os métodos necessários
  const listTemplateStub = {
    changeTitle: jasmine.createSpy('changeTitle'),
    changePlaceholderSearch: jasmine.createSpy('changePlaceholderSearch')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutosComponent],
      providers: [
        { provide: ListTemplateComponent, useValue: listTemplateStub }
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
