function solucao(tempoTemporizador: number): number {

	const TEMPO_TOTAL = 10;

    const TEMPO_RESTANTE = ((TEMPO_TOTAL * 60) - ( tempoTemporizador * 60)) / 60;
    
    return TEMPO_RESTANTE;
    
}

export default solucao;
