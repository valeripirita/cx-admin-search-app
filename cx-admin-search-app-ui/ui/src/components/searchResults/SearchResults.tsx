import React  from 'react';
import { useFetchAllAccountsQuery } from '../../store/apis/accountServiceApi';
import { tableHeadCells } from '../searchOutput/helpers';
import { BarLoader } from 'react-spinners';
import AccountStatus from '../accountStatus/AccountStatus';
import cx from 'classnames';
import Pagination from '../pagination/Pagination';
import { Search } from '../icons/Icons';

type SearchResultsProps = {
    searchForm: any;
}

// TODO:
// ask when should pagination appear

const SearchResults = ({ searchForm }: SearchResultsProps) => {

    const { data: accounts, isFetching } = useFetchAllAccountsQuery(searchForm);

    const getVentureImage = (ventureName: string) => {
        try {
            return require(`/public/assets/ventures/${ventureName}.jpg`);
        } catch (e) {
            return null;
        }
    }

    if (accounts?.totalResults === 0) {
        // TODO: move to separate component
        return <div>Nothing found</div>
    }

    return (
        <>
            { isFetching ? <BarLoader /> :
            <div className="w-full flex flex-col self-start h-full">
                <div className="w-full flex flex-col flex-nowrap rounded-md overflow-hidden flex-grow-0 flex-shrink-0 font-bold shadow-md mb-2.5">
                    <div className="bg-white px-[30px] py-2 text-primary-500">{accounts?.totalResults} Results</div>
                    <div className="flex flex-nowrap justify-start align-baseline bg-primary-300 px-5 text-sm">
                        {tableHeadCells.map((cell, index) => {
                            return (
                                <div key={index} style={{flexBasis: `${cell.width}%`}} className={cx("px-2.5 py-2 flex-grow-0 flex-shrink-0")}>{cell.title}</div>
                            )
                        })}
                    </div>
                </div>

                <div data-test='search-result-table' className="flex flex-col gap-2.5 h-full overflow-y-auto mb-2.5">
                    {accounts?._embedded.accounts.map((account, key) => (
                        <div key={account.accountId} className="relative flex flex-nowrap w-full rounded-md shadow">
                            <div className={
                                cx(
                                    'flex rounded-l-md py-2 pl-5 bg-white w-full',
                                    !account.open && 'border-2 border-error-100 border-r-0 opacity-30'
                                )
                            }>
                                {/* Name and created on */}
                                <div className="flex flex-col px-2.5 basis-[25%] flex-grow-0 flex-shrink-0">
                                      <div className="flex gap-1">
                                            <span className="text-neutral-500 font-light capitalize">{account.personalDetails.title}</span>
                                            <span className="font-semibold capitalize">{account.personalDetails.firstName}</span>
                                            <span className="font-semibold capitalize">{account.personalDetails.surname}</span>
                                      </div>
                                      <div className="text-sm font-light">{account.screenName} / 01/01/1001</div>
                                </div>
                                {/* Email */}
                                <div className="flex flex-col font-light pr-2.5 basis-[17%] flex-grow-0 flex-shrink-0">
                                    <div>{account.accountId}</div>
                                    <div className="text-sm font-light">{account.emailAddress}</div>
                                </div>
                                {/* DOB */}
                                <div className="font-light pr-2.5 basis-[12%] flex-grow-0 flex-shrink-0">
                                    {account.personalDetails.dateOfBirth}
                                </div>
                                {/* Address */}
                                <div className="flex flex-col pr-2.5 basis-[12%] flex-grow-0 flex-shrink-0">
                                    <div className="font-light">{account._embedded?.residentialAddress[0]?.addressLine2}</div>
                                    <div>
                                        <span className="font-semibold">{account._embedded?.residentialAddress[0]?.postCode}</span>
                                        <span className="font-light"> - {account._embedded?.residentialAddress[0]?.countryCode}</span>
                                    </div>
                                </div>
                                {/* Phone */}
                                <div className="pr-2.5 basis-[11%] flex-grow-0 flex-shrink-0">
                                    {account._embedded?.contactNumbers[0].mobile.number}
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
                <Pagination currentPage={1} pageSize={10} pagesCount={20}/>
            </div> }
        </>
    );
};

export default SearchResults;
