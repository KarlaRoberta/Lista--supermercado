import { ProductService } from './../../product.service';
import { Component } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import { Product } from './product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  product: Product = {
    quantidade: undefined,
    nome: ''
  }

  constructor(private ProductService: ProductService, private matFormFieldModule: MatFormFieldModule,
    private router: Router){}

    ngOnInit(): void {

    }

  adicionarItem(): void{
    this.ProductService.create(this.product).subscribe(() =>{
      this.ProductService.showMessage('Item adicionado')
      this.router.navigate([''])

    })

  }


}
