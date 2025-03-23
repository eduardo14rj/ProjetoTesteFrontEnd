export interface List<T> {
    currentPage: number;
    pageSize: number;
    totalRecords: number;
    isNextPage: boolean;
    results: T[];
}