export interface DataSource<T> {
    message: string;
    code: string;
    data: T[];
}