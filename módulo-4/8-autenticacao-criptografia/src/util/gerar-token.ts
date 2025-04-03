import jwt from "jsonwebtoken";
export function gerarToken(id: string) {
  const token = jwt.sign({ id, iat: Date.now() }, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });
  return token;
}
