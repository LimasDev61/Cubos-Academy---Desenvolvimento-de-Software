type TEstoque = {
    nome: string;
    preco: number;
    quantidade: number;
  };
  
  class Estoque {
    private nome: string;
    private preco: number;
    private quantidade: number;
  
    constructor(estoque: TEstoque) {
      this.nome = estoque.nome;
      this.preco = estoque.preco;
      this.quantidade = estoque.quantidade;
    }
  
    public getNome(): string {
      return this.nome;
    }
  
    public getPreco(): number {
      return this.preco;
    }
  
    public getQuantidade(): number {
      return this.quantidade;
    }
  
    public setQuantidade(quantidade: number): void {
      if (quantidade >= 0) {
        this.quantidade = quantidade;
        return;
      } else {
        console.log("A quantidade deve ser maior ou igual a zero.");
      }
    }
  
    public calcularValorEmEstoque(): number {
      return this.preco * this.quantidade;
    }
  
    public toString(): string {
      return `Nome: ${this.getNome()}, Preço: R$ ${this.getPreco()}, Quantidade: ${this.getQuantidade()}`;
    }
  }
  
  
  const produto = new Estoque({
    nome: "Camiseta",
    preco: 49.9,
    quantidade: 3,
  });
  
  console.log(produto.toString());
  console.log(produto.calcularValorEmEstoque());
  
  produto.setQuantidade(5);
  console.log(produto.toString());
  console.log(produto.calcularValorEmEstoque());
  
  produto.setQuantidade(-5);
  console.log(produto.toString());