/* Testando o código do condicional-3-ELSEIF.js, agora em TSC */

// Constante IDADE3;
const IDADE3: number = 25;

// Palavra reservada IF(SE) - condicional - verifica se a condição é verdadeira;
if (IDADE3 >= 18) {
  console.log('ADULTO, IDADE: ' + IDADE3);
}
// A condição ELSEIF(SENÃO SE), testa uma segunga condição verdadeira;
else if(IDADE3 >= 12) {
    console.log('ADOLESCENTE, IDADE: ' + IDADE3);
}

// Caso a condição não for verdadeira em IF(SE), o bloco com a palavra reservada ELSE(SENÃO)
// assume o controle - false;
else {
  console.log('CRIANÇA, IDADE: ' + IDADE3);
}

// Caso o IF(SE) não atenda a condição, a saída só será essa;
console.log('Fim do Código');