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

}
