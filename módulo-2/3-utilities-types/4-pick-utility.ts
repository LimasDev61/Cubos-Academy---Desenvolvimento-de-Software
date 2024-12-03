// Definindo um tipo TCarro com as propriedades básicas de um carro.
type TCarro = {
  modelo: string;
  marca: string;
  cor: string;
  ano: number;
};

// Usando a utilidade `Pick` para criar um novo tipo `TNewCar` com apenas um subconjunto das propriedades de `TCarro`.
// `TNewCar` inclui apenas as propriedades "marca", "modelo" e "ano" do tipo `TCarro`.
type TNewCar = Pick<TCarro, "marca" | "modelo" | "ano">;
