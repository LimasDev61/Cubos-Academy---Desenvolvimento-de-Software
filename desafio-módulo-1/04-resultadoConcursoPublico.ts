function solucao(aprovados: string[], numeroInscricao: string): string {
	
	for(let i = 0; i < aprovados.length; i++) {
		if(aprovados[i] === numeroInscricao) {
			return 'APROVADO';
		}
	}

	return 'REPROVADO';

}

export default solucao;