import React, { ChangeEvent } from 'react';

import cx from 'classnames';

import { ChevronDown } from '../icons/Icons';

export type FormSelectProps = {
    name: string;
    model: string | number | undefined;
    options: { value: string | number | undefined, title: string }[];
    title?: string;
    classNames?: string;
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
}

const FormSelect = ({classNames, disabled, model, name, onChange, options, title}: FormSelectProps) => {
    return (
        <label className={ cx(classNames, 'relative', disabled ? 'cursor-not-allowed' : 'cursor-pointer') }>
            { title &&
                <p className={
                    cx(
                        'inline-block bg-white p-1 translate-x-3.5 translate-y-3.5',
                        disabled ? 'text-neutral-100' : 'text-stone-600'
                    )
                }>
                    { title }
                </p> }
            <select
                name={ name }
                className={
                    cx(
                        'bg-white block py-2.5 px-3 border border-neutral-400 rounded-lg w-full appearance-none',
                        disabled ? 'cursor-not-allowed border-neutral-100' : 'cursor-pointer'
                    )
                }
                onChange={ onChange }
                defaultValue={ model }
                disabled={ disabled }
            >
                { options.map(option => (
                    <option key={option.value} value={option.value}>{option.title}</option>
                )) }
            </select>
            <ChevronDown className="absolute right-2 top-1/2 translate-y-0.5 pointer-events-none" />
        </label>
    );
};

export default FormSelect;
