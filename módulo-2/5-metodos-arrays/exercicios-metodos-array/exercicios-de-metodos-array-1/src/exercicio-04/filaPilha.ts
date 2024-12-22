// IMPLEMENTE AQUI A SUA FUNÇÃO
type TPedido = {
  nomeCliente: string;
  nomePrato: string;
  quantidade: number;
};

type TAtendimento = "fila" | "pilha";

function solucao(
  pedidoSolicitado: TPedido,
  pedidos: TPedido[],
  tipoDeAtendimento: TAtendimento
): TPedido[] {
  tipoDeAtendimento === "fila"
    ? pedidos.push(pedidoSolicitado)
    : pedidos.unshift(pedidoSolicitado);

    return pedidos;
}
export default solucao;
