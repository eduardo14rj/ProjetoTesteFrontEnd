import { dateToString } from "../../../utils/dateToString";

export class Cliente {
    public id!: number;
    public nome!: string;
    public email!: string;
    public telefone!: string;
    public criadoEm: Date = new Date();
    public ativo: boolean = false;

    constructor() { }

    get ativoFormatado(): string {
        return this.ativo ? 'Sim' : 'Não';
    }

    get criadoEmFormato(): string {
        const date = dateToString(this.criadoEm);
        return date;
    }
}
