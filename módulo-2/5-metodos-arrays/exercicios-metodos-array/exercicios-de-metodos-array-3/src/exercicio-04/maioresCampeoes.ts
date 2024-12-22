type TTime = {
  nome: string;
  pais: string;
  quantidadeTitulos: number;
};

function solucao(times: TTime[], paisFiltrado: string): TTime[] | string {
  const timesFiltrados = times.filter((time) => time.pais === paisFiltrado);

  return timesFiltrados.length === 0
    ? "NAO ENCONTRADO"
    : timesFiltrados.sort((a, b) => b.quantidadeTitulos - a.quantidadeTitulos);
}
export default solucao;

const times: TTime[] = [
  {
    nome: "Time 1",
    pais: "Brasil",
    quantidadeTitulos: 5,
  },
  {
    nome: "Time 2",
    pais: "Brasil",
    quantidadeTitulos: 3,
  },
  {
    nome: "Time 3",
    pais: "França",
    quantidadeTitulos: 1,
  },
  {
    nome: "Time 4",
    pais: "Espanha",
    quantidadeTitulos: 20,
  },
  {
    nome: "Time 5",
    pais: "Espanha",
    quantidadeTitulos: 3,
  },
  {
    nome: "Time 6",
    pais: "França",
    quantidadeTitulos: 0,
  },
  {
    nome: "Time 7",
    pais: "Espanha",
    quantidadeTitulos: 20,
  },
  {
    nome: "Time 8",
    pais: "Argentina",
    quantidadeTitulos: 1,
  },
  {
    nome: "Time 9",
    pais: "França",
    quantidadeTitulos: 9,
  },
];

const result = solucao(times, "França");

console.log(result);
