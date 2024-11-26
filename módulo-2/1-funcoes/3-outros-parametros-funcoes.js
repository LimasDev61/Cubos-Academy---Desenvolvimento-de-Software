// Função anterior, para mostrar a diferença entre as duas

// function cadastrarUsuarios(nome, email, idade) {
//     // shorthands + objeto{}
//     USUARIO[USUARIO.length] = {
//       nome,
//       email,
//       idade,
//     };
//   };

// Criando array USUÁRIO
const USUARIOS = [];

// Função com desestruturação, elimina a necessidade de acesso ao USUARIO.< >
// function cadastrarUsuarios({ nome, email, idade }) {
//     USUARIOS[USUARIOS.length] = {
//       nome,
//       email,
//       idade,
//     };
//   }

// Criando uma nova função com apenas um parâmetro
function cadastrarUsuarios(USUARIO) {
  USUARIOS[USUARIOS.length] = {
    nome: USUARIO.nome,
    email: USUARIO.email, // Podemos ver que neste caso, utilizamos o parâmetro para
    idade: USUARIO.idade, // chamar as propriedades
  };
}

// Fazendo destar forma temos duas formas de chamar a função:
// 1º Primeira opção, criando um objeto dentro da chamada
cadastrarUsuarios({
  nome: "Renan Alves",
  email: "renanalves000@gmail.com",
  idade: 32,
});

console.log(USUARIOS);

// 2º Passando por referência:
const REF2 = {
  nome: "Stephane",
  email: "stephanee@gmail.com",
  idade: 33,
};

// Cadastro do objeto REF2 no array usuários
cadastrarUsuarios(REF2);

// Exibindo os usuários cadastrados novamente
console.log(USUARIOS);
