import React from 'react';
//import classes from './BuildControl.css';
import myStyle from './style';

const buildControl = (props) => {

    const style = myStyle();

    return (
        <div className={style.root}>

            <div className={style.label}>{props.label}</div>

            <button 
                className={style.more}
                onClick={props.added}>
                اضافه تر
            </button>

            <button 
                className={style.less}
                onClick={props.removed}
                disabled={props.disabled}>
                کمتر
            </button>
        </div>
    );
}

export default buildControl;