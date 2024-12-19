import prompt from "prompt-sync";
const terminal = prompt();

const num1 = Number(terminal("Digite o primeiro valor: "));
const num2 = Number(terminal("Digite o segundo valor: "));

const resultado = num1 + num2;

console.log(resultado);