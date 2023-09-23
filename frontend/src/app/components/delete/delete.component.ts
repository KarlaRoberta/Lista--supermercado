
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../home/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent  {

  products: Product[] = []

  product!: Product


  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DeleteComponent>){
      this.getProduct()
    }

    removeProduct( product: Product){
      this.products = this.products.filter((a) => product.nome !== a.nome)
      this.productService.remove(product.id!).subscribe()
    }

    getProduct(){
      const id = Number(this.route.snapshot.paramMap.get("id"))
      this.productService.getItem(id).subscribe((product) => (this.product = product))
     }

     cancelar(): void {
      this.dialogRef.close();
      this.router.navigate(['/products'])

    }
    excluir(product: Product){
      this.products = this.products.filter((a) => product.nome !== a.nome)
     this.productService.remove(product.id!).subscribe()
     this.router.navigate([''])

    }

    }

