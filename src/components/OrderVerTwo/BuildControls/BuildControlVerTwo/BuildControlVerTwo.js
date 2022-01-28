import React from 'react';
import classes from './BuildControlVerTwo.module.css';

const BuildControlVerTwo = (props) => {
    return (
        <div className={classes.root}>
            <div className={classes.outerimagediv}>
                <div className={classes.imagediv}>
                    {/* <img src="/image/cylinder.png" alt="aks" className={classes.image} /> */}
                    <img src={"/image/"+props.type+".png"} alt="aks" className={classes.image} />
                </div>
            </div>

            <div className={classes.headerdiv}>
                <h1 className={classes.header}>{props.label}</h1>
            </div>

            <div>
            
            <div className={classes.moreandlessdiv}>
                <button 
                    className={classes.more}
                    onClick={props.added}>
                    +
                </button>

                <button 
                    className={classes.less}
                    onClick={props.removed}
                    disabled={props.disabled}>
                    -
                </button>
            </div>
            </div>
        </div>
    );
}

export default BuildControlVerTwo;