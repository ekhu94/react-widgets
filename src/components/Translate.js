import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Japanese',
        value: 'jp'
    }
];

const Translate = () => {
    const [lang, setLang] = useState(options[0]);

    return (
        <div>
            <Dropdown 
                options={options}
                selected={lang}
                onSelectedChange={setLang}
            />
        </div>
    );
};

export default Translate;