import React, { ChangeEvent, SyntheticEvent, useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clear, set } from '../../store/slices/searchFormSlice';
import FormInput from '../formInput/FormInput';
import JurisdictionSelect from '../jurisdictionSelect/JurisdictionSelect';

// TODO:
// when form submit happens lock ui
// when form submit happens show loading
// button hover
// input hover

// error handling

const SearchForm = () => {

    const dispatch = useAppDispatch();

    const formData = useAppSelector(state => state.searchFormReducer);

    const [formState, setFormState] = useState(formData);

    const handleSubmit = useCallback((event: SyntheticEvent) => {
        event.preventDefault();
        dispatch(clear());
        dispatch(set(formState));
    }, [formState])

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormState({...formState, [event.target.name]: event.target.value})
    }

    return (
        <form data-test='search-form' className="text-sm" onSubmit={handleSubmit}>
            {/*TODO: check input types*/}
            <fieldset className="mb-4 w-full">
                <JurisdictionSelect
                    model={formState.jurisdiction}
                    onChange={handleChange}
                    classNames='-mt-3.5'
                />
            </fieldset>
            <fieldset className="mb-4 w-full">
                <hr className="border-t-neutral-300 mt-3.5" />
                <FormInput
                    name="accountId"
                    model={formState.accountId}
                    classNames="-mt-3.5"
                    title="Member ID"
                    onChange={handleChange}
                    disabled={true}
                />
                <FormInput
                    name="emailAddress"
                    model={formState.emailAddress}
                    classNames="-mt-3.5"
                    title="Email"
                    onChange={handleChange}
                    disabled={true}
                />
                <FormInput
                    name="postCode"
                    model={formState.postCode}
                    classNames="-mt-3.5"
                    title="Postcode"
                    onChange={handleChange}
                    disabled={true}
                />
                <FormInput
                    name="phone"
                    model={formState.phone}
                    classNames="-mt-3.5"
                    title="Phone"
                    onChange={handleChange}
                    disabled={true}
                />
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
                <FormInput
                    name="screenName"
                    model={formState.screenName}
                    classNames="-mt-3.5"
                    title="Screen name"
                    dataTestAttribute='screen-name-input'
                    onChange={handleChange}
                />
                <FormInput
                    name="surname"
                    model={formState.surname}
                    classNames="-mt-3.5"
                    title="Last name"
                    onChange={handleChange}
                    disabled={true}
                />
                <FormInput
                    name="firstName"
                    model={formState.firstName}
                    classNames="-mt-3.5"
                    title="First name"
                    onChange={handleChange}
                    disabled={true}
                />
                <FormInput
                    name="dateOfBirth"
                    model={formState.dateOfBirth}
                    classNames="-mt-3.5"
                    title="DOB"
                    onChange={handleChange}
                    disabled={true}
                />
            </fieldset>
            <button className="uppercase bg-primary-500 text-white w-full p-3.5 rounded-lg" type='submit'>Search</button>
        </form>
    );
};

export default SearchForm;
