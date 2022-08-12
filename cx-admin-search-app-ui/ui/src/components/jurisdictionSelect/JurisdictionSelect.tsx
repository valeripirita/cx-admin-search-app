import React, { ChangeEvent } from 'react';

import FormSelect from '../formSelect/FormSelect';

export type JurisdictionSelectProps = {
    model: string | undefined;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    classNames?: string;
}

const jurisdictions = [
    { value: 'EU', title: 'Europe' },
    { value: 'NJ', title: 'New Jersey' },
    { value: 'NY', title: 'New York' },
    { value: 'AZ', title: 'Arizona' },
    { value: 'ON', title: 'Ontario' }
]

const JurisdictionSelect = ({ model, onChange, classNames }: JurisdictionSelectProps) => {
    return (
        <FormSelect
            classNames={ classNames }
            name='jurisdiction'
            options={ jurisdictions }
            model={ model }
            onChange={ onChange }
            title='Jurisdiction'
        />
    );
};

export default JurisdictionSelect;
