type TLoja = {
    nomeLoja: string
    enderecoLoja: string
}

class Loja {
    private nomeLoja: string;
    private enderecoLoja: string;

    constructor(loja: TLoja) {
        this.nomeLoja = loja.nomeLoja;
        this.enderecoLoja = loja.enderecoLoja;
    }

    public getNomeLoja(): string {
        return this.nomeLoja;
    }

    public getEnderecoLoja(): string {        
        return this.enderecoLoja;
    }

    public setEnderecoLoja(enderecoLoja: string): void {
        this.enderecoLoja = enderecoLoja;
    }

    public setNomeLoja(nomeLoja: string): void {
        this.nomeLoja = nomeLoja;
    }

    public toString(): string {
        return `Loja: ${this.getNomeLoja()}, Endereço: ${this.getEnderecoLoja()}`;
    }
}

const loja: TLoja = {
    nomeLoja: "Loja do Renan",
    enderecoLoja: "Gama - DF"
}

const loja1 = new Loja(loja);

console.log(loja1.toString());

loja1.setNomeLoja("Renan Corporation");
loja1.setEnderecoLoja("Raccon City");

console.log(loja1.toString());

