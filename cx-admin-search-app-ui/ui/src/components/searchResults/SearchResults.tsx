import React  from 'react';
import { BarLoader } from 'react-spinners';

import cx from 'classnames';

import { useFetchAllAccountsQuery } from '../../store/apis/accountServiceApi';
import AccountListHeader from '../accountListHeader/AccountListHeader';
import AccountStatus from '../accountStatus/AccountStatus';
import Pagination from '../pagination/Pagination';

type SearchResultsProps = {
    searchForm: any;
}

const SearchResults = ({ searchForm }: SearchResultsProps) => {

    const { data: accounts, isFetching, isError } = useFetchAllAccountsQuery(searchForm);

    const getVentureImage = (ventureName: string) => {
        try {
            return require(`/public/assets/ventures/${ventureName}.jpg`);
        } catch (e) {
            return null;
        }
    }

    if (isFetching) {
        return <BarLoader />
    }

    if (isError) {
        return <div>Something went wrong</div>
    }

    if (accounts?.totalResults === 0) {
        return <div>Nothing found</div>
    }

    return (
        <>
            {  !isFetching &&
                <div className="w-full flex flex-col self-start h-full">
                    <AccountListHeader totalResults={ accounts!.totalResults } />

                    <div data-test='search-result-table' className="flex flex-col gap-2.5 h-full overflow-y-auto mb-2.5">
                        {accounts?.accounts.map((account) => (
                            <div key={account.accountId} className="relative flex flex-nowrap w-full rounded-md shadow h-[64px]">
                                <div className={
                                    cx(
                                        'flex rounded-l-md py-2 pl-5 bg-white w-full h-[64px] box-border',
                                        !account.open && 'border-2 border-error-100 border-r-0 opacity-30'
                                    )
                                }>
                                    {/* Name and created on */}
                                    <div className="flex flex-col px-2.5 basis-[25%] flex-grow-0 flex-shrink-0">
                                        <div className="flex gap-1">
                                            { account.title && <span className="text-neutral-500 font-light capitalize">{account.title}</span> }
                                            <span className="font-semibold capitalize">{account.firstName}</span>
                                            <span className="font-semibold capitalize">{account.surname}</span>
                                        </div>
                                        <div className="text-sm font-light">{account.screenName} / 01/01/1001</div>
                                    </div>
                                    {/* Email */}
                                    <div className="flex flex-col font-light pr-2.5 basis-[17%] flex-grow-0 flex-shrink-0">
                                        <div>{account.accountId}</div>
                                        <div title={account.emailAddress} className="text-sm font-light truncate">{account.emailAddress}</div>
                                    </div>
                                    {/* DOB */}
                                    <div className="font-light pr-2.5 basis-[12%] flex-grow-0 flex-shrink-0 truncate">
                                        {account.dateOfBirth}
                                    </div>
                                    {/* Address */}
                                    <div className="flex flex-col pr-2.5 basis-[12%] flex-grow-0 flex-shrink-0">
                                        <div className="font-light">{account.addressLine2}</div>
                                        <div>
                                            <span className="font-semibold">{account.postCode}</span>
                                            <span className="font-light"> - {account.countryCode}</span>
                                        </div>
                                    </div>
                                    {/* Phone */}
                                    <div className="pr-2.5 basis-[11%] flex-grow-0 flex-shrink-0">
                                        {account.number}
                                    </div>
                                    {/* Venture */}
                                    <div className="flex gap-1 items-start pt-1 pr-2.5 basis-[12%] flex-grow-0 flex-shrink-0">
                                        <div>
                                            <img
                                                src={getVentureImage(account.venture)}
                                                alt={account.venture}
                                                title={account.venture}
                                            />
                                        </div>
                                        <AccountStatus status={account.open} />
                                    </div>
                                    {/*Linked Account*/}
                                    <div className="pr-2.5 basis-[11%] flex-grow-0 flex-shrink-0">TODO</div>
                                </div>
                                <div className={
                                    cx(
                                        'w-2.5 h-full rounded-r-md basis-2.5 flex-grow-0 flex-shrink-0',
                                        account.open ? 'bg-success-500' : 'bg-error-400'
                                    )}>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <Pagination currentPage={(accounts!.offset / 10) + 1} pageSize={10} totalAmount={accounts!.totalResults}/>
                </div> }
        </>
    );
};

export default SearchResults;
