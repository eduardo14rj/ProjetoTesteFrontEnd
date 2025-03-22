import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { NgIconsModule } from '@ng-icons/core';
import { SharedModule } from './shared/shared.module';
import * as lucideIcons from '@ng-icons/lucide';
import { ListTemplateComponent } from './template/list-template/list-template.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTemplateComponent,
    ClientesComponent,
    ProdutosComponent
  ],
  imports: [
    UiModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons(lucideIcons),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
