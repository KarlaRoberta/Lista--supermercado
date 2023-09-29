
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ProductService } from './../../product.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../home/product.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent implements OnInit {

  product: Product

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductService,
    private router: Router,
    public dialogRef: MatDialogRef<DeleteComponent>
  ) {
    this.product = data.product // Atribui o produto que foi passado para a variável local
  }

  ngOnInit(): void {

  }

  excluir(): void {
    this.productService.remove(this.product.id!).subscribe(() => {
      this.dialogRef.close();
    });
  }

  cancelar(): void {
    this.dialogRef.close();
    this.router.navigate(['/products']);
  }
}




