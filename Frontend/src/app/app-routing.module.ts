import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTemplateComponent } from './template/list-template/list-template.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

const routes: Routes = [
  {
    path: "",
    component: ListTemplateComponent,
    children: [
      { path: "", redirectTo: "clientes", pathMatch: "full" },
      { path: "clientes", component: ClientesComponent, data:{ pageTitle: "Clientes" }, title: "Clientes" },
      { path: "produtos", component: ProdutosComponent, data:{ pageTitle: "Produtos" }, title: "Produtos" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
