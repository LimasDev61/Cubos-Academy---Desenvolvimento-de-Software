// Define o tipo `TPessoa`, que representa uma pessoa com três propriedades: `nome`, `email` e `idade`.
type TPessoa = {
  nome: string;
  email: string;
  idade: number;
};

// Define o tipo `TUsuario` como um array de objetos `TPessoa` que são somente leitura.
// Isso significa que os elementos do array e suas propriedades não podem ser modificados diretamente.
type TUsuario = Readonly<TPessoa>[];

// Função `atualizar` que recebe um array de pessoas do tipo `TUsuario` (somente leitura) e imprime esse array no console.
function atualizar(pessoas: TUsuario): void {
  console.log(pessoas);
}

// Cria um array `pessoas` do tipo `TUsuario` com dois elementos.
const pessoas: TUsuario = [
  {
    nome: "Renan",
    email: "renanalves000@gmail.com",
    idade: 32,
  },
  {
    nome: "Stephane",
    email: "stephane@gmayl.com",
    idade: 33,
  },
];

// Parte com erro: tentativa de alterar a propriedade `nome` do primeiro elemento do array `pessoas`.
// Como `TUsuario` é um array de objetos `Readonly<TPessoa>`, não é permitido modificar as propriedades ou elementos do array.
// Portanto, essa linha irá gerar um erro de compilação em TypeScript.
pessoas[0].nome = "Renan Alves";

// Chama a função `atualizar` para imprimir o array `pessoas` no console.
atualizar(pessoas);
