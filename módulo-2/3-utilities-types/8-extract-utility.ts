// Define um tipo de transação com os valores possíveis: "Credito", "Debito", "Boleto" e "Pix".
type TTransacao = "Credito" | "Debito" | "Boleto" | "Pix";

// Usa o utilitário `Extract` para criar um tipo `T1` que inclui apenas "Credito" ou "Debito".
type T1 = Extract<TTransacao, "Credito" | "Debito">;

// Usa o utilitário `Extract` para criar um tipo `T2` que inclui apenas "Boleto" ou "Pix".
type T2 = Extract<TTransacao, "Boleto" | "Pix">;

// Define um tipo de entrada como um número, representando uma escolha.
type TEntrada = number;

// Arrow function que processa transações do tipo `T1` (Credito ou Debito) com base na entrada do usuário.
const transation1 = (numero: TEntrada): T1 | void => {
  if (numero === 1) {
    return "Credito"; // Retorna "Credito" para a entrada 1.
  } else if (numero === 2) {
    return "Debito"; // Retorna "Debito" para a entrada 2.
  }

  console.error(`Opcão inválida para a transação 1: CREDITO | 2: DEBITO`);
};

let opcao: TEntrada = 1;

console.log(transation1(opcao));

// Arrow function que processa transações do tipo `T2` (Boleto ou Pix) com base na entrada do usuário.
const transation2 = (numero: TEntrada): T2 | void => {
  if (numero === 1) {
    return "Boleto"; // Retorna "Boleto" para a entrada 1.
  } else if (numero === 2) {
    return "Pix"; // Retorna "Pix" para a entrada 2.
  }

  console.error(
    `Opcão inválida para a transação, escolha entre 1: BOLETO | 2: PIX`
  );
};

let opcao1: TEntrada = 3;

console.log(transation2(opcao1));
