// Crie um array com 5 nomes de países
// Adicione um país ao fim da lista
// Imprima a lista na tela

type TArray = {
  paises: string[];
};

type TAdd = (params: TArray, ind?: string[], indices?: number[]) => string[]

const addPaisFinal: TAdd = ({ paises }, ind = []) => {
  paises.push(...ind);
  return paises;
};

const paises = ["Brasil", "Alemanha", "França", "Suiça", "Inglaterra"];

const novoPaisFinal = addPaisFinal(
  {
    paises,
  },
  ["Bélgica"]
);

console.log(novoPaisFinal);

// Remova um páis do fim da lista
// Imprima a lista na tela

const removePaisFinal: TAdd = ({ paises }) => {
  paises.pop();
  return paises;
};
const paisDelFinal = removePaisFinal({
  paises,
});

console.log(paisDelFinal);

// Adicione um pais ao inicio da lista
// Imprima a lista na tela

const addPaisInit: TAdd = ({ paises }, ind = []) => {
  paises.unshift(...ind);
  return paises;
};

const novoPaisInit = addPaisInit(
  {
    paises,
  },
  ["Bélgica"]
);

console.log(novoPaisInit);

// Remova um páis do início da lista
// Imprima a lista na tela

const removePaisInit: TAdd = ({ paises }) => {
  paises.shift();
  return paises;
};

const paisDelInit = removePaisInit({
  paises,
});

console.log(paisDelInit);

// Imprima o ultimo país da lista na tela
// Imprima o segundo páis da lista na tela
// Imprima o pais do indice 2, na tela;


const manipularPais: TAdd = ({ paises }, indices = []) => {
    const resultado: string[] = [];
  
    for (let i = 0; i < indices.length; i++) {
      const indice = Number(indices[i]);
      if (indice >= 0 && indice < paises.length) {
        resultado.push(paises[indice]);
      } else {
        resultado.push(`Índice ${indice} é inválido.`);
      }
    }
  
    return resultado;
  };

  const final = paises.length - 1;
  const indices = ["1", "2", String(final)];

  const paisesSelecionados = manipularPais({ paises }, indices);
  console.log(paisesSelecionados.join("\n"));

