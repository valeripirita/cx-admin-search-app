import React, { useEffect, useState } from 'react';

import { useOktaAuth } from '@okta/okta-react';

import { useAppDispatch } from '../../store/hooks';
import { set as setToken } from '../../store/slices/authOktaSlice';
import SearchForm from '../searchForm/SearchForm';
import SearchOutput from '../searchOutput/SearchOutput';

const Main = () => {

    const dispatch = useAppDispatch();
    const { oktaAuth, authState } = useOktaAuth();
    const [isLoad, setIsLoad] = useState<boolean>(false);

    useEffect(() => {
        const token = process.env.DEV_OKTA_TOKEN || oktaAuth.getIdToken();
        if (token) {
            dispatch(setToken(token))
            setIsLoad(true);
        }
    }, [authState?.isAuthenticated])

    if (!isLoad) {
        return <div>Loading...</div>
    }

    return (
        <main className="bg-neutral-100 flex flex-row h-full w-full">
            <section className="box-border w-[298px] shadow bg-white border-2 border-primary-500 rounded-tr px-4 pb-4 h-full overflow-auto">
                <SearchForm />
            </section>
            <section className="flex-1 p-4 flex justify-center items-center">
                <SearchOutput />
            </section>
        </main>
    );
};

export default Main;
