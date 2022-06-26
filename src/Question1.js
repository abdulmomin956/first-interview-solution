import React from 'react';

const Question1 = () => {
    const elements = ['one', 'two', 'three'];

    return (
        <div>
            {elements.map((value) => (<span key={value}>{value}</span>))}
        </div>
    )
};

export default Question1;