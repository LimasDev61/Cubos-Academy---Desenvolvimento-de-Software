// Define um tipo de transação de crédito com o valor literal "credito".
type TTransacaoCredito = "credito";

// Define um tipo de transação de débito com o valor literal "debito".
type TTransacaoDebito = "debito";

// Define um tipo de transação genérico que pode ser "credito" ou "debito".
type TTransacao = TTransacaoCredito | TTransacaoDebito;

// Cria um novo tipo `TUper` que transforma todos os valores possíveis de `TTransacao` em maiúsculas.
// O utilitário `Uppercase` converte os valores literais do tipo para letras maiúsculas.
type TUper = Uppercase<TTransacao>; // "CREDITO" | "DEBITO"

// Cria um novo tipo `TLower` que mantém os valores literais de `TTransacao` em letras minúsculas.
// Como `TTransacao` já é definido em minúsculas, `TLower` será equivalente a ele.
type TLower = Lowercase<TTransacao>; // "credito" | "debito"

// Cria um novo tipo `TCapitalize` que transforma a primeira letra de cada valor literal de `TTransacao` em maiúscula.
// O utilitário `Capitalize` é útil para criar valores formatados, como títulos ou nomes.
type TCapitalize = Capitalize<TTransacao>; // "Credito" | "Debito"

// Define uma constante `tipo` que é do tipo `TUper` (valores em maiúsculas).
const tipo: TUper = "CREDITO"; // Valor válido porque é uma versão em maiúsculas do tipo "credito".

// Define uma constante `tipo2` que é do tipo `TLower` (valores em minúsculas).
const tipo2: TLower = "debito"; // Valor válido porque corresponde ao literal em minúsculas "debito".

// Define uma constante `tipo3` que é do tipo `TCapitalize` (valores com a primeira letra em maiúscula).
const tipo3: TCapitalize = "Credito"; // Valor válido porque corresponde ao literal capitalizado "Credito".

// Cria um novo tipo `TCapitalizeLower` que transforma os valores literais de `TLower` em valores capitalizados.
// Combina os utilitários `Lowercase` e `Capitalize`, resultando em "Credito" | "Debito".
type TCapitalizeLower = Capitalize<TLower>;
