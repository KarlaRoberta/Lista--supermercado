
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ProductService } from './../../product.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../home/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  products: Product[] = []

  product!: Product


  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<DeleteComponent>){
    }

    ngOnInit(): void{
      const id = Number(this.route.snapshot.paramMap.get('id'))
      // this.productService.readById(this.product.id!).subscribe(product => {this.product = product})
    }


    excluir(product: Product){
     this.products = this.products.filter((a) => product.nome !== a.nome)
     this.productService.remove(this.product.id!).subscribe()
     this.router.navigate([''])

    }
     cancelar(): void {
      this.dialogRef.close();
      this.router.navigate(['/products'])

    }

    }

