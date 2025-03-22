import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListTemplateComponent } from '../../template/list-template/list-template.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {

  public dataSource = new MatTableDataSource<{teste: string}>([
    {teste: 'teste1'},
    {teste: 'teste2'},
    {teste: 'teste3'},
    {teste: 'teste4'},
    {teste: 'teste5'},
    {teste: 'teste6'},
    {teste: 'teste7'},
    {teste: 'teste8'},
    {teste: 'teste9'},
    {teste: 'teste10'},
    {teste: 'teste11'}
  ]);

  public displayedColumns: string[] = ['teste'];


  constructor(private listTemplate: ListTemplateComponent) { }

  ngOnInit() {
    this.listTemplate.changeTitle('Clientes');
    this.listTemplate.changePlaceholderSearch('Pesquisar cliente');
  }



}
