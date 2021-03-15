import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end JS library.'
    },
    {
        title: 'Why use React?',
        content: 'React is a favored library among engineers.'
    },
    {
        title: 'How do you use React?',
        content: 'React is utilized through many components.'
    }
];

const App = () => {
    return (
        //! <Accordion items={items} />
        <Search />
    );
}

export default App;