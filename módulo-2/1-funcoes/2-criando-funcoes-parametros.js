// Criando array USUÁRIO
const USUARIO = [];

// Criando função com parâmetros()
function cadastrarUsuarios(nome, email, idade) {
  // shorthands + objeto{}
  USUARIO[USUARIO.length] = {
    nome,
    email,
    idade,
  };
}

// Chamando a função para cadastrar usuário
cadastrarUsuarios("Renan", "renanalves000@gmail.com", 32);

// Saída do cadastrarUsuarios
console.log(USUARIO);

// Chamando a função novamente com um novo cadastro
cadastrarUsuarios("Stephane", "stephanee@gmail.com", 33);

console.log(USUARIO);
