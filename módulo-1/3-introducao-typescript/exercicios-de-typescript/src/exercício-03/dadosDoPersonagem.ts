function solucao(
  nomePersonagem: string,
  classe: string,
  pontuacao: number
): string {

  return `OLÁ, ${nomePersonagem}. VOCE É UM ${classe} COM PONTUAÇÃO ATUAL DE ${pontuacao}`;

}

export default solucao;

let nomePersonagem = 'TAYRONE';
let classe = 'BARDO';
let pontuacao = 500;

console.log(solucao(nomePersonagem, classe, pontuacao));