import React from 'react';

const BoughtPaints = (props) => {
   
    const {title} = props.boughtPaint

    return (
        <div>
            
            <h4>{title}</h4>
        </div>
    );
};

export default BoughtPaints;