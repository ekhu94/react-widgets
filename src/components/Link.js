import React from 'react';

const Link = ({ href, className, children }) => {
    const onClick = e => {
        e.preventDefault();
    };
    return (
        <a className={className} href={href} onClick={onClick}>
            {children}
        </a>
    );
};

export default Link;