import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ListTemplateComponent } from '../../template/list-template/list-template.component';

@Component({
  selector: 'app-produtos',
  standalone: false,
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit, AfterViewInit {
  constructor(private listTemplate: ListTemplateComponent, private cdRef: ChangeDetectorRef) { }
  ngAfterViewInit() {
     this.listTemplate.changeTitle('Produtos');
    this.listTemplate.changePlaceholderSearch('Pesquisar produto');

    this.cdRef.detectChanges();
  }

  ngOnInit() {
  }




}
