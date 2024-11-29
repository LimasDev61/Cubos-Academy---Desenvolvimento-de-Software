function solucao(senhaDigitada: string, senhaCriptografada: string) {
  
  const senha = `cubos${senhaDigitada}cubos`
  if(senha === senhaCriptografada) {
    return 'LOGIN AUTORIZADO'
  }

  return 'LOGIN NAO AUTORIZADO'
}
export default solucao;

let senhaDigitada: string = '1234'
let senhaCriptografada: string = 'cubos1234cubos'

console.log(solucao(senhaDigitada, senhaCriptografada));