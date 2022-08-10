import React  from 'react';
import { useFetchAllAccountsQuery } from '../../store/apis/accountServiceApi';
import { tableHeadCells } from '../searchOutput/helpers';
import { BarLoader } from 'react-spinners';
import AccountStatus from '../accountStatus/AccountStatus';
import cx from 'classnames';

type SearchResultsProps = {
    searchForm: any;
}

// TODO:
// ask when should pagination appear

const SearchResults = ({ searchForm }: SearchResultsProps) => {

    const { data: accounts, isFetching } = useFetchAllAccountsQuery(searchForm);

    if (accounts?.totalResults === 0) {
        // TODO: move to separate component
        return <div>Nothing found</div>
    }

    return (
        <>
            { isFetching ? <BarLoader /> :
            <table className="w-full self-start border-separate border-spacing-y-[10px]">
                <thead className="bg-primary-300">
                    <tr className="text-left text-sm">
                        {tableHeadCells.map((cell, index) => {
                            return (
                                <th key={index} className="px-2.5 py-3">{cell}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody data-test='search-result-table' className="bg-white">
                {accounts?._embedded.accounts.map((account, key) => {
                    return (
                        <tr key={key} className='shadow-md'>
                            {/*FIXME: check how to refactor this to make less repetitive*/}
                            <td valign="top" className={cx(
                                'px-2.5 py-3 rounded-l-md',
                                !account.open && 'border-4 border-r-0 border-error-100'
                            )}>
                                <div className="flex flex-col">
                                    <div className="flex gap-1">
                                        <span className="text-neutral-500 font-light capitalize">{account.personalDetails.title}</span>
                                        <span className="font-semibold capitalize">{account.personalDetails.firstName}</span>
                                        <span className="font-semibold capitalize">{account.personalDetails.surname}</span>
                                    </div>
                                    <div className="text-sm font-light">{account.screenName} / 01/01/1001</div>
                                </div>
                            </td>
                            <td valign="top" className={cx(
                                'px-2.5 py-3',
                                !account.open && 'border-4 border-l-0 border-r-0 border-error-100'
                            )}>
                                <div className="flex flex-col font-light">
                                    <div>{account.accountId}</div>
                                    <div className="text-sm font-light">{account.emailAddress}</div>
                                </div>
                            </td>
                            <td valign="top"className={cx(
                                'px-2.5 py-3',
                                !account.open && 'border-4 border-l-0 border-r-0 border-error-100'
                            )}>{account.personalDetails.dateOfBirth}</td>
                            <td valign="top" className={cx(
                                'px-2.5 py-3',
                                !account.open && 'border-4 border-l-0 border-r-0 border-error-100'
                            )}>
                                <div className="d-flex flex-col">
                                    <div className="font-light">{account._embedded?.residentialAddress[0]?.addressLine2}</div>
                                    <div><span className="font-semibold">{account._embedded?.residentialAddress[0]?.postCode}</span><span className="font-light"> - {account._embedded?.residentialAddress[0]?.countryCode}</span></div>
                                </div>
                            </td>
                            <td valign="top" className={cx(
                                'px-2.5 py-3',
                                !account.open && 'border-4 border-l-0 border-r-0 border-error-100'
                            )}>{account._embedded?.contactNumbers[0].mobile.number}</td>
                            <td valign="top" className={cx(
                                'px-2.5 py-3',
                                !account.open && 'border-4 border-l-0 border-r-0 border-error-100'
                            )}>
                                <div className="flex gap-1 items-center pt-0.5">
                                    <div className={`venture venture-${account.venture}`}></div>
                                    <AccountStatus status={account.open} />
                                </div>
                            </td>
                            <td
                                valign="top"
                                className={cx(
                                    'px-2.5 py-3 rounded-r-md relative overflow-hidden box-border',
                                    'after:block after:absolute after:content("") after:h-full after:w-[10px] after:top-0 after:right-0',
                                    account.open ? 'after:bg-success-500' : 'after:bg-red-500',
                                    !account.open && 'border-4 border-l-0 border-error-100'
                                )}>TODO</td>
                        </tr>
                    )
                })}
                </tbody>
            </table> }
        </>
    );
};

export default SearchResults;
