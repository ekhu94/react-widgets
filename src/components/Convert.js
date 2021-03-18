import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ text, lang }) => {
    useEffect(() => {
        const onTranslateChange = async () => {
            const res = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: lang.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
        }
        
    }, [text, lang])

    return (
        <div></div>
    );
};

export default Convert;