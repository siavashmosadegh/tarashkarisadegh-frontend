import React from 'react';
import classes from './PanelOrder.module.css';

const PanelOrder = ( props ) => {
    const repairables = [];

    for ( let repairableName in props.repairables ) {
        repairables.push(
            {
                name: repairableName,
                amount: props.repairables[repairableName]
            }
        );
    }

    console.log(repairables);

    const repairableOutput = repairables.map(ig => {
        return <span 
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
                }}
            key={ig.name}>{ig.name} ({ig.amount})</span>;
    });

    return (
        <div className={classes.PanelOrder}>
            <p>repairables: {repairableOutput}</p>
        </div>
    );
};

export default PanelOrder;