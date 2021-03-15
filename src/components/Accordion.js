import React from 'react';

const Accordion = ({ items }) => {

    const onTitleClick = idx => {
        console.log('title clicked', idx);
    };

    const renderedItems = items.map((item, i) => {
        return (
            <React.Fragment key={item.title}>
                <div className="title active" onClick={() => onTitleClick(i)} >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion">{renderedItems}</div>
    );
};

export default Accordion;