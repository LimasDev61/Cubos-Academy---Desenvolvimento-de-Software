function solucao(listaAlunos: string[], ordemAlfabetica: boolean): string[] {
  if (!ordemAlfabetica) {
    return listaAlunos;
  }

  return listaAlunos.sort((abc1, abc2) => abc1.localeCompare(abc2));
}
export default solucao;

const listaAlunos: string[] = ["Lucas", "Camila", "Taís", "Carla", "Ana"];

const result = solucao(listaAlunos, true);

console.log(result);
