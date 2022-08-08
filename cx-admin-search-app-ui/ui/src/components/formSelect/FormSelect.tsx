import React, { ChangeEvent } from 'react';
import cx from 'classnames';

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
        <label className={ cx(classNames, disabled ? 'cursor-not-allowed' : 'cursor-pointer') }>
            { title &&
                <p className={
                    cx(
                        'inline-block bg-stone-100 p-1 translate-x-3.5 translate-y-3.5',
                        disabled ? 'text-neutral-100' : 'text-stone-600'
                    )
                }>
                    { title }
                </p> }
            {/*FIXME: select arrow is too close to edge*/}
            <select
                name={ name }
                className={
                    cx(
                        'bg-stone-100 block py-2.5 px-3 border border-neutral-400 rounded-lg w-full',
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
        </label>
    );
};

export default FormSelect;
