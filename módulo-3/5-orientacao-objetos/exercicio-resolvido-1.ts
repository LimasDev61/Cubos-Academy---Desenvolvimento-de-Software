// Implemente uma classe Calculadora que contenha as seguintes funcionalidades:
// 1. Adição
// 2. Subtração
// 3. Multiplicação
// 4. Divisão

// A classe deverá receber em seu método constutor, dois argumentos numericos que
// serão manipulados por cada funcionalidade. Cada método deverá retornar o resultado
// da operação entre os dois números.

// Não deverá ser possível acessar os valores dos números informados no método construtor,
// após a criação do objeto. faça o teste com outro exemplos.
type TOperacao = {
    numeroA: number
    numeroB: number
}
class Calculadora {

    private numeroA: number;
    private numeroB: number;

    constructor(operacao: TOperacao) {
        this.numeroA = operacao.numeroA;
        this.numeroB = operacao.numeroB;
    }

    adicionar(a: number, b: number): number {
        return a + b;
    }

    subtrair(a: number, b: number): number {        
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number {
        if(b === 0) {
            return 0;
        }
        return a / b;
    }
}

const operacao = {
    numeroA: 10,
    numeroB: 5
}

const calculadora = new Calculadora(operacao);

console.log(calculadora.adicionar(operacao.numeroA, operacao.numeroB));
console.log(calculadora.subtrair(operacao.numeroA, operacao.numeroB));
console.log(calculadora.multiplicar(operacao.numeroA, operacao.numeroB));
console.log(calculadora.dividir(operacao.numeroA, operacao.numeroB));