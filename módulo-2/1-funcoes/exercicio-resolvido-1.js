// Declare uma variável que armazena um objeto contendo
// Dados de uma pessoa: nome, idade, profissão e altura.

// Faça uma função que tem um parâmetro. Essa função deve imprimir na tela a apresentação
// de uma pessoa. seguindo o modelo abaixo:

// "Olá, meu nome é Renan, sou um jovem de 10 anos. 1.5m de altura e sou estudante";

// Passo 1: Objeto
const USUARIOS = {
  nome: "Renan",
  idade: 32,
  profissao: "Programador",
  altura: 1.68,
};

// Passo 2: Função
function usuarioApresentar(dadosUsuario) {
  // Template String / Template Literals
  console.log(
    `Olá! Meu nome é ${dadosUsuario.nome}, sou um jovem de ${dadosUsuario.idade} anos, ${dadosUsuario.altura}m de altura e sou ${dadosUsuario.profissao}`
  );
}

// Passo 3: Saída
usuarioApresentar(USUARIOS);
