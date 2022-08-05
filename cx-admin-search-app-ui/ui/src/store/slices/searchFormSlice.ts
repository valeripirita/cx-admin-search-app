import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchFormSlice {
    screenName?: string
}

const initialState: SearchFormSlice= {}

export const searchFormSlice = createSlice({
    name: 'searchForm',
    initialState: initialState,
    reducers: {
        set: (state, action: PayloadAction<SearchFormSlice>) => ({ ...state, ...action.payload }),
        clear: () => ({})
    }
})

export const { set, clear } = searchFormSlice.actions;

export default searchFormSlice.reducer;