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

    ligado: boolean
    aceleracao: number
  
    constructor(carro: TCarro) {
      this.cor = carro.cor;
      this.marca = carro.marca;
      this.modelo = carro.modelo;
      this.ano = carro.ano;
      this.potencia = carro.potencia || 0;
      this.ligado = false
      this.aceleracao = 0
    }

    ligarOuDesligar(): void {
      this.ligado = !this.ligado
    }

    acelerar(rpm: number): void {
      this.aceleracao += rpm;
    }

    estadoDoCarro(): string {
      return this.ligado ? "ligado" : "desligado";
    }
  }
  
  const fusca = new Carro({
    cor: "azul",
    marca: "VW",
    modelo: "Fusca",
    ano: 1970,
    potencia: 100,
  }); 
  
  fusca.cor = "vermelho";
  
  console.log(fusca);

  console.log(fusca.estadoDoCarro());

  fusca.ligarOuDesligar();
  fusca.acelerar(100);
  console.log(fusca);
  console.log(fusca.estadoDoCarro());