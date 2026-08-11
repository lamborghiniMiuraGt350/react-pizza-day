import { Pizza } from "../pizza/types";

export type CartItem = {
    id: string;
    title: string;
    price: number;
    count: number;
    image: string;
    type: string;
    size: number;
}


export interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface PizzaSliceState {
    items: Pizza[];
    status: Status
}