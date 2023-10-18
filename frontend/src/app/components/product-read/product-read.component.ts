import { ProductService } from './../../product.service';

import { Component, OnInit,Inject } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { Product } from '../home/product.model';
import { MatDialog } from '@angular/material/dialog';

import { DeleteComponent } from '../delete/delete.component';
import { UpdateComponent } from '../update/update.component';

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

  excluir( product: Product){
    this.products = this.products.filter((a) => product.nome !== a.nome)
    this.productService.remove(product.id!).subscribe()
  }

  removeProduct(product: Product): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: { product } // Passa o produto para o diálogo
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('cancelado');
    });
  }

  updateProduct(product: Product): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      data: { product } // Passa o produto para o diálogo
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('cancelado');
    });
  }
}









