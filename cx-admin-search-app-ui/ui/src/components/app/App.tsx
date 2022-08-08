import React from 'react';
import SearchForm from '../searchForm/SearchForm';
import SearchOutput from '../searchOutput/SearchOutput';
import '../../../styles.css'
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';

const store = setupStore();

const App = () => {

    return (
        <Provider store={store}>
            <main className="bg-neutral-100 flex flex-row h-full w-full">
                <section className="box-border w-[298px] shadow bg-stone-100 border-r border-r-neutral-300 px-4 h-full overflow-auto">
                    <SearchForm />
                </section>
                <section className="flex-1 p-4 flex justify-center items-center">
                    <SearchOutput />
                </section>
            </main>
        </Provider>
    );
};

export default App;
