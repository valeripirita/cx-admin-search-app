import React, { ChangeEvent, SyntheticEvent, useCallback, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clear, set } from '../../store/slices/searchFormSlice';
import FormInput from '../formInput/FormInput';
import JurisdictionSelect from '../jurisdictionSelect/JurisdictionSelect';
import VentureSelect from '../ventureSelect/VentureSelect';
import {useFetchAccountVenturesQuery} from '../../store/apis/accountServiceApi'

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
            <fieldset className="mb-2 w-full">
                <JurisdictionSelect
                    model={formState.jurisdiction}
                    onChange={handleChange}
                    classNames="-mt-4.5"
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
            <fieldset className="mb-2 w-full">
                <hr className="border-t-neutral-300 mt-4.5" />
                <VentureSelect
                    classNames="-mt-4.5"
                    model={formState.ventures}
                    onChange={handleChange}
                />
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
