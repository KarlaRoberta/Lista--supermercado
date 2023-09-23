import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { Product } from './components/home/product.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteComponent } from './components/delete/delete.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3002/products"

  constructor( private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }

  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }
  remove(id: number): Observable<Product>{
    return this.http.delete<Product>(`${this.baseUrl}/${id}`)
  }

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  getItem(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${id}`)
  }

  // delete(id: number): Observable<Product>{
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.delete<Product>(url);
  // }

}
