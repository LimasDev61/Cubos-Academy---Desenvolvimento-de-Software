export default function solucao(ano: number): string {
  let idade: string = '';

  if(ano > 1789) {
    idade = 'CONTEMPORANEA';
  }
  else if(ano > 1453) {
    idade = 'MODERNA';
  }
  else if(ano > 476) {
    idade = 'MEDIA';
  }
  else {
    idade = 'ANTIGA';
  }

  return idade;

}

let ano: number = -3000;

console.log(solucao(ano));
