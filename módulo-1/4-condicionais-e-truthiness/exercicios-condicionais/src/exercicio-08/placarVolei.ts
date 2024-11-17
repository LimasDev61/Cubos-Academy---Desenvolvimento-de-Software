export default function solucao(pontosA: number, pontosB: number): string {
  
  if(pontosA === pontosB) {
    return 'JOGO EMPATADO';
  }
  else if(pontosA >= 25 && (pontosA - pontosB >= 2)) {
    return 'TIME A VENCEU O SET'
  }
  else if(pontosB >= 25 && (pontosB - pontosA >= 2)) {
    return 'TIME B VENCEU O SET'
  }

  return (pontosA > pontosB) ? 'TIME A VENCENDO' : 'TIME B VENCENDO';
  
  }

  let pontosA: number = 3;
  let pontosB: number = 0;

  console.log(solucao(pontosA, pontosB));
