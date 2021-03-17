import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = e =>{
            if (ref.current && ref.current.contains(e.target)) {
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }
    }, []);

    const renderedOptions = options.map(o => {
        if (o.value === selected.value) return null;
        return (
            <div 
                key={o.value} 
                className="item"
                onClick={() => onSelectedChange(o)}
            >
                {o.label}
            </div>
        );
    });
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Color Selector</label>
                <div 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                    onClick={() => setOpen(!open)}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">
                        {selected.label}
                    </div>
                    <div 
                        className={`menu ${open ? 'visible transition' : ''}`}
                    >
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;