const bcrypt = require("bcrypt");

const comparar = (resultado, hash) => {
  const resultadoString = typeof resultado !== "string" ? JSON.stringify(resultado) : resultado;
  return bcrypt.compareSync(resultadoString, hash);
};

module.exports = comparar;
