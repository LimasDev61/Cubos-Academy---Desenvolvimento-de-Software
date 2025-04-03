import jwt from "jsonwebtoken";
export function gerarToken(id: string) {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }
  const token = jwt.sign(
    { id, iat: Math.floor(Date.now() / 1000) },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1h",
    }
  );
  return token;
}
