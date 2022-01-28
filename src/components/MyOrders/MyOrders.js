import React, {Component} from 'react';
import classes from './MyOrders.module.css';
import axios from 'axios';
import Spinner from '../UI/Spinner/Spinner';
import MyOrdersCell from './MyOrdersCell/MyOrdersCell';
import AfterAuthNavBar from '../AfterAuthNavBar/AfterAuthNavBar';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Empty from '../Empty/Empty';
import Line from '../Line/Line';

class MyOrders extends Component {

    state = {
        orders: null
    }

    componentDidMount () {
        // axios.get('https://tarashkari-test-one-default-rtdb.firebaseio.com/OrdersTwo.json?auth='+localStorage.getItem("token")+'&orderBy="userId"&equalTo="'+localStorage.getItem('userId')+ '"')
        axios.get('http://162.55.9.246/api/v1/customer/orders?auth='+localStorage.getItem("token")+'&orderBy="userId"&equalTo="'+localStorage.getItem('userId')+ '"')
            .then(res => {
                console.log(this.props.token);
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push( {
                        ...res.data[key],
                        id: key
                    });
                }
                console.log(fetchedOrders);
                this.setState({orders: fetchedOrders})
            })
            .catch(error => {
                console.log(error);
                console.log(this.props.token);
            });
    }
    
    render () {

        let mapOrders = <Spinner />

        let ordersList = [];

        let finalDiv;

        if (this.state.orders != null) {
            // console.log(this.state.orders);
            for (let id in this.state.orders) {
                ordersList.push(this.state.orders[id])
            }
            // console.log(ordersList[0].repairables);
            // console.log(ordersList[0].contactdata);
            // console.log(ordersList[0].userId);
            // console.log(ordersList[1]);
            // console.log(ordersList[2]);

            if (ordersList.length != 0) {
                mapOrders = ordersList.map( order => (
                        <MyOrdersCell
                            key={order.id}
                            repairables={order.repairables} 
                            time={order.time}
                        />
                ));
                finalDiv = (
                    <div className={classes.MyOrders}>
                        {mapOrders}
                    </div>
                )
            } else {
                mapOrders = <Empty paragraph="هیچ سفارشی ثبت نکرده اید ..." />;

                finalDiv = (
                    <div className={classes.empty}>
                        {mapOrders}
                    </div>
                );
            }

        
        }

        console.log(this.state.orders);

        return (
            <div>
                <AfterAuthNavBar />
                <Line />
                {finalDiv}
                <Line />
            </div>
        );
    }
}

export default MyOrders;