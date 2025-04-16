![](https://i.imgur.com/xG74tOh.png)

# Integração com API de Terceiros

### Instruções para abrir o projeto

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code

### Instruções para rodar o projeto

- Use o comando `npm install` para instalar as dependências
- Use o comando `npm run dev` para iniciar o servidor

## API de entregas

### Contexto

Você foi contratado para desenvolver uma aplicação que gerencia entregas de produtos. Dentre as funcionalidades requeridas, você deve calcula a distância entre duas localidades identificadas pelo seu CEP

Para obter as coordenadas (latitude e longitude) dessas localidades, você deve se integrar à API de geocodificação do Brasil Api

### Tarefas

Você deve criar uma API que permita o usuário:

- Calcular a distância entre duas localidades a partir dos seus CEPs

### Rotas

### `POST /distancia`

#### Requisição

Sem parâmetros de rota ou consulta

O corpo da requisição deve conter o seguinte campo:

- localidades (array obrigatório): deve contem os CEPs das duas localidades (array deve conter dois elementos)

#### Resposta

- Caso de erro: status code apropriado e mensagem apropriada
- Caso de sucesso:

  - retornar a distância entre as duas localidades

#### Exemplo

- Requisição

```json
// POST /distancia
{
  "localidades": ["01001000", "01003000"]
}
```

- Resposta

```json
// caso de sucesso
{
  "distancia": 100
}
```

```json
// caso de erro
{
  "mensagem": "CEPs inválidos"
}
```

## IMPORTATE

- Você deverá ler a documentação da API de geocodificação do Brasil Api para saber como obter as coordenadas de uma localidade a partir do seu CEP
- Link da API de geocodificação do Brasil Api: https://brasilapi.com.br/docs
- Teste enviando algumas requisições para entender o retorno da API em caso de sucesso e em caso de erro. Desta forma, vai saber identificar quando uma requisição falhar e vai entender o formato do corpo da resposta, informação crucial para descobrir como vai extrair a latitude e longitude
- Existe uma função chamada calcularDistancia, presente no arquivo `auxiliares/distancia.ts`, que calcula a distância entre duas localidades a partir das suas coordenadas. Você não precisa entender como o cálculo é feito, apenas quais parâmetros a função espera receber
- Você deve retornar a(s) mensagen(s) de erro que julgar mais apropriada(s)
