import prompt from "prompt-sync";
const terminal = prompt();

const digiteNumero = Number(terminal("Digite um valor: "));
solucao(digiteNumero)

function solucao(numero: number) {
    for (let i = numero; i >= 0; i--) {
      console.log(i);
    }
  
    console.log("KABUM");
  }