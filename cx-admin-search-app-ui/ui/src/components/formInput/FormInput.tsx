import React from 'react';

type FormInputProps = {
    name: string;
    title?: string;
    classNames?: string;
}

const FormInput = ({ name, classNames, title }: FormInputProps) => {
    return (
        <label className={ classNames }>
            <p className="inline-block text-stone-600 bg-stone-100 p-1 translate-x-3.5 translate-y-3.5">{ title }</p>
            <input
                className="bg-stone-100 block py-2.5 px-3 border border-neutral-400 rounded-lg w-full"
                name={ name } />
        </label>
    );
};

export default FormInput;
