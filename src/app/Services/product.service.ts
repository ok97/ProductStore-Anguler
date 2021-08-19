import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Apiurl='http://localhost:3000/products';

  constructor(private http: HttpClient) { }
  allProduct():Observable<Product[]>  {
  return this.http.get<Product[]>(this.Apiurl)
  }

  addProduct(data:any): Observable<Product[]> {
    return this.http.post<Product[]>(this.Apiurl,data)

  }

  edit(id:number): Observable<Product>{
    return this.http.get<Product>(`${this.Apiurl}/${id}`)
  }
  update(id : number, data : any) : Observable<Product> {
    return this.http.put<Product>(`${this.Apiurl}/${id}`, data)

  }
  Delete(id:number):Observable<void> {
    return this.http.delete<void>(`${this.Apiurl}/${id}`)
  }
}
