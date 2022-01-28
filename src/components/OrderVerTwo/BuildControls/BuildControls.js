import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import myStyle from './style';
import BuildControlVerTwo from './BuildControlVerTwo/BuildControlVerTwo';
import classes from './BuildControls.module.css';

// disk: 1,
//             tooppi: 1,
//             excel: 2,
//             weldingWork: 0,
//             cutOffPitchWork: 0

const pieces = [
    {label: 'سرسیلندر',type: 'cylinderhead'},
    {label: 'سیلندر',type: 'cylinder'},
    {label: 'دیسک',type: 'disk'},
    {label: 'توپی',type: 'tooppi'},
    {label: 'اکسل',type: 'excel'},
    {label: 'کار جوشکاری',type: 'weldingWork'},
    {label: 'پیچ بریده',type: 'cutOffPitchWork'}
]



const buildControls = (props) => {

    const style = myStyle();

    return (
        <div>
            <div className={classes.root}>
                {pieces.map(ctrl => (
                    <BuildControlVerTwo
                        key={ctrl.label}
                        label={ctrl.label}
                        type={ctrl.type}
                        added={() => props.orderablePieceAdded(ctrl.type)}
                        removed={() => props.orderablePieceRemoved(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}
                    />
                ))}
            </div>

            <div className={classes.orderNowButtonDiv}>
                <button
                    className={classes.button}
                    disabled={!props.orderable}
                    onClick={props.ordered}
                >ثبت سفارش</button>
            </div>
        </div>
    );
}

export default buildControls;