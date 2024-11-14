function solucao(simbolo1: string, simbolo2: string, simbolo3: string): string {
	
	if(simbolo1 === simbolo2 && simbolo2 === simbolo3) {
		return 'GANHOU';
	}
	else {
		return 'PERDEU';
	}
}

export default solucao;