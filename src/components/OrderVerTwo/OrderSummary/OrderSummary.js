import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import {Button} from 'react-bootstrap';

class OrderSummary extends Component {

    componentWillUpdate () {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {

        const orderSummary = Object.keys( this.props.repairables )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {this.props.repairables[igKey]}
                    </li>
                );
            } );
        return (
            <Aux>
                <h3>سفارش شما</h3>
                <p>قطعات سفارشی شما به صورت زیر میباشد</p>
                <ul>
                    {orderSummary}
                </ul>
                <p>ادامه میدهید ؟</p>
                <Button variant="danger"  onClick={this.props.purchaseCancelled}>لغو</Button>
                <Button variant="success" onClick={this.props.purchaseContinued}>تایید</Button>
            </Aux>
        );
    }
}

export default OrderSummary;