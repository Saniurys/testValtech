import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable, of } from 'rxjs';
import { catchError, map, tap, finalize } from 'rxjs/operators';

import { Product } from './product';



@Injectable({ providedIn: 'root' })
export class ProductService {
    allProducts: Product[];
    private productUrl = 'http://localhost:3000/productos';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
 

    constructor(private http: HttpClient) { }
    getProducts() {
        return this.http.get<Product[]>(this.productUrl).subscribe(
            (data: Product[]) => {
                this.allProducts = data;
                console.table(this.allProducts);
            });
    }
    getProduct(id: number): Observable<Product> {
        const url = `${this.productUrl}/${id}`;
        return this.http.get<Product>(url).pipe(
            map(res => res)
        );
    }
    addProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.productUrl, product, this.httpOptions);
    }
    deleteProduct(id: Number): Observable<Product> {
        const url = `${this.productUrl}/${id}`;
        return this.http.delete<Product>(url);
    }
    updateProduct(product: Product): Observable<Product> {
        const url = `${this.productUrl}/${product.id}`;
        return this.http.put<Product>(url, product,  this.httpOptions);
    }

}

