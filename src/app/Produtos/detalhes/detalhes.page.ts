import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Produto } from 'src/app/Models/produto';
import { ProdutosServService } from 'src/app/Service/produtos-serv.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  private detalhesProduto : Produto

  constructor(
    private objDadosService : ProdutosServService,
    private objRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.detalhesProduto = {id : Guid.createEmpty(), nome:"", desc_breve:"", fornecedor:"", valor:"", quantidade:""}

    const id : string = String(this.objRoute.snapshot.paramMap.get('id'))
    this.objDadosService.FiltraProdutoId(id).then(array => this.detalhesProduto= array)

  }

}
