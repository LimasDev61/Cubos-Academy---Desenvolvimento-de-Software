type TConta = {
    numeroConta: string;
    nomeTitular: string;
    saldo: number;
  };
  
  class Conta {
    private numeroConta: string;
    private nomeTitular: string;
    private saldo: number;
  
    constructor(conta: TConta) {
      this.numeroConta = conta.numeroConta;
      this.nomeTitular = conta.nomeTitular;
      this.saldo = conta.saldo;
    }
  
    public getNumeroConta(): string {
      return this.numeroConta;
    }
  
    public getNomeTitular(): string {
      return this.nomeTitular;
    }
  
    public getSaldo(): number {
      return this.saldo < 0 ? 0 : this.saldo;
    }
  
    public depositar(valorDeposito: number): void {
      if (valorDeposito > 0) {
        this.saldo += valorDeposito;
        console.log(`O valor R$ ${valorDeposito} foi depositado com sucesso!`);
        console.log(`Saldo atual da conta: R$ ${this.getSaldo()}`);
      } else {
        console.log("O valor do depósito deve ser maior que zero.");
      }
    }
  
    public sacar(valorSaque: number): void {
      if (valorSaque > 0 && this.saldo >= valorSaque) {
        this.saldo -= valorSaque;
        console.log(`O valor R$ ${valorSaque} foi sacado com sucesso!`);
        console.log(`Saldo atual da conta: R$ ${this.getSaldo()}`);
      } else {
        console.log(
          "O valor do saque deve ser maior que zero e menor ou igual ao saldo da conta."
        );
      }
    }

    public toString(): string {
        return `Conta: ${this.getNumeroConta()}, Titular: ${this.getNomeTitular()}, Saldo: R$ ${this.getSaldo()}`;
      }
  }
  
  const conta: TConta = {
    numeroConta: "123",
    nomeTitular: "Renan",
    saldo: 100,
  };
  
  const conta1 = new Conta(conta);
  
  console.log(conta1.toString());
  
  conta1.depositar(50);
  console.log(conta1.toString());

  conta1.sacar(200);
  console.log(conta1.toString());

  conta1.sacar(50);
  console.log(conta1.toString());
