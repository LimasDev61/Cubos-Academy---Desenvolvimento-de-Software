// IMPLEMENTE AQUI A SUA FUNÇÃO
type TUsuario = {
  nome: string;
  email: string;
  senha: string;
};

function solucao(
  usuariosCadastrados: TUsuario[],
  novoUsuario: TUsuario
): TUsuario[] | string {
  let caso = false;
  usuariosCadastrados.forEach((i) => {
    const { email } = i;
    if (email === novoUsuario.email) {
      caso = true;
    }
  });

  if (caso) {
    return "E-MAIL INVALIDO";
  } else {
    usuariosCadastrados.push(novoUsuario);
    return usuariosCadastrados;
  }
}
export default solucao;
