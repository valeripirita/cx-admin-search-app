import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { AuthOktaSlice } from '../slices/authOktaSlice';

const baseUrl = process.env.ACCOUNT_SERVICE_HOST;

const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: async (headers, { getState }) => {
        const idToken = (getState() as {authOktaReducer: AuthOktaSlice} ).authOktaReducer.token;

        if (idToken) {
            headers.set('Authorization', `Bearer ${idToken}`)
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