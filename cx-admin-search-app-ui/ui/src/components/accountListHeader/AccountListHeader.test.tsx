import React from 'react';

import { afterEach, describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
import { cleanup } from '@testing-library/react';

import AccountListHeader from './AccountListHeader';

describe('AccountListHeader', () => {

    afterEach(cleanup)

    it('should render', () => {

        const { asFragment, unmount } = render(<AccountListHeader totalResults={10} />);

        expect(asFragment()).toMatchSnapshot();

        unmount()
    });
})