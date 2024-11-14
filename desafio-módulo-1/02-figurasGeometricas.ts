function solucao(quantidadeLados: number): string {
  let LADOS: string = '';

  if (quantidadeLados === 3) {
    LADOS = 'TRIANGULO';
  } else if (quantidadeLados === 4) {
    LADOS = 'QUADRILATERO';
  } else if (quantidadeLados === 5) {
    LADOS = 'PENTAGONO';
  } else if (quantidadeLados === 6) {
    LADOS = 'HEXAGONO';
  } else if (quantidadeLados === 7) {
    LADOS = 'HEPTAGONO';
  }

  return LADOS;
  
}

export default solucao;
