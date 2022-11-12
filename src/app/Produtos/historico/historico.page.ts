import { Component, OnInit } from '@angular/core';
import { ProdutosServService } from 'src/app/Service/produtos-serv.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {
  // acho eu q é o q recebe tudo que será passado pelo listar todos os contatos/ produtos
  public todosProdutos : any

  constructor(
    private objDadosService : ProdutosServService
  ) { }

  ngOnInit() {
    this.todosProdutos = this.objDadosService.ListarTodosContatos()
  }

}
