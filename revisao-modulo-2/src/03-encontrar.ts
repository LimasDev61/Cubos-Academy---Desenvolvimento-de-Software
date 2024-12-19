import prompt from "prompt-sync";
const terminal = prompt();

const letra = terminal("Digite a letra: ");
const palavras = terminal("Digite as palavras: ").split(" "); 

solucao(letra, palavras);

function solucao(letra: string, palavras: string[]) {
    let perdedores = 0;
  
    for (let palavra of palavras) {
      if (palavra[0].toLowerCase() !== letra) {
        perdedores++;
      }
    }
  
    console.log(perdedores);
  }