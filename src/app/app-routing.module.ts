import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductCreateComponent } from './admin/product-create/product-create.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { ProductsComponent } from './admin/products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path : 'dashboard', component : DashboardComponent 
  },
  {
  path : 'admin', component : AdminComponent,
  children : [
    {
      path : 'products', component : ProductsComponent
    },
    {
      path : 'product/create', component : ProductCreateComponent
    },
    {
      path : 'product/:id/edit', component : ProductEditComponent
    }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
