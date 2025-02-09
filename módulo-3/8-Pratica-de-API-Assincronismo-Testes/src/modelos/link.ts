export default class Link {
    readonly id: string;
    private url: string;
    private visitas: number;

    constructor(id: string, url: string) {
        this.id = id;
        this.url = url;
        this.visitas = 0;
    }

    public getId(): string {
        return this.id;
    }

    public getUrl(): string {
        return this.url;
    }

    public getVisitasContador(): number {
        return this.visitas;
    }

    public incrementarVisitas(): void {
        this.visitas++;
    }

    public setUrl(novaUrl: string): void {
        this.url = novaUrl;
    }
}
