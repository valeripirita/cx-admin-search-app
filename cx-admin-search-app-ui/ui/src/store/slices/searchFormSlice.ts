import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Venture } from '../apis/accountServiceApi';

export interface SearchFormSlice {
    jurisdiction?: string;
    accountId?: number;
    ventures?: string;
    screenName?: string;
    emailAddress?: string;
    firstName?: string;
    surname?: string;
    dateOfBirth?: string;
    identityNumber?: string;
    postCode?: string;
    phone?: string;
    ventureOptions?: Venture[];
}

const initialState: SearchFormSlice = {screenName: 'test1'}

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