// Declara uma string 'texto' contendo espaços em branco no início e no final, além de um ponto
// de exclamação no final.
const texto = "      Alguma coisa   !";

// Declara outra string 'textoStart', idêntica à variável anterior, para demonstrar o uso do
// método 'trimStart()'.
const textoStart = "      Alguma coisa   !";

// Declara outra string 'textoEnd', mas com os espaços em branco no início removidos, para
// demonstrar o uso do método 'trimEnd()'.
const textoEnd = "!      Alguma coisa   ";

// Exibe no console o comprimento total da string 'texto', incluindo os espaços em branco.
console.log(texto.length);

// Remove os espaços em branco apenas do início da string 'textoStart' e exibe o resultado no
// console.
console.log(textoStart.trimStart());

// Remove os espaços em branco apenas do final da string 'textoEnd' e exibe o resultado no console.
console.log(textoEnd.trimEnd());
