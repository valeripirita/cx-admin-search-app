import { combineReducers,configureStore } from '@reduxjs/toolkit';

import { accountServiceApi } from './apis/accountServiceApi';
import searchFormReducer from './slices/searchFormSlice';

const rootReducer = combineReducers({
    searchFormReducer,
    [accountServiceApi.reducerPath]: accountServiceApi.reducer
});

export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(accountServiceApi.middleware)
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
