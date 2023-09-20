import { ProductService } from './../../product.service';

import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {Router} from '@angular/router'
import { Product } from '../home/product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []
  displayedColumns = ['quantidade', 'nome', 'acao'];


  constructor(private productService: ProductService, private matIconModule: MatIconModule, private router: Router) {}

  ngOnInit(): void{
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(['/products'])
    })
  }

}
 


