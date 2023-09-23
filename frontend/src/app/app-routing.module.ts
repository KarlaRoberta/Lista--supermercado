import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductReadComponent } from './components/product-read/product-read.component';
import { DeleteComponent } from './components/delete/delete.component';

const routes: Routes = [
  {path: '', component: ProductReadComponent},
  {path: 'products', component: ProductReadComponent},
  {path: 'products/delete/:id', component: DeleteComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
