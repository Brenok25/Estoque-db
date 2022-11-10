import { Guid } from 'guid-typescript';

export interface Produto {
    id: Guid, 
    nome: string, 
    desc_breve: string, 
    fornecesir: string,
    valor: string,
    quantidade: string
}
