import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/Models/produto';
import { ProdutosServService } from 'src/app/Service/produtos-serv.service';

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
    const id : string = String(this.objRoute.snapshot.paramMap.get('id'))

    //item 3
    if (id != 'add'){
      this.objDadosService.FiltraContatosId(id).then(array => this.detalhesProduto= array)

    }
  }

}
