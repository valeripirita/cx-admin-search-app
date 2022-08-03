import React from 'react';

// TODO:
// when form submit happens lock ui
// when form submit happens show loading
// button hover
// input hover

const SearchForm = () => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        alert('You have submitted the form.')
    }

    return (
        <form className="text-sm" onSubmit={handleSubmit}>
            {/*TODO: check input types*/}
            <fieldset className="mb-4 w-full">
                <label className="-mt-3.5 cursor-pointer">
                    <p className="inline-block text-stone-600 bg-stone-100 p-1 translate-x-3.5 translate-y-3.5">Jurisdiction</p>
                    {/*FIXME: select arrow is too close to edge*/}
                    <select name='jurisdiction' className="bg-stone-100 block py-2.5 px-3 border border-neutral-400 rounded-lg w-full">
                        {/*FIXME: get jurisdiction names from somewhere or at least move them to a list*/}
                        <option value='EU'>Europe</option>
                        <option value='NJ'>New Jersey</option>
                        <option value='NY'>New York</option>
                        <option value='AZ'>Arizona</option>
                        <option value='ON'>Ontario</option>
                    </select>
                </label>
            </fieldset>
            <fieldset className="mb-4 w-full">
                <hr className="border-t-neutral-300 mt-3.5" />
                <label className="-mt-3.5 cursor-pointer">
                    <p className="inline-block text-stone-600 bg-stone-100 p-1 translate-x-3.5 translate-y-3.5">Member ID</p>
                    <input className="bg-stone-100 block py-2.5 px-3 border border-neutral-400 rounded-lg w-full" name='memberId' />
                </label>
                <label className="-mt-3.5 cursor-pointer">
                    <p className="inline-block text-stone-600 bg-stone-100 p-1 translate-x-3.5 translate-y-3.5">Email</p>
                    <input className="bg-stone-100 block py-2.5 px-3 border border-neutral-400 rounded-lg w-full" name='email' />
                </label>
                <label className="-mt-3.5 cursor-pointer">
                    <p className="inline-block text-stone-600 bg-stone-100 p-1 translate-x-3.5 translate-y-3.5">Postcode</p>
                    <input className="bg-stone-100 block py-2.5 px-3 border border-neutral-400 rounded-lg w-full" name='postcode' />
                </label>
                <label className="-mt-3.5 cursor-pointer">
                    <p className="inline-block text-stone-600 bg-stone-100 p-1 translate-x-3.5 translate-y-3.5">Phone</p>
                    <input className="bg-stone-100 block py-2.5 px-3 border border-neutral-400 rounded-lg w-full" name='phone' />
                </label>
            </fieldset>
            <fieldset className="mb-4 w-full">
                <hr className="border-t-neutral-300 mt-3.5" />
                <label className="-mt-3.5 cursor-pointer">
                    <p className="inline-block text-stone-600 bg-stone-100 p-1 translate-x-3.5 translate-y-3.5">Venture</p>
                    {/*FIXME: select arrow is too close to edge*/}
                    <select name='venture' className="bg-stone-100 block py-2.5 px-3 border border-neutral-400 rounded-lg w-full">
                        {/*FIXME: get jurisdiction names from somewhere or at least move them to a list*/}
                        <option value='1'>Venture 1</option>
                        <option value='2'>Venture 2</option>
                        <option value='3'>Venture 3</option>
                        <option value='4'>Venture 4</option>
                        <option value='5'>Venture 5</option>
                    </select>
                </label>
            </fieldset>
            <fieldset className="mb-4">
                <hr className="border-t-neutral-300 mt-3.5" />
                <label className="-mt-3.5 cursor-pointer">
                    <p className="inline-block text-stone-600 bg-stone-100 p-1 translate-x-3.5 translate-y-3.5">Screen name</p>
                    <input className="bg-stone-100 block py-2.5 px-3 border border-neutral-400 rounded-lg" name='screenName' />
                </label>
                <label className="-mt-3.5 cursor-pointer">
                    <p className="inline-block text-stone-600 bg-stone-100 p-1 translate-x-3.5 translate-y-3.5">Last name</p>
                    <input className="bg-stone-100 block py-2.5 px-3 border border-neutral-400 rounded-lg" name='lastName' />
                </label>
                <label className="-mt-3.5 cursor-pointer">
                    <p className="inline-block text-stone-600 bg-stone-100 p-1 translate-x-3.5 translate-y-3.5">First name</p>
                    <input className="bg-stone-100 block py-2.5 px-3 border border-neutral-400 rounded-lg" name='firstName' />
                </label>
                <label className="-mt-3.5 cursor-pointer">
                    <p className="inline-block text-stone-600 bg-stone-100 p-1 translate-x-3.5 translate-y-3.5">DOB</p>
                    <input className="bg-stone-100 block py-2.5 px-3 border border-neutral-400 rounded-lg" name='dateOfBirth' />
                </label>
            </fieldset>
            <button className="uppercase bg-primary-500 text-white w-full p-3.5 rounded-lg" type='submit'>Search</button>
        </form>
    );
};

export default SearchForm;
