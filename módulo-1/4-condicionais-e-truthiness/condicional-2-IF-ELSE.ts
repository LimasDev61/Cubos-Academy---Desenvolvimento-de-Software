/* Testando o código do condicional-2-IF-ELSE.js, agora em TSC */

// Constante IDADE2;
const IDADE2: number = 17;

// Palavra reservada IF(SE) - condicional - verifica se a condição é verdadeira;
if (IDADE2 >= 18) {
  console.log('Pode beber - Maior de idade: ' + IDADE2);
}
// Caso a condição não for verdadeira em IF(SE), o bloco com a palavra reservada ELSE(SENÃO)
// assume o controle - false;
else {
  console.log('Não é maior de idade: ' + IDADE2);
}

// Caso o IF(SE) não atenda a condição, a saída só será essa;
console.log('Fim do Código');