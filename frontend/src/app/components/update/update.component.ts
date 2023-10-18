import { ProductService } from './../../product.service';

import { Product } from '../home/product.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product!: Product

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<UpdateComponent>){
      this.product = data.product // Atribui o produto que foi passado para a variável local
    }

  ngOnInit(): void{
    const id = +this.route.snapshot.paramMap.get('id')!
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

updateProduct(): void{
  this.productService.update(this.product).subscribe(() => {
    this.productService.showMessage('Produto atualizado com sucesso!')
    this.router.navigate(['/products'])
    this.dialogRef.close();
  })
}
cancel(): void{
  this.dialogRef.close();
  this.router.navigate(['/products']);
}

}
