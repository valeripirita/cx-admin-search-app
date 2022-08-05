import React from 'react';
import { useAppSelector } from '../../store/hooks';
import SearchResults from '../searchResults/SearchResults';

const SearchOutput = () => {

    const form = useAppSelector(state => state.searchFormReducer);

    if (Object.keys(form).length === 0 || Object.values(form).every(item => !item)) {
        return <div>Please specify data for search</div>
    }

    return <SearchResults searchForm={form} />
};

export default SearchOutput;
