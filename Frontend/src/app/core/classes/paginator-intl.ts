import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable()
export class PaginatorIntl extends MatPaginatorIntl {
    override itemsPerPageLabel = 'Itens por página';
    override nextPageLabel = 'Próxima página';
    override previousPageLabel = 'Página anterior';
    override firstPageLabel = 'Primeira página';
    override lastPageLabel = 'Última página';

    // Caso queira customizar os textos dos botões de range, pode sobrescrever o método getRangeLabel.
    override getRangeLabel = (page: number, pageSize: number, length: number) => {
        if (length === 0 || pageSize === 0) {
            return `0 de ${length}`;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        // Se for a última página, pode ajustar o endIndex
        const endIndex = startIndex < length
            ? Math.min(startIndex + pageSize, length)
            : startIndex + pageSize;
        return `${startIndex + 1} - ${endIndex} de ${length}`;
    };
}
