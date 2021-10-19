import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import myStyle from './style';
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
        <div className={style.root}>
            {pieces.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.orderablePieceAdded(ctrl.type)}
                    removed={() => props.orderablePieceRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}

            <div className={style.orderNowButtonDiv}>
                <button
                    className={style.button}
                    disabled={!props.orderable}
                    onClick={props.ordered}
                >ORDER NOW!</button>
            </div>
        </div>
    );
}

export default buildControls;