import prompt from "prompt-sync";
const terminal = prompt();

const idades = [22, 45, 32, 34, 17, 18];

const idadesMaiores = idades.filter((idade: number) => {
  return idade <= 18;
});

const digiteIdade = terminal("fale o valor: ")
console.log(idadesMaiores);

