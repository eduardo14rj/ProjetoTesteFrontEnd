import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UpdateProduto {
    public nome: (string | ((control: AbstractControl) => ValidationErrors | null)[])[] = [];
    public preco: (number | ((control: AbstractControl) => ValidationErrors | null)[])[] = [];
    public id: (number | ((control: AbstractControl) => ValidationErrors | null)[])[] = [];

    constructor() { }
}
