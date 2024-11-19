const bcrypt = require("bcrypt");

const comparar = (resultado, hash) => {
  let resultadoString =
    typeof resultado !== "string" ? JSON.stringify(resultado) : resultado;
  const corresponde = bcrypt.compareSync(resultadoString, hash);
  return corresponde;
};

module.exports = comparar;
