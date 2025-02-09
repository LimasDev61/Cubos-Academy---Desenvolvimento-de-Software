export default class Link {
    readonly id: string;
    private url: string;
    private visitas: number;

    constructor(id: string, url: string) {
        this.id = id;
        this.url = url;
        this.visitas = 0;
    }
};