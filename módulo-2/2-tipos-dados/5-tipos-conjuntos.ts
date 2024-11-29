// União de tipos
// let nome: string & number; // Nunca vai acontecer, retorna um never.
// nome = 'Renan'

// Tipos contendo a informação do usuário.
type TUsuario = {
  nome: string;
  email: string;
  idade: number;
};

// Tipos contendo o endereço do usuário.
type TEndereco = {
  rua: string;
  numero?: number | string;
  cidade: string;
};

// União de tipos com o operador &
type TUsuarioEndereco = TUsuario & TEndereco;

const usuarios: TUsuarioEndereco[] = [
  {
    nome: "Renan",
    email: "renanalves000@gmail.com",
    idade: 32,
    cidade: "Gama",
    numero: '80',
    rua: 'Oeste'

  },
];
