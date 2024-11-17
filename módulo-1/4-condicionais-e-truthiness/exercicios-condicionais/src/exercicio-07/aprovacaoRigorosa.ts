export default function solucao(
  media: number,
  frequencia: number,
  projetoFinal: number
): string {
  
if(media >= 60 && frequencia >= 75 && projetoFinal === 0) {
  return 'REPROVADO';
}
else if(media >= 60 && frequencia >= 75 && projetoFinal > 0) {
  return 'APROVADO';
}
else if(media < 60 && frequencia >= 75 && projetoFinal >= 85) {
  return 'APROVADO';
}
else {
  return 'REPROVADO';
}

}

let media: number = 80;
let frequencia: number = 74;
let projetoFinal: number = 78;

console.log(solucao(media, frequencia, projetoFinal));