function solucao(horaChegada: number): number {
  let horaComecaSerFeliz: number = horaChegada - 1;

  if (horaChegada === 0) {
    horaComecaSerFeliz = 23;
  }

  return horaComecaSerFeliz;
}

export default solucao;
