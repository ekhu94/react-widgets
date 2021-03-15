import React, { useState } from 'react';

const Search = () => {
    const [input, setInput] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="search">Enter Search Term</label>
                    <input 
                        id="search" 
                        type="text" 
                        className="input"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;