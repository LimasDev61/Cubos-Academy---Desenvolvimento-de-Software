// Crie um objeto que represente o cartão de consumo de um cliente. Deve ter:
// Nome do cliente
// Idade do cliente
// Produtos consumidos
// Cada produto pode ter:
// Nome do produto
// Preço unitário (em centavos)
// Quantidade comprada

// Pode invetar os dados. Coloque pleo menos 3 produtos.

// Tipando Produto
type TProduto = {
    nomeP: string
    precoUnitario: number
    quantidadeComprada: number
};

// Tipando Cliente
type TCliente = {
    nome: string
    idade: number
    produtosConsumidos: TProduto[],
    valorTotal?: number
};


// Passo 1: lista cliente
const CLIENTE: TCliente[] = [{
    nome: 'Stephane',
    idade: 33,
    produtosConsumidos: [],
},
{
    nome: 'Renan',
    idade: 32,
    produtosConsumidos: []
}];

// Passo 2: lista de produtos
const PRODUTO: TProduto[] = [{
    nomeP: 'Cerveja Estella',
    precoUnitario: 550,
    quantidadeComprada: 4 
},
{
    nomeP: 'Torta',
    precoUnitario: 1020,
    quantidadeComprada: 1 
},
{
    nomeP: 'Vinho Branco',
    precoUnitario: 5000,
    quantidadeComprada: 2 
}];

// Passo 3: Cartão Consumo
const CARTÃO_CONSUMO: TCliente = {
    nome: CLIENTE[0].nome,
    idade: CLIENTE[0].idade,
    produtosConsumidos: [PRODUTO[0], PRODUTO[1]],
    valorTotal: 0
};

// Segunda parte do exercicio-resolvido-4

// Faça um programa que imprime uma mensagem amigável do resumo do cartão de consumo
// (que inclui chamar o cliente pelo nome) que informa o valor que ele deve pagar.

// Loop para percorrer os produtos consumidos
let total: number = 0; // variável para receber a quantia calculada do produto.
for(let totalC of CARTÃO_CONSUMO.produtosConsumidos) {
    total += totalC.precoUnitario * totalC.quantidadeComprada;
};

// CARTÃO_CONSUMO.valor, está adquirindo o valor total acumulado.
CARTÃO_CONSUMO.valorTotal = total;

// Dividindo por 100, para adqurir os centavos.
console.log(`O valor total da compra do(a) cliente: ${CARTÃO_CONSUMO.nome}
foi de: ${CARTÃO_CONSUMO.valorTotal / 100}`);