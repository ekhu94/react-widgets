import React from 'react';

const Dropdown = ({ options }) => {
    const renderedOptions = options.map(o => {
        return (
            <div key={o.value} className="item">
                {o.label}
            </div>
        );
    });
    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Color Selector</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">
                        Selected Color
                    </div>
                    <div className="menu visible transition">
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;