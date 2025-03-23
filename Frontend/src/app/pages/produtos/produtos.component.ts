import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ListTemplateComponent } from '../../template/list-template/list-template.component';
import { HttpClient } from '@angular/common/http';
import { ListProduto } from '../../core/models/list-produto.model';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from '../../core/models/produto.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ProductEditModalComponent } from './modals/product-edit-modal/product-edit-modal.component';
import { ProductRemoveModalComponent } from './modals/product-remove-modal/product-remove-modal.component';
import { ProductCreateModalComponent } from './modals/product-create-modal/product-create-modal.component';

@Component({
  selector: 'app-produtos',
  standalone: false,
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit, AfterViewInit, OnDestroy {

  public items = new MatTableDataSource<Produto>([]);
  public columns = ['nome', 'preco', 'criadoEm', 'acoes'];
  private searchText: string = "";
  private searchSub!: Subscription;
  private createSub!: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private listTemplate: ListTemplateComponent,
    private cdRef: ChangeDetectorRef,
    private httpClient: HttpClient, // Corrected spelling here
    private dialog: MatDialog) { }

  ngAfterViewInit() {
    this.listTemplate.changeTitle('Produtos');
    this.listTemplate.changePlaceholderSearch('Pesquisar produto');
    this.listTemplate.changeCreateText('Criar novo produto');
    this.paginator.page.subscribe((event: PageEvent) => {
      this.loadData(event.pageSize, event.pageIndex + 1);
    });

    this.cdRef.detectChanges();
  }

  ngOnInit() {
    this.loadData(10, 1);
    this.searchSub = this.listTemplate.SearchEmitter.subscribe((searchValue: string) => {
      this.searchText = searchValue;
      this.loadData(this.paginator.pageSize, this.paginator.pageIndex);
      this.paginator.firstPage();
    });

    this.createSub = this.listTemplate.CreateEmitter.subscribe(() => {
      var e = this.dialog.open(ProductCreateModalComponent, {
        width: '400px',
        data: new Produto(),
        height: 'auto',
      });
      e.afterClosed().subscribe((result: boolean) => {
        if (result) {
          this.loadData(this.paginator.pageSize, this.paginator.pageIndex + 1);
        }
      });
    });
  }

  ngOnDestroy(): void {
    if (this.searchSub) this.searchSub.unsubscribe();
    if (this.createSub) this.createSub.unsubscribe();
  }

  loadData(pageSize: number, pageIndex: number) {
    this.httpClient.get<ListProduto>(`produto/Read?pageSize=${pageSize}&pageOffset=${pageIndex}&search=${this.searchText}`)
      .subscribe({
        next: (data) => {
          this.items.data = data.results.map(item => Object.assign(new Produto(), item));
          this.paginator.pageSize = pageSize;
          this.paginator.length = data.totalRecords;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  edit(item: Produto) {
    var e = this.dialog.open(ProductEditModalComponent, {
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

  delete(item: Produto) {
    var e = this.dialog.open(ProductRemoveModalComponent, {
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

}