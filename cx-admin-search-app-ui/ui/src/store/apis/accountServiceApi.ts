import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export type Link = {
    href: string;
}

export type LinksList = {
    self: Link;
    first?: Link;
    next?: Link;
    last?: Link;
}

export type AccountPersonalDetails = {
    dateOfBirth: string;
    title: string;
    firstName: string;
    surname: string;
}

export type ContactNumber = {
    number: string;
    verifiedStatus: string;
}

export type AccountContactNumbers = {
    _links: LinksList;
    home: ContactNumber;
    mobile: ContactNumber;
    work: ContactNumber;
}

export type AccountResidentialAddress = {
    _links: LinksList,
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    addressLine4: string;
    countryCode: string;
    postCode: string;
}

export type SubscriptionPreference = {
    type: string;
    status: string;
}

export type AccountSubscriptionPreferences = {
    _links: LinksList;
    subscriptionPreferences: SubscriptionPreference[];
}

export type Account = {
    accountId: number;
    acquisitionPartnerId: number;
    currencyIso: string;
    emailAddress: string;
    emailVerificationStatus: string;
    open: boolean;
    personalDetails: AccountPersonalDetails;
    screenName: string;
    venture: string;
    _embedded: {
        contactNumbers: AccountContactNumbers[];
        residentialAddress: AccountResidentialAddress[];
        subscriptionPreferences: AccountSubscriptionPreferences[];
    }
}

export type AccountServiceResponse = {
    _links: LinksList;
    limit: number,
    offset: number,
    totalResults: number,
    _embedded: {
        accounts: Account[]
    }
}

export type AccountServicePostObject = {
    screenName?: string;
}

export const accountServiceApi = createApi({
    reducerPath: 'accountServiceApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.ACCOUNT_SERVICE_HOST
    }),
    endpoints: (build) => ({
        fetchAllAccounts: build.query<AccountServiceResponse, AccountServicePostObject>({
            query: (data) => ({
                url: '/search',
                method: 'POST',
                body: {
                    ...data
                }
            })
        })
    })
})

export const {
    useFetchAllAccountsQuery
} = accountServiceApi;
