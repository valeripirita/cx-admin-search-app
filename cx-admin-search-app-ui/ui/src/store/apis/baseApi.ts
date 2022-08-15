import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react';

import { RootState } from '../store';

const baseUrl = process.env.ACCOUNT_SERVICE_HOST;

const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).authOktaReducer.token;

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
    }
});

export const baseApi = (reducerPath: string, tagTypes: string[]) =>
    createApi({
        reducerPath,
        baseQuery,
        tagTypes,
        endpoints: () => ({})
    });