import React from 'react';

import cx from 'classnames';

export enum BADGE_VARIANTS {
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING',
    DANGER = 'DANGER'
}

export type BadgeProps = {
    title: string;
    variant?: BADGE_VARIANTS;
    classNames?: string;
    dataTestAttribute?: string;
}

const Badge = ({ classNames, dataTestAttribute, title, variant }: BadgeProps) => {

    const getBgColor = (variant: BADGE_VARIANTS | undefined): string => {
        switch (variant) {
            case BADGE_VARIANTS.DANGER:
                return 'bg-error-300'
            case BADGE_VARIANTS.SUCCESS:
                return 'bg-success-300'
            case BADGE_VARIANTS.WARNING:
            default:
                return 'bg-yellow-300'
        }
    }

    const getTextColor = (variant: BADGE_VARIANTS | undefined): string => {
        switch (variant) {
            case BADGE_VARIANTS.DANGER:
                return 'text-error-600'
            case BADGE_VARIANTS.SUCCESS:
                return 'text-success-600'
            case BADGE_VARIANTS.WARNING:
            default:
                return 'text-yellow-600'
        }
    }

    return (
        <span
            className={
                cx(
                    'rounded-[3px] px-1 py-0.5 text-[10px] font-bold',
                    getBgColor(variant),
                    getTextColor(variant),
                    classNames
                )
            }
            data-test={ dataTestAttribute }
        >
            { title }
        </span>
    );
};

export default Badge;
