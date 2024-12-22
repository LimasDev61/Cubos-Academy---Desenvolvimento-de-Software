// Define um tipo para estruturar o parâmetro de entrada da função
type TArray = {
  numeros: number[]; // Um array de números
  valor: number; // Um valor numérico a ser comparado
};

// Define um tipo para uma função que recebe um TArray e retorna um booleano
type TTeste = (param: TArray) => boolean;

// Declara a função 'verificarArray' usando o tipo TTeste
const verificarArray: TTeste = ({ numeros, valor }) =>
  numeros.every((numero) => numero < valor);

// Define um array de números para testar
const numeros = [1, 4, 20, 30, 50, 70, 100];

// Chama a função 'verificarArray' passando os parâmetros como objeto
const check = verificarArray({
  numeros,
  valor: 101, // Define o valor limite para a comparação
});

// Imprime o resultado no console
console.log(check); // true, porque todos os números no array são menores que 101
