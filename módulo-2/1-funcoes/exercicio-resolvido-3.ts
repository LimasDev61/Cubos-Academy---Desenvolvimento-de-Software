// Crie um objeto que represente uma calculadora.
// O objeto deve conter quatro métodos que realizara
// as operações de soma, subtração, multiplicação e divisão.

// Cada método deverá retornar o resultado da operação;
// Implemente os métodos com seus respectivas tipagens de parâmetros e retorno.

// Passo 1: Tipagem dos parâmetros com função
type TFuncaoCalculadora = (a: number, b: number) => number;

// Passo 2: tipagem para calculo
type TCalculo = {
    soma: TFuncaoCalculadora
    subtracao: TFuncaoCalculadora
    multiplicacao: TFuncaoCalculadora
    divisao: TFuncaoCalculadora
};

// Passo 3: Criando o objeto calculadora
const calculadora: TCalculo = {
  soma: (a, b) => a + b,
  subtracao: (a, b) => a - b,
  multiplicacao: (a, b) => a * b,
  divisao: (a, b) => a / b,
};

console.log(calculadora.soma(10, 20));
console.log(calculadora.subtracao(10, 20));
console.log(calculadora.multiplicacao(10, 20));
console.log(calculadora.divisao(10, 20));
