import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ListTemplateComponent } from './template/list-template/list-template.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { UiModule } from './core/ui/ui.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { PaginatorIntl } from './core/classes/paginator-intl';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { API_BASE_URL } from './core/interceptors/http/config/api-base-url.token';
import { baseUrlInterceptor } from './core/interceptors/http/config/baseUrl.interceptor';
import { ProductEditModalComponent } from './pages/produtos/modals/product-edit-modal/product-edit-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductRemoveModalComponent } from './pages/produtos/modals/product-remove-modal/product-remove-modal.component';
import { ProductCreateModalComponent } from './pages/produtos/modals/product-create-modal/product-create-modal.component';
import { ClienteCreateModalComponent } from './pages/clientes/modals/cliente-create-modal/cliente-create-modal.component';
import { ClienteEditModalComponent } from './pages/clientes/modals/cliente-edit-modal/cliente-edit-modal.component';
import { ClienteDeleteModalComponent } from './pages/clientes/modals/cliente-delete-modal/cliente-delete-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTemplateComponent,
    ClientesComponent,
    ProdutosComponent,
    ProductEditModalComponent,
    ProductRemoveModalComponent,
    ProductCreateModalComponent,
    ClienteCreateModalComponent,
    ClienteEditModalComponent,
    ClienteDeleteModalComponent
  ],
  imports: [
    SharedModule,
    UiModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [
    { provide: MatPaginatorIntl, useClass: PaginatorIntl },
    { provide: API_BASE_URL, useValue: 'https://localhost:7250/api/' },
    { provide: HTTP_INTERCEPTORS, useClass: baseUrlInterceptor, multi: true }  // Registro do interceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
