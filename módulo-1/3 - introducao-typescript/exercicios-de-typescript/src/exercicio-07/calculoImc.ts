function solucao(peso: number, altura: number): number {

  return peso / altura ** 2;
  
}

export default solucao;

let peso = 100;
let altura = 2;

console.log(solucao(peso, altura));