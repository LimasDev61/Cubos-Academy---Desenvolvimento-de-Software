import * as jwt from "jsonwebtoken";

export class TokenAuxiliar {
  extrairId(token: string): number {
    const { idUsuarioLogado } = jwt.verify(
      token,
      process.env.JWT_SECRET || ""
    ) as jwt.JwtPayload;

    return idUsuarioLogado as number;
  }
}
