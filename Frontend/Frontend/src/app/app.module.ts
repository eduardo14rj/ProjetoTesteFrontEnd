import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIconsModule } from '@ng-icons/core';
import { SharedModule } from './shared/shared.module';
import { ListTemplateComponent } from './template/list-template/list-template.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { UiModule } from './core/ui/ui.module';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { PaginatorIntl } from './core/classes/paginator-intl';

@NgModule({
  declarations: [
    AppComponent,
    ListTemplateComponent,
    ClientesComponent,
    ProdutosComponent
  ],
  imports: [
    SharedModule,
    UiModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [
    { provide: MatPaginatorIntl, useClass: PaginatorIntl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
