// Definindo o tipo TTransation como um tipo literal com os valores "credito", "debito", "pix" e "boleto".
type TTransation = "credito" | "debito" | "pix" | "boleto";

// Utilizando o utilitário `Exclude` para criar um novo tipo TBanco1.
// O tipo TBanco1 exclui o valor "credito" do conjunto de valores do tipo TTransation.
// O resultado será "debito" | "pix" | "boleto".
type TBanco1 = Exclude<TTransation, "credito">;

// Utilizando o utilitário `Exclude` para criar um novo tipo TBanco2.
// O tipo TBanco2 exclui o valor "debito" do conjunto de valores do tipo TTransation.
// O resultado será "credito" | "pix" | "boleto".
type TBanco2 = Exclude<TTransation, "debito">;
