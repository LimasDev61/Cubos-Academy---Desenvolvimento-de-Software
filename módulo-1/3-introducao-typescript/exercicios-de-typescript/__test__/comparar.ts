import bcrypt from "bcrypt";

const comparar = (resultado: any, hash: string) => {
  let resultadoString =
    typeof resultado !== "string" ? JSON.stringify(resultado) : resultado;
  const corresponde = bcrypt.compareSync(resultadoString, hash);
  return corresponde;
};

export default comparar;
