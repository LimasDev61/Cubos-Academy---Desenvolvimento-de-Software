// Define um tipo para funções que recebem uma string e não retornam nada (void)
type TTexto = (text: string) => void;

// Função simples que imprime o texto no console
const imprimir: TTexto = (text) => {
  console.log(text); // Exibe o texto fornecido como argumento
};

// Função que imprime repetidamente uma mensagem após uma contagem regressiva
const imprimirRepetidamente: TTexto = (text) => {
  let contador = 10; // Inicia o contador com o valor 10
  const intervalo = setInterval(() => {
    console.log(contador); // Imprime o valor atual do contador no console
    contador--; // Decrementa o contador a cada 1 segundo
    if (contador === 0) {
      clearInterval(intervalo); // Para o intervalo quando o contador chega a 0
      console.log(contador); // Opcional: exibe o valor final do contador (0)
      console.log(text); // Exibe o texto fornecido como argumento
    }
  }, 1000); // Intervalo de 1000ms (1 segundo) entre cada execução
};

// Chamada da função 'imprimir', que exibe uma mensagem inicial
imprimir(
  "Olá mundo, falta pouco para o nosso fim, a contagem regressiva inicia-se em 10 segundos."
);

// Chamada da função 'imprimirRepetidamente', que inicia a contagem regressiva e imprime a mensagem final
imprimirRepetidamente("Acabou!");
