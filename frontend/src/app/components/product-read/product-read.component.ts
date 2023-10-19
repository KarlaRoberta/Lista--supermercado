import { ProductService } from './../../product.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Component, OnInit,Inject } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { Product } from '../home/product.model';
import { MatDialog } from '@angular/material/dialog';
import {SelectionModel} from '@angular/cdk/collections';
import { DeleteComponent } from '../delete/delete.component';
import { UpdateComponent } from '../update/update.component';
import { EXAMPLE_DATA } from '../home/product.model';
import {MatCheckboxModule} from '@angular/material/checkbox';
@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']

})

export class ProductReadComponent implements OnInit {

  products: Product[] = []

  displayedColumns = ['select','quantidade', 'nome', 'acao'];
  dataSource = new MatTableDataSource<Product>(EXAMPLE_DATA);
  selection = new SelectionModel<Product>(true, []);

  product!: Product

  constructor(private productService: ProductService,  private router: Router, private route: ActivatedRoute, public dialog: MatDialog, public MatCheckboxModule: MatCheckboxModule, public MatTableModule: MatTableModule) {

  }

  ngOnInit(): void{
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(['/products'])
    })
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: Product): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.nome + 1}`;
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
