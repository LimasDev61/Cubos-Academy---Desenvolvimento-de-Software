const criptograrSenha = (senha: string): string => {
  const senhaInvertida = senha.split("").reverse().join("");

  const senhaPadInit = senhaInvertida.padStart(senhaInvertida.length + 2, "z");
  const senhaPadFinal = senhaPadInit.padEnd(senhaPadInit.length + 2, "y");

  return senhaPadFinal;
};

export default criptograrSenha;
