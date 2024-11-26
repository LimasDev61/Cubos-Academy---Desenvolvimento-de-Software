function solucao(
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

export default solucao;
