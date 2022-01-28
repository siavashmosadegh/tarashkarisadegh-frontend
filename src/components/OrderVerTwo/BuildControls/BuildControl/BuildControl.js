import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => {

    return (
        <div className={classes.root}>

            <div className={classes.label}>{props.label}</div>

            <button 
                className={classes.more}
                onClick={props.added}>
                اضافه تر
            </button>

            <button 
                className={classes.less}
                onClick={props.removed}
                disabled={props.disabled}>
                کمتر
            </button>
        </div>
    );
}

export default buildControl;