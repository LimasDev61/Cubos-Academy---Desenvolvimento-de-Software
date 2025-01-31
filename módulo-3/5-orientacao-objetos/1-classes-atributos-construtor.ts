class Carro {
  cor: string;
  marca: string;
  modelo: string;
  ano: number;
  potencia: number;

  constructor() {
    this.cor = ""
    this.marca = ""
    this.modelo = ""
    this.ano = 0
    this.potencia = 0
  }
}

const fusca = new Carro();

console.log(fusca);
