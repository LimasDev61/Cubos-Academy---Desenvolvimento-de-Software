try {
  console.log("Antes de lançar um erro!");

  // throw "Tudo errado";
  throw new Error("Um erro do javascript");
} catch (error) {
  //console.log(error);
  // Erro tratado
  if (error instanceof Error) {
    console.log(error.message);
  }
}
