import { Component, OnInit } from '@angular/core';
import { ProdutosServService } from 'src/app/Service/produtos-serv.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {
  public todosProdutos

  constructor(
    private objDadosService : ProdutosServService
  ) { }

  ngOnInit() {
    this.todosProdutos = this.objDadosService.ListarTodosContatos()
  }

}
