class Conta {
  saldo: number;

  constructor(saldo: number) {
    this.saldo = saldo;
  }

  depositar(valor: number) {
    this.saldo += valor;
  }

  sacar(valor: number) {
    this.saldo -= valor;
  }
}

class ContaCorrente extends Conta {
  constructor(saldo: number) {
    super(saldo);
  }
  // polimorfismo
  sacar(valor: number): void {
    this.saldo -= valor + 100;
  }
}

class ContaPoupanca extends Conta {
  constructor(saldo: number) {
    super(saldo);
  }
  // Polimorfismo
  depositar(valor: number): void {
    this.saldo += valor + 200;
  }
}

const contaCorrente = new ContaCorrente(1000);
const contaPoupanca = new ContaPoupanca(1000);

contaCorrente.sacar(1000);
contaCorrente.depositar(500);
contaPoupanca.depositar(300);
contaPoupanca.depositar(500);
contaCorrente.sacar(300);
contaPoupanca.sacar(600);

console.log(contaPoupanca, contaCorrente);