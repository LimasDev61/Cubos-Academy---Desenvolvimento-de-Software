// IMPLEMENTE AQUI A SUA FUNÇÃO
type TMonstro = {
  nome: string;
  forca: number;
  agilidade: number;
  experiencia: number;
};
function solucao(monstros: TMonstro[]): TMonstro[] {
  const evolucao = monstros.map((monstro) => {
    monstro.experiencia += 10;
    return monstro;
  });

  return evolucao;
}
export default solucao;

const monstros = [
  {
    nome: "Gárgula",
    forca: 40,
    agilidade: 15,
    experiencia: 1,
  },
  {
    nome: "Kratos",
    forca: 50,
    agilidade: 5,
    experiencia: 11,
  },
  {
    nome: "Saci",
    forca: 2,
    agilidade: 170,
    experiencia: 70,
  },
];

console.log(solucao(monstros));
