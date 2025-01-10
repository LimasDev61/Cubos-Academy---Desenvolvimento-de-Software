const senhaCheck = (senha: string): string => {
  if (senha.length === 4 && !isNaN(Number(senha))) {
    return "SENHA VÁLIDA";
  }

  return "SENHA INVÁLIDA";
};

export default senhaCheck;
