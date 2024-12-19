import prompt from "prompt-sync";
const terminal = prompt();

// Sabendo que 2014 é ano de Copa do Mundo,
// diga se um determinado ano também é

const verificarAnoCopa = (ano: number): string => {
  const intervaloDeTempo = ano - 2014;
  if (intervaloDeTempo % 4 === 0) {
    return "Ano de Copa";
  } else {
    return "Não é ano de Copa";
  }
};

const anoDigitado = Number(terminal("Digite o ano que deseja saber: "));
const resultado = verificarAnoCopa(anoDigitado);

console.log(resultado);
