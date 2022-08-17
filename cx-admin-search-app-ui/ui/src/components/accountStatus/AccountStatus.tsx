import React from 'react';

import Badge, { BADGE_VARIANTS } from '../badge/Badge';

export type AccountStatusProps = {
    status: boolean;
}

const AccountStatus = ( { status }: AccountStatusProps ) => {

    const getVariant = (status: boolean): BADGE_VARIANTS => {
        return status ? BADGE_VARIANTS.SUCCESS : BADGE_VARIANTS.DANGER;
    }

    const getText = (status: boolean): string => {
        return status ? 'Open' : 'Closed';
    }

    return <Badge title={getText(status)} variant={getVariant(status)} />;
};

export default AccountStatus;
