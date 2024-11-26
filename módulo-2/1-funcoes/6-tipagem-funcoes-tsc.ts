// Definindo o tipo para a função de soma
type TFuncaoSoma = (numero1: number, numero2: number) => number;

// Função que implementa o tipo TFuncaoSoma
const soma: TFuncaoSoma = (numero1, numero2) => numero1 + numero2;

// Variáveis para receber os parâmetros
let numero1: number = 10;
let numero2: number = 20;

// Chamada da função
console.log(soma(numero1, numero2));