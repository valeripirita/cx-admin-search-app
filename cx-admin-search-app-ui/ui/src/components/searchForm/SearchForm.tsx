import React from 'react';

const App = () => {
    return (
        <main className={'bg-white flex flex-row border-t-stone-400 border-t'}>
            <section className={'bg-stone-100 basis-80 border-r border-t-stone-400 p-5'}>
                <h1>Form</h1>
            </section>
            <section className={'flex-1 p-4'}>
                <h1>Table</h1>
            </section>
        </main>
    );
};

export default App;
