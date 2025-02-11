import { Funcionario } from "./funcionario";
import { Gerente } from "./gerente";
import { Programador } from "./programador";
import { Vendedor } from "./vendedor";

const funcionario = new Funcionario("Renan", 140000);
const gerente = new Gerente("Renan Limas", 15600, "12365");
const vendedor = new Vendedor("Limas", 140000, 150);
const programador = new Programador("DevLimas", 500000, ["JavaScript", "Java"]);

vendedor.adicionarComissao(1000);

console.log(`Eu sou ${funcionario._nome} um funcionário qualquer!`);
console.log(
  `Eu sou ${gerente._nome} e sou um gerente. E minha senha é ${gerente.senha}`
);
console.log(
  `Eu sou ${
    vendedor._nome
  } um vendedor, e meu salário completo desse mês, é ${vendedor.salarioCompleto()}`
);
console.log(
  `Eu sou ${
    programador._nome
  } um programador, e sei programar em: ${programador.obterLinguagens()}`
);
