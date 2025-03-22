import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ListTemplateComponent } from '../../template/list-template/list-template.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produtos',
  standalone: false,
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit, AfterViewInit {
  constructor(
    private listTemplate: ListTemplateComponent,
    private cdRef: ChangeDetectorRef,
    private htttpClient: HttpClient) { }

  ngAfterViewInit() {
    this.listTemplate.changeTitle('Produtos');
    this.listTemplate.changePlaceholderSearch('Pesquisar produto');
    this.cdRef.detectChanges();
  }

  ngOnInit() {
    this.htttpClient.get('produto/Read')
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

}
