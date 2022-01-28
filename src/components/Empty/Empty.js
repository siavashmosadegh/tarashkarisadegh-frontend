import React from 'react';
import classes from './Empty.module.css';

const Empty = (props) => {
    return (
        <div className={classes.root}>
            <p className={classes.paragraph}>{props.paragraph}</p>
        </div>
    );
}

export default Empty;