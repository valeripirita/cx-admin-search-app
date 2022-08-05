import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const accountServiceApi = createApi({
    reducerPath: 'accountServiceApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080'
    }),
    endpoints: (build) => ({
        fetchAllAccounts: build.query<any, any>({
            query: (object: any) => ({
                url: '/search',
                method: 'POST',
                body: {
                    ...object
                }
            })
        })
    })
})

export const {
    useFetchAllAccountsQuery
} = accountServiceApi;
