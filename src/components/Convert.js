import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ text, lang }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [text])

    useEffect(() => {
        const onTranslateChange = async () => {
            const res = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: lang.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(res.data.data.translations[0].translatedText);
        }
        onTranslateChange();
    }, [debouncedText, lang])

    return (
        <div className="ui header">{translated}</div>
    );
};

export default Convert;