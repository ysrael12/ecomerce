import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from 'src/service/produtos';
import { ProdutosService } from 'src/service/produtos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public produtos : Observable<Produtos[]>;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtos = this.produtosService.getProdutos(); 
   }

}
