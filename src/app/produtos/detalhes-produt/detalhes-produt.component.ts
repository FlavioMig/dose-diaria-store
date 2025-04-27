import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../produtos.service';
import { IProduto, IProdutoCarrinho } from '../../produtos';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from '../../notificacao.service';
import { CarrinhoService } from '../../carrinho.service';

@Component({
  selector: 'app-detalhes-produt',
  standalone: false,
  templateUrl: './detalhes-produt.component.html',
  styleUrl: './detalhes-produt.component.css'
})
export class DetalhesProdutComponent implements OnInit{

  produto: IProduto | undefined;

  quantidade= 1;

  constructor(
    private produtosService: ProdutosService,
    private  route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoid = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoid);
  }

  adicionarAoCarrinho(){
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }

  
  this.carrinhoService.adicionarAoCarrinho(produto);

}
}
