function solucao(palavra: string): boolean {
  let vogais: string = "aeiou";

  for (let verificar of palavra.toLowerCase()) {
    if (vogais.includes(verificar)) return true;
  }

  return false;
}

export default solucao;

let palavra = "jkkknmmnlpppwew";

console.log(solucao(palavra));
