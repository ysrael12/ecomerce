import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http : HttpClient) { }
  apiUrl = 'https://fakestoreapi.com/products/category/electronics';
  getProdutos() : Observable<Produtos[]>{
    return this.http.get<Produtos[]>(this.apiUrl)

  }
}
