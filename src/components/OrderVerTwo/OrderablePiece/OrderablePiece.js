import React from 'react';
import myStyle from './style';

const orderablePiece = (props) => {

    const style = myStyle();

    let dictionary = {  "cutOffPitchWork" : "پیچ بریده", 
                        "cylinder" : "سیلندر",
                        "cylinderhead" : "سرسیلندر",
                        "disk" : "دیسک",
                        "excel" : "اکسل",
                        "tooppi" : "توپی",
                        "weldingWork" : "کار جوشکاری"
    };

    return (
        <div className={style.root}>
           <p>{dictionary[props.nameOfThePiece]}</p>
        </div>
    );
}

export default orderablePiece;