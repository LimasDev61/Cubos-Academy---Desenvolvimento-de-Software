type TLoja = {
    nomeLoja: string;
    enderecoLoja: string;
  };
  
  type TProdutos = {
    nome: string;
    preco: number;
    quantidade: number;
  };
  
  class Loja {
    private nomeLoja: string;
    private enderecoLoja: string;
    private produtos: TProdutos[];
  
    constructor(loja: TLoja, produtos: TProdutos[] = []) {
      this.nomeLoja = loja.nomeLoja;
      this.enderecoLoja = loja.enderecoLoja;
      this.produtos = produtos;
    }
  
    public getNomeLoja(): string {
      return this.nomeLoja;
    }
  
    public getEnderecoLoja(): string {
      return this.enderecoLoja;
    }
  
    public setEnderecoLoja(enderecoLoja: string): void {
      this.enderecoLoja = enderecoLoja;
    }
  
    public setNomeLoja(nomeLoja: string): void {
      this.nomeLoja = nomeLoja;
    }
  
    public adicionarProduto(produto: TProdutos): void {
      this.produtos.push(produto);
      console.log(`Produto ${produto.nome} adicionado com sucesso!`);
      return;
    }
  
    public removerProduto(produto: TProdutos): void {
      const ind = this.produtos.indexOf(produto);
      if (ind !== -1) {
        this.produtos.splice(ind, 1);
        console.log(`Produto ${produto.nome} removido com sucesso!`);
        return;
      } else {
        console.log(`Produto ${produto.nome} não encontrado!`);
        return;
      }
    }
    public listarProdutos(): void {
      if (this.produtos.length === 0) {
        console.log("Nenhum produto disponível.");
        return;
      } else {
        console.log("Produtos disponíveis:");
        this.produtos.forEach((produto) => {
          console.log(
            `Nome: ${produto.nome}, Preço: R$ ${produto.preco}, Quantidade: ${produto.quantidade}`
          );
        });
        return;
      }
    }
  
    public calcularTotalEstoque(): number {
      return this.produtos.reduce(
        (total, produto) => total + produto.preco * produto.quantidade,
        0
      );
    }
  
    public toString(): string {
      return `Nome da Loja: ${this.getNomeLoja()}, Endereço da Loja: ${this.getEnderecoLoja()}`;
    }
  }
  
  const loja: TLoja = {
    nomeLoja: "Loja do Renan",
    enderecoLoja: "Gama - DF",
  };
  
  const loja1 = new Loja(loja);
  
  console.log(loja1.toString());
  
  loja1.setNomeLoja("Renan Corporation");
  loja1.setEnderecoLoja("Raccon City");
  
  console.log(loja1.toString());
  
  const produto1: TProdutos = {
    nome: "Caneta",
    preco: 5.99,
    quantidade: 100,
  };
  
  const produto2: TProdutos = {
    nome: "Borracha",
    preco: 2.99,
    quantidade: 50,
  };
  
  loja1.adicionarProduto(produto1);
  loja1.adicionarProduto(produto2);
  loja1.listarProdutos();
  console.log(`Total de estoque: R$ ${loja1.calcularTotalEstoque()}`);
  
  loja1.removerProduto(produto1);
  loja1.listarProdutos();
  console.log(`Total de estoque: R$ ${loja1.calcularTotalEstoque()}`);
  
  loja1.removerProduto(produto2);
  loja1.listarProdutos();
  console.log(`Total de estoque: R$ ${loja1.calcularTotalEstoque()}`);
  
  loja1.removerProduto(produto2);