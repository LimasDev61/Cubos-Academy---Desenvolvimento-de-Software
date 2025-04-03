import jwt from "jsonwebtoken";
export function gerarToken(id: string) {
  const token = jwt.sign(
    { id, iat: Math.floor(Date.now() / 1000) },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1h",
    }
  );
  return token;
}
