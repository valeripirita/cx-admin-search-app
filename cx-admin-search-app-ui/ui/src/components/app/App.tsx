import React from 'react';
import SearchForm from '../searchForm/SearchForm';
import SearchOutput from '../searchOutput/SearchOutput';
import '../../../styles.css'

const App = () => {
    return (
        <main className="bg-neutral-100 flex flex-row h-full w-full">
            <section className="box-border w-[298px] shadow bg-stone-100 border-r border-r-neutral-300 px-4 h-full overflow-auto">
                <SearchForm />
            </section>
            <section className="flex-1 p-4">
                <SearchOutput />
            </section>
        </main>
    );
};

export default App;
