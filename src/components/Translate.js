import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

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
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="text">Enter Text</label>
                    <input
                        id="text"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown 
                options={options}
                selected={lang}
                onSelectedChange={setLang}
                label="Select a Language"
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} lang={lang} />
        </div>
    );
};

export default Translate;