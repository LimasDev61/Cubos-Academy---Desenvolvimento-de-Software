function solucao(frutaColetada: string, esteira: string[]): number {
  let total: number = 0;
  for (let i = 0; i < esteira.length; i++) {
    if (esteira[i] === frutaColetada) {
      total++;
    }
  }

  return total;
}

export default solucao;

let frutaColetada: string = "BANANA";
let esteira: string[] = [
  "UVA",
  "ACEROLA",
  "MANGA",
  "PERA",
  "CAJU",
  "CAJU",
  "BANANA",
  "UVA",
  "LARANJA",
  "MARACUJA",
  "MELANCIA",
];

console.log(solucao(frutaColetada, esteira));
