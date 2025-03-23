import { dateToString } from "../../../utils/dateToString";


export class Produto {
    public id: number = -1;
    public preco: number = -1;
    public criadoEm: Date = new Date();
    public nome: string = "";
    public deletadoEm: Date | null = null;
    constructor() { }

    get criadoEmFormato(): string {
        const date = dateToString(this.criadoEm);
        return date;
    }

    get precoFormatado(): string {
        return this.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

}