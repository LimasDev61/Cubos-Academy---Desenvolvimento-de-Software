type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type TEndereco = {
    cep: string
    rua: string
    bairro: string
    cidade: string
    estado: string
}

type TNCarrinho = Omit<Carrinho, "tipoTransacao"> & {
    endereco: TEndereco,
    tipoTransacao: Lowercase<Carrinho["tipoTransacao"]>
}

const venda: TNCarrinho = {
    item: {
        nome: 'string',
        descricao: 'string',
        valor: 1500
    },
    qtd: 1,
    desconto: 5,
    frete: 120,
    tipoTransacao: 'debito',
    cartao: {
        numero: 80,
        validade: 'string',
        nome: 'string',
        cvv: 555
    },
    endereco: {
        cep: 'string',
        rua: 'string',
        bairro: 'string',
        cidade: 'string',
        estado: 'string'
    }
}

console.log(venda);