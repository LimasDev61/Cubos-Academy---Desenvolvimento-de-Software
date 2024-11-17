export default function solucao(monstro1: number, monstro2: number): string {

  let RESULTADO: string = '';

  if(monstro1 > monstro2) {
    RESULTADO = 'JOGADOR 1 GANHOU';
  }
  else if(monstro2 > monstro1) {
    RESULTADO = 'JOGADOR 2 GANHOU'
  }
  else {
    RESULTADO = 'EMPATE';
  }

  return RESULTADO;

}

let monstro1: number = 34;
let monstro2: number = 55;

console.log(solucao(monstro1, monstro2));
