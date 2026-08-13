import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { getCartFromLS } from '../../../utils/getCartFromLS';
import { calcTotalPrice } from '../../../utils/calcTotalPrice';

import { CartItem, CartSliceState } from './types';


const cartData = getCartFromLS();
const initialState: CartSliceState = {
    totalPrice: cartData.totalPrice,
    items: cartData.items
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const findItem = state.items.find(obj => obj.id === action.payload.id)
            if (findItem?.count) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                });
            }

            state.totalPrice = calcTotalPrice(state.items);
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(obj => obj.id !== action.payload)
            state.totalPrice = calcTotalPrice(state.items);
        },
        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
        minusItem: (state, action: PayloadAction<string>) => {
            const findItem = state.items.find(obj => obj.id === action.payload)
            if (findItem && findItem.count > 0) {
                findItem.count--;
                state.totalPrice = calcTotalPrice(state.items);
            }
        }
    },
})

export const selectCart = (state: RootState) => state.cart
export const selectCartItemById = (id: string) => (state: RootState) => state.cart.items.find(obj => obj.id === id)
// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions

export default cartSlice.reducer