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
    rua: number
    bairro: string
    cidade: string
    estado: string
}

type TCarrinhoEndereço = Required<Carrinho | TEndereco>;

type TLower = Lowercase<Carrinho["tipoTransacao"]>;