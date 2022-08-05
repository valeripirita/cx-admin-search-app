import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchFormReducer from './slices/searchFormSlice';
import { accountServiceApi } from './apis/accountServiceApi';

const rootReducer = combineReducers({
    searchFormReducer,
    [accountServiceApi.reducerPath]: accountServiceApi.reducer
});

export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(accountServiceApi.middleware)
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
