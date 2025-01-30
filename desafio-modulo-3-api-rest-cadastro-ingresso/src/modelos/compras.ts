import { geradorId } from "../auxiliares/geradorId";

class Compras {
  private id: string;
  private id_usuario: string;
  private id_evento: string;

  constructor(id: string, id_usuario: string, id_evento: string) {
    this.id = id || geradorId();
    this.id_usuario = id_usuario;
    this.id_evento = id_evento;
  }

  public getId(): string {
    return this.id;
  }

  public getIdUsuario(): string {
    return this.id_usuario;
  }

  public getIdEvento(): string {
    return this.id_evento;
  }
}

export default Compras;

