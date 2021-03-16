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
        const timeoutId = setTimeout({
            if (term) {
                search();
            }
        }, 500);
    }, [term]);

    const filteredResults = result.map(res => {
        return (
            <div className="item" key={res.pageid}>
                <div className="right floated content">
                    <a
                        href={`https://en.wikipedia.org?curid=${res.pageid}`}
                        className="ui button"
                        target="_blank"
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {res.title}
                    </div>
                </div>
                <span dangerouslySetInnerHTML={{ __html: res.snippet }}></span>
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