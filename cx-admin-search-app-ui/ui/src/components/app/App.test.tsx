import React from 'react';

import { afterEach, describe, expect, it } from '@jest/globals';
import { cleanup, render } from '@testing-library/react';

import App from './App';

describe('App', () => {

    afterEach(cleanup)

    it('should render', () => {

        const { asFragment, unmount } = render(<App />);

        expect(asFragment()).toMatchSnapshot();

        unmount()
    });
})