import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carrinho',
  standalone: false,
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{

  itensCarrinho:IProdutoCarrinho[]= [];
  total=0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router:Router

  ){}

  ngOnInit(): void {

    this.itensCarrinho= this.carrinhoService.obterCarrinho();
    this.calcularTotal();
    
  }

  calcularTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  removerProdutoCarrinho(produtoid: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoid);
    this.carrinhoService.removerProdutoCarrinho(produtoid);
    this.calcularTotal();

  }

  comprar(){
    alert("Parabens!, você finalizou a sua compra");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }

}
