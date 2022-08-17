import { baseApi } from './baseApi';

export type Account = {
    accountId: number
    addressLine2: string
    countryCode: string
    dateOfBirth: string
    emailAddress: string
    firstName: string
    number: string
    open: boolean
    postCode: string
    screenName: string
    surname: string
    title: string
    venture: string
}

export type AccountServiceResponse = {
    accounts: Account[],
    totalResults: number,
    offset: number,
}

export type AccountServicePostObject = {
    screenName?: string;
}

export type Venture = {
    id: number;
    name: string;
    obsolete: boolean;
    partnerIds: number[];
}

export type AccountVenturesResponse = {
    ventures: Venture[]
}

export const accountServiceApi = baseApi('accountServiceApi', []).injectEndpoints({
    endpoints: build => ({
        fetchAllAccounts: build.query<AccountServiceResponse, AccountServicePostObject>({
            query: data => ({
                url: '/search',
                method: 'POST',
                body: { ...data }
            })
        }),
        fetchAccountVentures: build.query<AccountVenturesResponse, any>({
            query: (userId) => ({
                url: `/ventures?userId=${userId}`
            })
        })
    })
});

export const {
    useFetchAllAccountsQuery,
    useFetchAccountVenturesQuery
} = accountServiceApi;
