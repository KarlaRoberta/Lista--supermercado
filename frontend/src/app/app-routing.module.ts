import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductReadComponent } from './components/product-read/product-read.component';
import { DeleteComponent } from './components/delete/delete.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path: '', component: ProductReadComponent},
  {path: 'products', component: ProductReadComponent},
  {path: 'products/delete/:id', component: DeleteComponent},
  {path: 'products/update/:id', component: UpdateComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
