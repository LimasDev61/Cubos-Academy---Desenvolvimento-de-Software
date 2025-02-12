function total(valor: any) {
  valor.split("/");
}

try {
  console.log("Limas");
  total(100);
  console.log("depois do erro");
} catch (erro) {
  if (erro instanceof TypeError) {
    console.log(erro.message);
  } else {
    console.log("Erro desconhecido");
  }
} finally {
    console.log("Terminou a análise!")
}
