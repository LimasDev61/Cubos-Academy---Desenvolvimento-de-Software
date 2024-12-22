function solucao(agenda: string[], cancelamento: string): string | string[] {
  
  if(agenda.indexOf(cancelamento) === -1){
    return "PACIENTE NAO AGENDADO";
  }
  agenda.splice(agenda.indexOf(cancelamento), 1);
  return agenda;
}
export default solucao;
