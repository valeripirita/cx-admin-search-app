import React, { useState } from 'react';
import SearchForm from '../searchForm/SearchForm';
import SearchOutput from '../searchOutput/SearchOutput';
import '../../../styles.css'
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';

const store = setupStore();

const App = () => {

    const [showResult, setShowResult] = useState<boolean>(false);

    return (
        <Provider store={store}>
            <main className="bg-neutral-100 flex flex-row h-full w-full">
                <section className="box-border w-[298px] shadow bg-stone-100 border-r border-r-neutral-300 px-4 h-full overflow-auto">
                    <SearchForm onSubmit={() => setShowResult(true)} />
                </section>
                <section className="flex-1 p-4">
                    { showResult && <SearchOutput /> }
                </section>
            </main>
        </Provider>
    );
};

export default App;
