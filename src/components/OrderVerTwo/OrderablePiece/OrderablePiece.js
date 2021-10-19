import React from 'react';
import myStyle from './style';

const orderablePiece = (props) => {

    const style = myStyle();

    return (
        <div className={style.root}>
           <p>{props.nameOfThePiece}</p>
        </div>
    );
}

export default orderablePiece;