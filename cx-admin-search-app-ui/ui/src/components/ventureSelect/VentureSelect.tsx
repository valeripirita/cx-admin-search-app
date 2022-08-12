import React, { ChangeEvent } from 'react';

import FormSelect from '../formSelect/FormSelect';
import { useFetchAccountVenturesQuery } from '../../store/apis/accountServiceApi';

export type VentureSelectProps = {
    model: string | undefined;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    classNames?: string;
}

const VentureSelect = ({classNames, model, onChange}: VentureSelectProps) => {

    const {data} = useFetchAccountVenturesQuery(892);

    return (
        <FormSelect
            classNames={ classNames }
            name='ventures'
            options={ data?.ventures.map(v => ({value: v.id, title: v.name})) || [] }
            model={ model }
            onChange={ onChange }
            title='Venture'
        />
    );
};

export default VentureSelect;
