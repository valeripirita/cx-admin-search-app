import React from 'react';

import { AccountListHeaderProps } from './AccountListHeaderTypes';
import { accountListHeaderCells } from './AccountListHeaderUtils';

const AccountListHeader = ({ totalResults }: AccountListHeaderProps) => {
    return (
        <div className="w-full flex flex-col flex-nowrap rounded-md overflow-hidden flex-grow-0 flex-shrink-0 font-bold shadow-md mb-2.5">
            <div className="bg-white px-[30px] py-2 text-primary-500">{totalResults} Results</div>
            <div className="flex flex-nowrap justify-start align-baseline bg-primary-300 px-5 text-sm">
                { accountListHeaderCells
                    .map((cell, index) => (
                        <div
                            key={index}
                            style={{ flexBasis: `${cell.width}%` }}
                            className="px-2.5 py-2 flex-grow-0 flex-shrink-0"
                        >{cell.title}</div>
                    )
                )}
            </div>
        </div>
    );
};

export default AccountListHeader;
