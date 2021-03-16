import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [result, setResult] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: term
                }
            });
            setResult(data.query.search);
        }
        if (term) {
            search();
        }
    }, [term]);

    const filteredResults = result.map(res => {
        return (
            <div className="item" key={res.pageid}>
                <div className="content">
                    <div className="header">
                        {res.title}
                    </div>
                </div>
                {res.snippet}
            </div>
        );
    });

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
            <div className="ui celled list">
                {filteredResults}
            </div>
        </div>
    );
};

export default Search;