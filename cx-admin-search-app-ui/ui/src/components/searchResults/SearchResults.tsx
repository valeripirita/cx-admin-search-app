import React  from 'react';
import { useFetchAllAccountsQuery } from '../../store/apis/accountServiceApi';
import { tableHeadCells } from '../searchOutput/helpers';
import { BarLoader } from 'react-spinners';

type SearchResultsProps = {
    searchForm: any;
}

// TODO:
// ask when should pagination appear

const SearchResults = ({ searchForm }: SearchResultsProps) => {

    const { data: accounts, isLoading } = useFetchAllAccountsQuery(searchForm);

    return (
        <>
            { isLoading ? <BarLoader /> :
            <table className="w-full border border-neutral-300 shadow self-start">
                <thead>
                <tr className="bg-neutral-200 text-left">
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
                        <tr key={key}>
                            {/*FIXME: check how to refactor this to make less repetitive*/}
                            <td className="px-2.5 py-3">
                                <div className="flex flex-col">
                                    <div>{account.accountId}</div>
                                    <div className="flex gap-0.5">
                                        <span>{account.personalDetails.title}</span>
                                        <span className="font-semibold">{account.personalDetails.firstName}</span>
                                        <span className="font-semibold">{account.personalDetails.surname}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="px-2.5 py-3">{account.venture}</td>
                            <td className="px-2.5 py-3">{account.emailAddress}</td>
                            <td className="px-2.5 py-3">{account.personalDetails.dateOfBirth}</td>
                            <td className="px-2.5 py-3">{account._embedded?.residentialAddress[0]?.postCode}</td>
                            <td className="px-2.5 py-3">{account._embedded?.contactNumbers[0].mobile.number}</td>
                            <td className="px-2.5 py-3">TODO</td>
                        </tr>
                    )
                })}
                </tbody>
            </table> }
        </>
    );
};

export default SearchResults;
