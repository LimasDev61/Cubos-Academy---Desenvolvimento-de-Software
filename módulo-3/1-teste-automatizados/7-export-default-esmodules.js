function soma4(n1, n2) {
  return n1 + n2;
}

const nome = "Renan Alves da Silva Lima";

const usuarios = {
  nome: "Renan",
  email: "renanalves",
};

export default {
  // export default cria um único módulo com tudo que quero,
  // sem poder utilizar desestruturação
  soma4,
  nome,
  usuarios,
};

// export default exclusivo
//export default function soma4(n1, n2) {
//    return n1 + n2;
//  }
