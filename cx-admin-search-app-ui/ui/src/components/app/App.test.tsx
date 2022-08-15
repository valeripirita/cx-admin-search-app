import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { afterEach, describe, expect, it } from '@jest/globals';
import { cleanup } from '@testing-library/react';
import App from './App';
import { setupStore } from '../../store/store';

describe('App', () => {

    afterEach(cleanup)

    it('should render', () => {

        const store = setupStore();

        const { asFragment, unmount } = render(<Provider store={store}><App /></Provider>);

        expect(asFragment()).toMatchSnapshot();

        unmount()
    });
})