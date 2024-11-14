function solucao(precosCarrinho: number[], minimoParaDesconto: number, desconto: number): number {
	
	let total = 0;

	for(let i = 0; i < precosCarrinho.length; i++) {
		total += precosCarrinho[i];
	}

	if(total >= minimoParaDesconto) {
		return total - (total * desconto);
	}

	return total;
 
}
