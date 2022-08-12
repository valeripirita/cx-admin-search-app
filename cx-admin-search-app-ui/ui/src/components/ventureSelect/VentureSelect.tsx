import React, { ChangeEvent } from 'react';

import FormSelect from '../formSelect/FormSelect';

export type VentureSelectProps = {
    model: string | undefined;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    classNames?: string;
}

const ventures = [
    { value: 'JPJ', title: 'Jackpotjoy' },
    { value: 'BTM', title: 'Botemania' },
    { value: 'BBNJ', title: 'Bally Bet NJ' },
    { value: 'BBNY', title: 'Bally Bet NY' }
]

const VentureSelect = ({classNames, model, onChange}: VentureSelectProps) => {

    return (
        <FormSelect
            classNames={ classNames }
            name='ventures'
            options={ ventures }
            model={ model }
            onChange={ onChange }
            title='Venture'
        />
    );
};

export default VentureSelect;
