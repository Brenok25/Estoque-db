import { Injectable } from '@angular/core';
import { Produto } from '../Models/produto';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage-angular'

@Injectable({
  providedIn: 'root'
})
export class ProdutosServService {

  constructor(private storage: Storage) { }

  InserirProduto(dadosRecebidos: Produto){
    dadosRecebidos.id = Guid.create()
    this.storage.set(dadosRecebidos.id.toString(), JSON.stringify(dadosRecebidos))
  }

  ListarTodosContatos(){
    let arrayProdutos : Produto [] = []
    this.storage.forEach((valor : string) => {const produto : Produto = JSON.parse(valor);arrayProdutos.push(produto)})
    return arrayProdutos
  }

  // Tentando listar os detalhes func abaixo deveria pegar o id
  async FiltraProdutoId(id : string){
    return JSON.parse(await this.storage.get(id))
  }

  // Excluindo produto
  ExcluirProdutoId(id: string){
    this.storage.remove(id)
  }
}
