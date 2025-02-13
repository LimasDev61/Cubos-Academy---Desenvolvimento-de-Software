# Tratamento do Erros

### Instruções para abrir o projeto

1. Faça o fork deste repositório
2. Clone o repositório forkado
3. Abra-o no VS Code

### Execução do projeto

Para configurar o projeto, siga os passos abaixo:

- Use o comando `npm install` para instalar as dependências
- Use o comando `npm run dev` para inicializar o servidor

### Contexto

Você foi alocado para trabalhar em uma API que ajuda os usuários a gerenciar e organizar suas tarefas diárias. Duas funcionalidades estão implementadas, a de listar as tarefas cadastradas e a de cadastrar uma nova tarefa

Seu trabalho é modificar o código de cadastro de uma nova tarefa para que o erro seja tratado de uma maneira melhor de se dar manutenção no código. Para isso, você deve criar classes customizadas de erros e usar o cloco try/catch

#### ⚠️ Importante: o servidor já se encontra em pleno funcionamento. Sua tarefa é dar manutenção no código atravez de uma refatoração. Ou seja, não é necessário que adicione mais funcionalidades

#### ⚠️ Importante: o arquivo "bancoDeDados.ts" está exportando o objeto que simulará nosso banco de dados. Algumas tarefas já encontram-se cadastradas, para facilitar os testes

#### ⚠️ Importante: a única parte do código que precisa modificar é a responsável pelo cadastro de uma nova tarefa
