import React, { ChangeEvent } from 'react';
import cx from 'classnames';

export type FormInputProps = {
    name: string;
    model: string | number | undefined;
    placeholder?: string;
    title?: string;
    classNames?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    dataTestAttribute?: string;
}

const FormInput = ({ name, model, placeholder, title, classNames, onChange, disabled, dataTestAttribute }: FormInputProps) => {
    return (
        <label className={ cx(classNames, disabled ? 'cursor-not-allowed' : 'cursor-pointer') }>
            { title &&
                <p className={
                    cx(
                        'inline-block bg-white p-1 translate-x-3.5 translate-y-3.5',
                        disabled ? 'text-neutral-100' : 'text-stone-600'
                    )
                }>
                    { title }
                </p> }
            <input
                className={
                    cx(
                'bg-white block py-2.5 px-3 border border-neutral-400 rounded-lg w-full',
                      disabled ? 'cursor-not-allowed border-neutral-100' : 'cursor-pointer'
                    )
                }
                name={ name }
                placeholder={ placeholder }
                defaultValue={ model }
                onChange={ onChange }
                disabled={ disabled }
                data-test={ dataTestAttribute }
            />
        </label>
    );
};

export default FormInput;
