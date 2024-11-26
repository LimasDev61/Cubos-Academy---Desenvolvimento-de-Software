type TPessoa = {
  nome: string;
  numeroCartela: number;
};

type TVerificarPremiado = (
  numeroSorteado: number,
  pessoasConcorrendo: TPessoa[]
) => string | undefined;

const verificarPremiado: TVerificarPremiado = (
  numeroSorteado,
  pessoasConcorrendo
) => {
  for (let pessoa of pessoasConcorrendo) {
    if (pessoa.numeroCartela === numeroSorteado) return pessoa.nome;
  }

  return undefined;
};

export default verificarPremiado;
