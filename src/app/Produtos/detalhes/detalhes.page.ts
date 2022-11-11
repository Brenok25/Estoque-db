import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { Produto } from 'src/app/Models/produto';
import { ProdutosServService } from 'src/app/Service/produtos-serv.service';
import { Guid } from 'guid-typescript';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  private detalhesProduto : Produto

  constructor(
    private objDadosService : ProdutosServService,
    private objRoute: ActivatedRoute,
    private alertController: AlertController,
    public navCtrl: NavController
  ) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Deseja excluir o produto?!',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            ;
          },
        },
        {
          text: 'Sim',
          handler: () => {
            //botão 'Sim' chama o método que exclui contato
            this.ExcluirProduto(),
            this.navCtrl.back()
            ;
          },
        },
      ],
    });
    await alert.present();
  }

  ngOnInit() {
    this.detalhesProduto = {id : Guid.createEmpty(), nome:"", desc_breve:"", fornecedor:"", valor:"", quantidade:""}

    const id : string = String(this.objRoute.snapshot.paramMap.get('id'))
    this.objDadosService.FiltraProdutoId(id).then(array => this.detalhesProduto= array)

  }

  ExcluirProduto(){
    // captura do id do contato
    const id : string = String(this.objRoute.snapshot.paramMap.get('id'))
    
    this.objDadosService.ExcluirProdutoId(id)
  }


}
