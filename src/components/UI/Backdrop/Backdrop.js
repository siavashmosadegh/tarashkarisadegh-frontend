import React from 'react';
import myStyle from './style';

const backdrop = (props) => {

    const style = myStyle();

    return (
        props.show ? <div className={style.root} onClick={props.clicked}></div> : null
    );
}

export default backdrop;