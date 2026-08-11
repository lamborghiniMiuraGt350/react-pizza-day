
export type Pizza = {
    id: string;
    title: string;
    price: number;
    image: string;
    sizes: number[];
    types: number[];
}
export type SearchPizzaParams = {
    sortBy: string;
    order: string;
    category: string;
    search: string;
    currentPage: string;
};