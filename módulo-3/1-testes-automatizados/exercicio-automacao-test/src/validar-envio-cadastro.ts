type TEnvio = {
  nome: string;
  email: string;
  senha: string;
};

const checkUsuario = ({ nome, email, senha }: TEnvio): boolean | string => {
  if (!nome || !email || !senha) {
    return "Todos os campos são obrigatórios";
  }

  return true;
};

export default checkUsuario;
