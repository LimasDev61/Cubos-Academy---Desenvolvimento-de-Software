export default class Link {
    readonly id: string;
    public url: string;
    public visitas: number;

    constructor(id: string, url: string) {
        this.id = id;
        this.url = url;
        this.visitas = 0;
    }

}
