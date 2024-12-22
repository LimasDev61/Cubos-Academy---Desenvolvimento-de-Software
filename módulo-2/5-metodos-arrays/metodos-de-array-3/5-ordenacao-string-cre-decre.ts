const manipulacaoC = (crescente: string[]) => {
    return crescente.sort((palavra1, palavra2) => palavra1.localeCompare(palavra2))
}

const manipulacaoD = (decrescente: string[]) => {
    return decrescente.sort((palavra1, palavra2) => palavra2.localeCompare(palavra1))
}

const pessoas: string[] = ["Renan", "Stephane", "francisco", "amora"];

console.log(manipulacaoC(pessoas));
console.log(manipulacaoD(pessoas));


const manipulacaoObjeto = (param: { nome: string; idade: number}[]) => {
    return param.sort((item1, item2) => item1.nome.localeCompare(item2.nome));
}
const usuario = [
    { nome: "Renan", idade: 32 },
    { nome: "Stephane", idade: 33 },
    { nome: "Amora", idade: 7 },
    { nome: "Francisco", idade: 1 },
  ];

  const compare = manipulacaoObjeto(usuario);

  console.log(compare);
  