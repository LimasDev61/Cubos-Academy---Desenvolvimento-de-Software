function solucao(cpf: string): string {

  if(cpf.length !== 12) {
    return "CPF INVALIDO"
  }

  const partes = cpf.includes("-")

  if(!partes) {
    return "CPF INVALIDO"
  }

  const finalPart = cpf.split("-")[1]
  if(finalPart.length != 2) {
    return "CPF INVALIDO"
  }

  return "CPF VALIDO"
}

export default solucao;


const cpf: string = "123456789-58"

console.log(solucao(cpf));