import { v4 as geradorId } from "uuid";

export default class ExameCreate {
  readonly id: string;
  private examinador: string;
  private candidato: string;
  private quantidadeEliminatorias: number;
  private quantidadeGraves: number;
  private quantidadeMedias: number;
  private quantidadeLeves: number;
  private aprovado: boolean;

  constructor(
    examinador: string,
    candidato: string,
    quantidadeEliminatorias: number,
    quantidadeGraves: number,
    quantidadeMedias: number,
    quantidadeLeves: number
  ) {
    this.id = geradorId();
    this.examinador = examinador;
    this.candidato = candidato;
    this.quantidadeEliminatorias = quantidadeEliminatorias;
    this.quantidadeGraves = quantidadeGraves;
    this.quantidadeMedias = quantidadeMedias;
    this.quantidadeLeves = quantidadeLeves;
    this.aprovado = this.verificarAprovacao();
  }

  public getExaminador(): string {
    return this.examinador;
  }

  public getCandidato(): string {
    return this.candidato;
  }

  public getQuantidadeEliminatorias(): number {
    return this.quantidadeEliminatorias;
  }

  public getQuantidadeGraves(): number {
    return this.quantidadeGraves;
  }

  public getQuantidadeMedias(): number {
    return this.quantidadeMedias;
  }

  public getQuantidadeLeves(): number {
    return this.quantidadeLeves;
  }

  public getAprovado(): boolean {
    return this.aprovado;
  }

  public atualizarExame(
    examinador: string,
    candidato: string,
    quantidadeEliminatorias: number,
    quantidadeGraves: number,
    quantidadeMedias: number,
    quantidadeLeves: number
  ): void {
    this.examinador = examinador;
    this.candidato = candidato;
    this.quantidadeEliminatorias = quantidadeEliminatorias;
    this.quantidadeGraves = quantidadeGraves;
    this.quantidadeMedias = quantidadeMedias;
    this.quantidadeLeves = quantidadeLeves;
    this.aprovado = this.verificarAprovacao();
  }

  private verificarAprovacao(): boolean {
    if (this.quantidadeEliminatorias > 0) {
      return false;
    }

    const pontuacaoPerdida =
      this.quantidadeGraves * 3 +
      this.quantidadeMedias * 2 +
      this.quantidadeLeves * 1;

    return pontuacaoPerdida <= 3;
  }
}

