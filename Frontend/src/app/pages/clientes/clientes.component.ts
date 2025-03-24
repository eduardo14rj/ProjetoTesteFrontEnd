import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListTemplateComponent } from '../../template/list-template/list-template.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Cliente } from '../../core/models/cliente';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListProduto } from '../../core/models/list-produto.model';
import { ListCliente } from '../../core/models/list-cliente.model';
import { MatDialog } from '@angular/material/dialog';
import { ClienteCreateModalComponent } from './modals/cliente-create-modal/cliente-create-modal.component';
import { ClienteEditModalComponent } from './modals/cliente-edit-modal/cliente-edit-modal.component';
import { ClienteDeleteModalComponent } from './modals/cliente-delete-modal/cliente-delete-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit, AfterViewInit, OnDestroy {
  public items = new MatTableDataSource<Cliente>([]);
  public displayedColumns: string[] = ['nome', 'email', 'telefone', 'ativo', 'acoes'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public createSub: Subscription = new Subscription();
  public searchSub: Subscription = new Subscription();
  public searchText: string = "";

  constructor(
    private listTemplate: ListTemplateComponent,
    private htttpClient: HttpClient,
    private cdRef: ChangeDetectorRef,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
  ) { }

  ngOnDestroy(): void {
    if (this.searchSub) this.searchSub.unsubscribe();
    if (this.createSub) this.createSub.unsubscribe();
  }

  ngOnInit() {
    this.loadData(10, 1);

    this.createSub = this.listTemplate.CreateEmitter.subscribe(() => {
      var e = this.dialog.open(ClienteCreateModalComponent, {
        width: '400px',
        data: new Cliente(),
        height: 'auto',
      });
      e.afterClosed().subscribe((result: boolean) => {
        if (result) {
          this.loadData(this.paginator.pageSize, this.paginator.pageIndex + 1);
        }
      });
    });

    this.searchSub = this.listTemplate.SearchEmitter.subscribe((search: string) => {
      this.searchText = search;
      this.loadData(10, 1);
    });
  }

  loadData(pageSize: number, pageIndex: number) {
    this.htttpClient.get<ListCliente>(`cliente/Read?pageSize=${pageSize}&pageOffset=${pageIndex}&search=${this.searchText}`)
      .subscribe({
        next: (data) => {
          this.items.data = data.results.map(item => Object.assign(new Cliente(), item));
          this.paginator.pageSize = pageSize;
          this.paginator.length = data.totalRecords;
        },
        error: (error) => {
          this.snackbar.open('Erro ao listar clientes:' + error, 'Fechar', {
            duration: 2000,
          });
        }
      });
  }

  edit(item: Cliente) {
    var e = this.dialog.open(ClienteEditModalComponent, {
      width: '400px',
      data: item,
      height: 'auto',
    });
    e.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.loadData(this.paginator.pageSize, this.paginator.pageIndex + 1);
      }
    });
  }

  delete(item: Cliente) {
    var e = this.dialog.open(ClienteDeleteModalComponent, {
      width: '400px',
      data: item,
      height: 'auto',
    });
    e.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.loadData(this.paginator.pageSize, this.paginator.pageIndex + 1);
      }
    });
  }

  ngAfterViewInit() {
    this.listTemplate.changeTitle('Clientes');
    this.listTemplate.changePlaceholderSearch('Pesquisar cliente');
    this.listTemplate.changeCreateText('Criar novo cliente');
    this.paginator.page.subscribe((event: PageEvent) => {
      this.loadData(event.pageSize, event.pageIndex + 1);
    });
    this.cdRef.detectChanges();
  }
}
