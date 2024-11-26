// Forma tradicional de declarar functions - explicita - RETURN
function verificarIdade(idade) {
  if (idade <= 17) {
    return "Não é maior";
  } else {
    return "É maior";
  }
}

// verificar idade:
let idade = 10;

console.log(verificarIdade(idade));

// Forma com arrow function para declarar function. - ES6 - ternário.
const VERIFICAR_IDADE = (idade) => (idade <= 17 ? "Não é maior" : "É maior");

let idadeOld = 19;

console.log(VERIFICAR_IDADE(idadeOld));

// BOAS PRÁTICAS, SE INICIAR O PROJETO  COM FUNCTION OU ARROW FUNCTION, TERMINE COM ELES.
// para padronizar os códigos.
