import React from 'react';
import SearchForm from '../searchForm/SearchForm';
import SearchOutput from '../searchOutput/SearchOutput';

const App = () => {
    return (
        <main className={'bg-white flex flex-row border-t-stone-400 border-t'}>
            <section className={'bg-stone-100 basis-80 border-r border-r-neutral-300 p-5'}>
                <SearchForm />
            </section>
            <section className={'flex-1 p-4'}>
                <SearchOutput />
            </section>
        </main>
    );
};

export default App;
