import { Injectable } from '@angular/core';
import { Produto } from '../Models/produto';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage-angular'

@Injectable({
  providedIn: 'root'
})
export class ProdutosServService {

  constructor(private storage: Storage) { }


  // Aqui recebe todos os dados que são passados no formulario principal e manda para o banco
  InserirProduto(dadosRecebidos: Produto){
    // cria um id novo pro item e sobbe ele atraves do metodo set
    dadosRecebidos.id = Guid.create()
    this.storage.set(dadosRecebidos.id.toString(), JSON.stringify(dadosRecebidos))
  }

  // Aqui cria um vetor vazio e depois popula ele com todos os valores por ID que está no storage
  ListarTodosContatos(){
    let arrayProdutos : Produto [] = []
    this.storage.forEach((valor : string) => {const produto : Produto = JSON.parse(valor);arrayProdutos.push(produto)})
    return arrayProdutos
  }

  // Essa aqui especifica o Id passado pelo usuario pra vc mostrar os detalhes **
  async FiltraProdutoId(id : string){
    return JSON.parse(await this.storage.get(id))
  }

  // Func de compra/venda/update ele pega o valor passado e substitui o valor que está no banco, n deveria ser assim mas n consegui pensar em algo pra fazer isso
  ComprarProduto(id: string, dadosRecebidos : Produto){
    this.ListarTodosContatos()

    dadosRecebidos.id = Guid.parse(id)
    this.storage.set(dadosRecebidos.id.toString(), JSON.stringify(dadosRecebidos))
  }

  // Excluindo produto pelo id passado
  ExcluirProdutoId(id: string){
    this.storage.remove(id)
  }
}
