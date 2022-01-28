import React from 'react';
import classes from './MyOrdersCell.module.css';

const MyOrdersCell = (props) => {

    var dictRepairables = { 
        'cutOffPitchWork' : 'پیچ بریده', 
        'cylinder' : 'سیلندر', 
        'cylinderhead' : 'سرسیلندر',
        'disk' : 'دیسک',
        'excel' : 'اکسل',
        'tooppi' : 'توپی',
        'weldingWork' : 'کار جوشکاری'
    };

    const orderSummary = Object.keys( props.repairables ).map( igKey => {
        return (
            <li key={igKey}>
                <span style={{ fontSize: "30px" }}>{dictRepairables[igKey]} : {props.repairables[igKey]}</span> 
            </li>
        );
    } );

    return (
        <div className={classes.MyOrdersCell}>
            <div style={{display: "flex"}}>
                <div className={classes.summary}>
                    {orderSummary}
                </div>
            </div>

            <div>
                <div className={classes.clockRow}>
                    {props.time.hour} : {props.time.minute} : {props.time.second}
                </div>

                <div className={classes.clockRow}>
                    {props.time.year} , {props.time.month} , {props.time.day}
                </div>
            </div>
        </div>
    );
}

export default MyOrdersCell;