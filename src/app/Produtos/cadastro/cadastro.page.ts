import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Produto } from 'src/app/Models/produto';
import { ProdutosServService } from 'src/app/Service/produtos-serv.service';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  private detalhesProduto : Produto
  public AddForm: FormGroup

  constructor(
    private objDadosService: ProdutosServService,
    public formBuilder: FormBuilder,
    private alertController: AlertController,// objeto usado para criar a caixa de alerta
    public navCtrl: NavController, //objeto usado voltar de pagina
    private objRoute : ActivatedRoute, //objeto usado para 'pegar' o id do contato passado através da pagina inicial

  ) { }
    // comentario abaixo cria uma notificaçãoq ue o produto foi criado
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Produto adicionado!',
      buttons: [
        {
          text: 'Voltar',
          handler: () => {
            //botão 'Sim' chama o método que exclui contato
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

    this.AddForm = this.formBuilder.group({
      id : [this.detalhesProduto.id],
      nome : [this.detalhesProduto.nome, Validators.compose([Validators.required])],
      desc_breve: [this.detalhesProduto.desc_breve, Validators.compose([Validators.required])],
      fornecedor : [this.detalhesProduto.fornecedor, Validators.compose([Validators.required])],
      valor : [this.detalhesProduto.valor, Validators.compose([Validators.required])],
      quantidade : [this.detalhesProduto.quantidade, Validators.compose([Validators.required])]
    })


  }

  Cadastrar(){
    if (this.AddForm.valid){
      this.objDadosService.InserirProduto( this.AddForm.value)
      this.presentAlert()

    }
    
  //   const id : string = String(this.objRoute.snapshot.paramMap.get('id'))
  //   if (this.AddForm.valid){
  //     this.objDadosService.MostrarTudo(id, this.AddForm.value)
  // }

  
  }
}
