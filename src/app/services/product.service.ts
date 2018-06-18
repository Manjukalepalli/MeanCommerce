import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  baseUrl = '/api/products/';
  product: Product;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    console.log('getting all products in service');
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProduct(id): Observable<Product> {
    console.log('selected product id', id);
    return this.http.get<Product>(`${this.baseUrl}${id}`);
  }

  addProduct(newProduct): Observable<Product> {
    console.log(`adding in service: Product ${newProduct}`);
    return this.http.post<Product>(this.baseUrl, newProduct);
  }

  updateProduct(product: Product): Observable<Product> {
    console.log(`updating product in service: product ${product._id}`);
    return this.http.put<Product>(`${this.baseUrl}${product._id}`, product);
  }

  deleteProduct(productId: string): Observable<Product> {
    console.log(this.baseUrl + productId);
    console.log(`deleting in service: product ${productId}`);
    return this.http.delete<Product>(this.baseUrl + productId);
  }
}
