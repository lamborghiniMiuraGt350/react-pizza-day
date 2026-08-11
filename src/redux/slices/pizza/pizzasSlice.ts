import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from "axios";

import { RootState } from '../../store';
import { Pizza, SearchPizzaParams } from './types';
import { PizzaSliceState, Status } from '../cart/types';



type fetchPizzasArgs = Record<string, string>

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>('pizza/fetchPizzasStatus', async (params, thunkAPI) => {
    const {
        order,
        sortBy,
        category,
        search,
        currentPage
    } = params;


    let res = await axios.get<Pizza[]>(`https://6a56e354b17de7bebbde971d.mockapi.io/items?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}&${search}`)
    return res.data;
},
)


const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING
}


export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: initialState,
    reducers: {
        setItems: (state, action: PayloadAction<Pizza[]>) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.status = Status.LOADING;
                console.log('loading');
                state.items = [];
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = Status.SUCCESS;
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.status = Status.ERROR;
                console.log('error');
                state.items = [];
            });
    }
})

export const selectPizzaData = (state: RootState) => state.pizza

// Action creators are generated for each case reducer function
export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer



