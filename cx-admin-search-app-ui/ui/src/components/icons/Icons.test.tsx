import React from 'react';

import { afterEach, describe, expect, it } from '@jest/globals';
import { cleanup, render } from '@testing-library/react';

import { Check } from './Icons';

describe('Check', () => {

    afterEach(cleanup)

    it('should render', () => {

        const { asFragment, unmount } = render(<Check />);

        expect(asFragment()).toMatchSnapshot();

        unmount()
    });
})