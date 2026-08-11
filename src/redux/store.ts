import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

import cart from './slices/cart/cartSlice';
import pizza from './slices/pizza/pizzasSlice';
import filterSlice  from './slices/filter/filterSlice';

export const store = configureStore({
    reducer: {
        // склади
        filterSlice: filterSlice,
        cart: cart,
        pizza: pizza
    },
})
export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();