import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import {Button} from 'react-bootstrap';
import classes from './OrderSummary.module.css';

class OrderSummary extends Component {

    componentWillUpdate () {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {

        let dictionary = {
            "cutOffPitchWork" : "پیچ بریده",
            "cylinder" : "سیلندر",
            "cylinderhead" : "سرسیلندر",
            "disk" : "دیسک",
            "excel" : "اکسل",
            "tooppi" : "توپی",
            "weldingWork" : "کار جوشکاری"
        }

        console.log(this.props.repairables);

        const orderSummary = Object.keys( this.props.repairables )
            .map( igKey => {
                return (
                    // <li key={igKey}>
                        <div className={classes.listitem}>
                            {dictionary[igKey]} : {this.props.repairables[igKey]}
                        </div>
                    // </li>
                );
            } );
        return (
            <Aux>
                <h3 className={classes.header}>سفارش شما</h3>
                <p className={classes.paragraph}>: قطعات سفارشی شما به صورت زیر میباشد</p>
                <div className={classes.list}>
                    {orderSummary}
                </div>
                <p className={classes.secondparagraph}>ادامه میدهید ؟</p>
                <div className={classes.buttonsdiv}>
                    <Button variant="danger"  onClick={this.props.purchaseCancelled} className={classes.cancelbutton}>لغو</Button>
                    <Button variant="success" onClick={this.props.purchaseContinued} className={classes.confirmbutton}>تایید</Button>
                </div>
            </Aux>
        );
    }
}

export default OrderSummary;