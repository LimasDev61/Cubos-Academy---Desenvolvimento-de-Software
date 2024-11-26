// Tipando os parâmetros
type TUsuario = {
  nome: string;
  idade: number;
  email: string;
};

const usuarios: TUsuario[] = [];

// Criando função objeto com tipagem, recebendo um array. 
// E um for para percorrer o array, cadastrando usuários no ultimo indice.
function cadastarUsuarios(usuario: TUsuario[]) {
  for (let i = 0; i < usuario.length; i++) {
    usuarios[usuarios.length] = usuario[i]; // Adiciona diretamente no final do array
  }

}

// Cadastrando os usuários no cadastrarUsuarios, passando um array
cadastarUsuarios([
  {
    nome: "Renan",
    idade: 32,
    email: "renanalves000@gmail.com",
  },
  {
    nome: "Stephane",
    idade: 33,
    email: "stephanee@gmail.com",
  }
]);

console.log(usuarios);