import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthOktaSlice {
    token: string
}

const initialState = {
    token: ''
}

export const authOktaSlice = createSlice({
    name: 'authOkta',
    initialState: initialState,
    reducers: {
        set: (state, action: PayloadAction<string>) => ({ ...state, token: action.payload})
    }
})

export const { set } = authOktaSlice.actions;

export default authOktaSlice.reducer;