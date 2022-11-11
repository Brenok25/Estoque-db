import { Guid } from 'guid-typescript';

export interface Produto {
    id: Guid, 
    nome: string, 
    desc_breve: string, 
    fornecedor: string,
    valor: string,
    quantidade: string
}
