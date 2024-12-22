// Faça uma função que receba parâmetros do tipo string e imprime na tela.
// Essa string invertida, ou seja de trás para frente.
// Dica: Lembre-se que o método reverse(), só pode ser utilizado em arrays.

type TArray = string;

const reverterStrings = (list: TArray) => {
  const arraysPalavras: string[] = list.split("").reverse();
  let resultado: string = "";

  for (let result of arraysPalavras) {
    resultado += result;
  }

  return resultado;
};

const nome: string = "Eu amo minha familia";

console.log(reverterStrings(nome));
