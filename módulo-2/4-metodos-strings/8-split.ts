// Define um tipo chamado TTextoSplit que representa uma função.
// Essa função aceita um parâmetro:
// - `text` (string): a string de entrada que será dividida.
// E retorna um array de strings (resultado da divisão da string).
type TTextoSplit = (text: string) => string[];

// Implementa a função textFun que segue o tipo TTextoSplit.
// Esta função usa o método `.split("")` para dividir a string em um array de caracteres.
// Cada caractere da string se torna um elemento do array.
const textFun: TTextoSplit = (text) => {
  return text.split(""); // Retorna um array com cada caractere da string como elemento.
};

// Implementa a função textFunPalavra que segue o tipo TTextoSplit.
// Esta função usa o método `.split(" ")` para dividir a string em um array de palavras,
// separadas por espaços.
const textFunPalavra: TTextoSplit = (text) => {
  return text.split(" "); // Retorna um array com as palavras da string separadas por espaços.
};

// Implementa a função textFunFilter que segue o tipo TTextoSplit.
// Esta função usa o método `.split("n")` para dividir a string em um array de substrings,
// usando o caractere 'n' como delimitador.
const textFunFilter: TTextoSplit = (text) => {
  return text.split("n"); // Retorna um array com substrings separadas pelo caractere 'n'.
};

// Define uma string de entrada para testar as funções.
const texto: string = "Renan Alves";

// Chama a função textFun para dividir a string em caracteres e armazena o resultado.
const resultado = textFun(texto);
// Chama a função textFunPalavra para dividir a string em palavras e armazena o resultado.
const palavraPorPalavra = textFunPalavra(texto);
// Chama a função textFunFilter para dividir a string em substrings usando 'n' como delimitador e armazena o resultado.
const letraFilter = textFunFilter(texto);

// Exibe o resultado da função textFun no console.
// Mostra todos os caracteres da string como elementos em um array.
console.log(resultado);
// Exibe o comprimento do array resultado, ou seja, o número de caracteres na string.
console.log(resultado.length);

// Exibe o resultado da função textFunPalavra no console.
// Mostra as palavras da string como elementos em um array.
console.log(palavraPorPalavra);
// Exibe o comprimento do array palavraPorPalavra, ou seja, o número de palavras na string.
console.log(palavraPorPalavra.length);

// Exibe o resultado da função textFunFilter no console.
// Mostra as substrings resultantes da divisão da string pelo caractere 'n'.
console.log(letraFilter);
// Exibe o comprimento do array letraFilter, ou seja, o número de substrings obtidas.
console.log(letraFilter.length);
