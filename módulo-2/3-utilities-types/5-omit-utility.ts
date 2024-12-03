// Definindo um tipo TCarro com as propriedades básicas de um carro.
type TCarro = {
  modelo: string;
  marca: string;
  cor: string;
  ano: number;
};

// Usando a utilidade `Omit` para criar um novo tipo `TNewCar` com um subconjunto das propriedades de `TCarro`.
// `TNewCar` inclui todas as propriedades de `TCarro`, exceto "marca", "modelo" e "ano".
// Portanto, `TNewCar` terá apenas a propriedade "cor" e "ano" de `TCarro`.
type TNewCar = Omit<TCarro, "marca" | "modelo" | "ano">;

// Definindo o tipo TUsuario que representa um usuário com três propriedades: nome, email e senha.
type TUsuario = {
  nome: string;
  email: string;
  senha: string;
};

// Criando um novo tipo chamado usuarioSemSenha que é derivado do tipo TUsuario.
// Esse tipo inclui todas as propriedades de `TUsuario`, exceto "nome" e "email".
// Portanto, `usuarioSemSenha` terá apenas a propriedade "senha".
type usuarioSemSenha = Omit<TUsuario, "nome" | "email">;
