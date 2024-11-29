type TDadosMala = {
  nome: string;
  pesoMala: number;
};

function solucao(dadosPassageiros: TDadosMala[]) {
  let nomes: string[] = [];

  for (let mala of dadosPassageiros) {
    if (mala.pesoMala > 23) {
      nomes[nomes.length] = mala.nome;
    }
  }

  if (nomes.length > 0) {
    let resultado = nomes[0];
    for (let i = 1; i < nomes.length; i++) {
      resultado += ' - ' + nomes[i];
    }
    return resultado;
  } else {
    return 'SEM PASSAGEIROS';
  }
}
export default solucao;

let dados: TDadosMala[] = [
  {
    nome: 'Passageiro A',
    pesoMala: 25,
  },
  {
    nome: 'Passageiro B',
    pesoMala: 10,
  },
  {
    nome: 'Passageiro C',
    pesoMala: 24,
  },
  {
    nome: 'Passageiro D',
    pesoMala: 22,
  },
  {
    nome: 'Passageiro E',
    pesoMala: 40,
  },
];

console.log(solucao(dados));