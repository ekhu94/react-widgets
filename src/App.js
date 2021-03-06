import React, { useState } from 'react';
import Route from './components/Route';
import Header from './components/Header';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

const options = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        //! <Accordion items={items} />
        //* <Search />
        //! <div>
        //     <button 
        //         onClick={() => setShowDropdown(!showDropdown)}
        //         className="ui button"
        //     >
        //         Toggle Dropdown
        //     </button>
        //     { showDropdown ?
        //         <Dropdown 
        //             options={options}
        //             selected={selected}
        //             onSelectedChange={setSelected}
        //         /> : null
        //     }
        // </div>
        <div>
            <Header />
            <Route path={'/'} >
                <Accordion items={items} />
            </Route>
            <Route path={'/search'} >
                <Search />
            </Route>
            <Route path='/dropdown' >
                <Dropdown
                    label="Color Selector"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path='/translate' >
                <Translate />
            </Route>
        </div>
    );
}

export default App;