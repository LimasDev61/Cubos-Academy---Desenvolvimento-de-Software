import { v4 as gerarId } from "uuid";

type TAutor = {
    nome:string
    idade:string
}

export default class Autor {
    readonly id: string
    nome: string;
    idade: string;

    constructor({ nome, idade }: TAutor) {
        this.id = this.gerarId();
        this.nome = nome;
        this.idade = idade;
    }

    private gerarId(): string {
        return gerarId();
    }

}