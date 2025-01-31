// Implementar uma classe Lampada que, ao ser instanciado, deverá receber a sua potência em watss
// A classe terá três funcionalidades:

// 1. Ligar a lampada
// 2. Desligar a lampada
// 3. Obter a potência da lampada

// Faça o teste com os outros exemplos.

type TLampada = { potencia: number; estado: boolean };
class Lampada {
  private potencia: number;
  private estado: boolean;

  constructor(watts: TLampada) {
    this.potencia = watts.potencia;
    this.estado = watts.estado;
  }

  ligar(): void {
    this.estado = true;
  }

  desligar(): void {
    this.estado = false;

    if(this.potencia) {
        this.obterPotencia;
    }
  }

  obterPotencia(): number {
    return this.estado ? this.potencia : 0;
  }
}

const lampada = new Lampada({ potencia: 100, estado: false });
console.log(lampada)
console.log(lampada.obterPotencia());
lampada.ligar();
console.log(lampada)
console.log(lampada.obterPotencia());
lampada.desligar();
console.log(lampada)
console.log(lampada.obterPotencia());