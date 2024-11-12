// Váriaveis sem atribuição de valor
let nome, idade, numero;

// Saída de variaveis sem valor atribuido - undefined
console.log(nome, idade);

// Variáveis com atribuição de valor, levando em consideração as palavras reservadas já declarada
nome = 'Renan';
idade = 32;

// Saída com valores atribuidos
console.log(nome, idade);

// Teste de escopo para funcionamento das variaveis

{
    // Variável const do escopo
    const MESES = 3;

    // Variável numero - global, recebendo a variável do escopo
    numero = MESES;
}

// Impressão da variavel global, atribuida com a const.
console.log(numero);