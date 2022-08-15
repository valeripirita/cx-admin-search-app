import '../../../styles.css'

import React from 'react';
import { Provider } from 'react-redux';

import { toRelativeUrl } from '@okta/okta-auth-js';
import { Security } from '@okta/okta-react';

import { oktaConfig } from '../../config';
import { setupStore } from '../../store/store';
import Main from '../main/Main';
const store = setupStore();

const App = () => {

    const restoreOriginalUri = async (_oktaAuth: any, originalUri: string) => {
        { to: (toRelativeUrl(originalUri || '/', window.location.origin)) }
    };

    return (
        <Security oktaAuth={oktaConfig} restoreOriginalUri={restoreOriginalUri}>
            <Provider store={store}>
                <Main />
            </Provider>
        </Security>
    );
};

export default App;
