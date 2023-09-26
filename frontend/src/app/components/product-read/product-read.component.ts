import { MatDialogRef } from '@angular/material/dialog';
// import { DeleteComponent } from './../delete/delete.component';
import { ProductService } from './../../product.service';

import { Component, OnInit,Inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {ActivatedRoute, Router} from '@angular/router'
import { Product } from '../home/product.model';
import { MatDialog } from '@angular/material/dialog';

import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []

  displayedColumns = ['quantidade', 'nome', 'acao'];

  product!: Product

  constructor(private productService: ProductService,  private router: Router, private route: ActivatedRoute, public dialog: MatDialog) {

  }

  ngOnInit(): void{
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(['/products'])
    })
  }

  getProducts(): void{
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.productService.getItem(id).subscribe((product) => (this.product = product))
  }

  excluir( product: Product){
    this.products = this.products.filter((a) => product.nome !== a.nome)
    this.productService.remove(product.id!).subscribe()
  }

  removeProduct(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {

     });

    dialogRef.afterClosed().subscribe(product => {
      console.log('The dialog was closed');
      // this.products = this.products.filter((a) => product.id !== a.id)
      // this.productService.remove(product.id!).subscribe()
      // this.productService = product;
      // this.router.navigate([''])



    });

    //  excluir(product: Product){
    //    this.products = this.products.filter((a) => product.nome !== a.nome)
    //   this.productService.remove(product.id!).subscribe()
    //   this.router.navigate([''])

    //  }


  }


}

