import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ text, lang }) => {
    const [translated, setTranslated] = useState('');

    useEffect(() => {
        const onTranslateChange = async () => {
            const res = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: lang.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(res.data.data.translations[0].translatedText);
        }
        onTranslateChange();
    }, [text, lang])

    return (
        <div>{translated}</div>
    );
};

export default Convert;