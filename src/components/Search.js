import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        const search = async () => {
            return await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: term
                }
            })
        }
        const res = search();
    }, [term]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="search">Enter Search Term</label>
                    <input 
                        id="search" 
                        type="text" 
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;