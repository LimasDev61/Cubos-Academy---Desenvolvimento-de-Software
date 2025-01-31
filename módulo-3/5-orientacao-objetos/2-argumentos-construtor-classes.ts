type TCarro = {
  cor: string;
  marca: string;
  modelo: string;
  ano: number;
  potencia?: number;
};

class Carro {
  cor: string;
  marca: string;
  modelo: string;
  ano: number;
  potencia: number;

  constructor(carro: TCarro) {
    this.cor = carro.cor;
    this.marca = carro.marca;
    this.modelo = carro.modelo;
    this.ano = carro.ano;
    this.potencia = carro.potencia || 0;
  }
}

const fusca = new Carro({
  cor: "azul",
  marca: "VW",
  modelo: "Fusca",
  ano: 1970,
  potencia: 100,
}); // posso passar ou não o argumento potência.

// acessando o objeto fusca:
fusca.cor = "vermelho";

console.log(fusca);
