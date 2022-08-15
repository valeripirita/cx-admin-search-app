import '../../../styles.css'

import React from 'react';
import { Provider } from 'react-redux';

import { toRelativeUrl } from '@okta/okta-auth-js';
import { Security } from '@okta/okta-react';

import { oktaConfig } from '../../config';
import { setupStore } from '../../store/store';
import SearchForm from '../searchForm/SearchForm';
import SearchOutput from '../searchOutput/SearchOutput';
const store = setupStore();

const App = () => {

    const restoreOriginalUri = async (_oktaAuth: any, originalUri: string) => {
        { to: (toRelativeUrl(originalUri || '/', window.location.origin)) }
    };

    return (
        <Security oktaAuth={oktaConfig} restoreOriginalUri={restoreOriginalUri}>
            <Provider store={store}>
                <main className="bg-neutral-100 flex flex-row h-full w-full">
                    <section className="box-border w-[298px] shadow bg-white border-2 border-primary-500 rounded-tr px-4 pb-4 h-full overflow-auto">
                        <SearchForm />
                    </section>
                    <section className="flex-1 p-4 flex justify-center items-center">
                        <SearchOutput />
                    </section>
                </main>
            </Provider>
        </Security>
    );
};

export default App;
