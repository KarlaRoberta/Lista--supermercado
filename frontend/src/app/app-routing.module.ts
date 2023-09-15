import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductReadComponent } from './components/product-read/product-read.component';

const routes: Routes = [
  {path: 'products', component: ProductReadComponent},
  {path: '', component: ProductReadComponent},
  {path: 'products/delete', component: ProductReadComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
