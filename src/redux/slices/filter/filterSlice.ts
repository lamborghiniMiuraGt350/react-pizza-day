import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { FilterSliceState, Sort, SortPropertyEnum } from './types';


const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    sort: { name: 'популярністю (з високої)', sortProperty: SortPropertyEnum.RATING_DESC }
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload;
        },
        setSort: (state, action: PayloadAction<Sort>) => {
            state.sort = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        setFilters: (state, action: PayloadAction<FilterSliceState>) => {
            if (Object.keys(action.payload).length) {
                state.sort = action.payload.sort;
                state.currentPage = Number(action.payload.currentPage);
                state.categoryId = Number(action.payload.categoryId);
            } else {
                state.categoryId = 0
                state.currentPage = 1
                state.sort = { name: 'популярністю (з високої)', sortProperty: SortPropertyEnum.RATING_DESC }
            }
        }
    },
})

export const selectFilter = (state: RootState) => state.filterSlice
export const selectSort = (state: RootState) => state.filterSlice.sort

// Action creators are generated for each case reducer function
export const { setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions

export default filterSlice.reducer