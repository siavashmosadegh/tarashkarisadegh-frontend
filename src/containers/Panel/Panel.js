import React , { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PanelOrder from '../../components/PanelOrder/PanelOrder';
import Spinner from '../../components/UI/Spinner/Spinner';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

class Panel extends Component {

    state = {
        orders: null
    }

    componentWillMount () {
        axios.get('https://tarashkari-test-one-default-rtdb.firebaseio.com/orders.json?auth='+this.props.token)
            .then(res => {
                // this.setState({orders: response.data});
                // console.log(this.state.orders);
                const fetchedOrders = [];
                for ( let key in res.data ) {
                    fetchedOrders.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                this.setState({orders: fetchedOrders})
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    render () {

        let mapOrders = <Spinner />;

        let ordersList = [];

        if (this.state.orders != null) {
            console.log(this.state.orders);
            for (let id in this.state.orders) {
                ordersList.push(this.state.orders[id])
            }
            console.log(ordersList[0])
            console.log(ordersList[1])
            mapOrders = ordersList.map( order => (
                <PanelOrder 
                    key={order.id}
                    repairables={order} 
                />
            ))
        }

        // if (this.state.orders != null) {
        //     mapOrders = Object.keys(this.state.orders).map( (order, index) => (
        //         <PanelOrder 
        //             key={order}
        //             //repairables={order.valueOf}
        //         />
        //         console.log(order.valueOf)
        //     ))
        //     console.log(this.state.orders.);
        // }

        return (
            <div>
                <NavigationBar />
                {mapOrders}
            </div>
        );
        
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Panel);