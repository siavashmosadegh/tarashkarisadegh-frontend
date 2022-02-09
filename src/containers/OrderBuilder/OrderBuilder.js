import React , { Component } from 'react';
import OrderVerTwo from '../../components/OrderVerTwo/OrderVerTwo';
import BuildControls from '../../components/OrderVerTwo/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
//import myStyle from './style';
import OrderSummary from '../../components/OrderVerTwo/OrderSummary/OrderSummary';
//import axios from '../../axios-orders';
import axios from 'axios';
import Aux from '../../hoc/Aux/Aux';
import {connect} from 'react-redux';
//import NavigationBar from '../../components/NavigationBar/NavigationBar';
import AfterAuthNavBar from '../../components/AfterAuthNavBar/AfterAuthNavBar';
import * as actions from '../../store/actions/index';
import Footer from '../../components/Footer/Footer';
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

class OrderBuilder extends Component {

    // state = {
    //     ingredients: {
    //         salad: 0,
    //         bacon: 0,
    //         cheese: 0,
    //         meat: 0
    //     },
    //     totalPrice: 4,
    //     purchasable: false,
    //     purchasing: false
    // }

    state = {
        repairables: {
            cylinderhead: 0,
            cylinder: 0,
            disk: 0,
            tooppi: 0,
            excel: 0,
            weldingWork: 0,
            cutOffPitchWork: 0
        },
        time : {
            seconds: null,
            minutes: null,
            hours: null,
            date: null
        },
        ordering: false,
        orderable: false,
        extraExplaination: null,
        error: false
    }

    componentDidMount () {
        axios.get('http://162.55.9.246/api/v1/customer/repairables?auth='+localStorage.getItem('token'))
            .then(response => {
                this.setState({repairables: response.data});
            })
            .catch(error => {
                this.setState({error: true});
            });
        console.log(this.props.token);
        console.log(localStorage.getItem('userId'));
        this.props.onInitContactData(localStorage.getItem('token'), localStorage.getItem('userid'));
    }

    // componentDidUpdate () {
    //     axios.get('https://tarashkari-test-one-default-rtdb.firebaseio.com/repairables.json?auth='+this.props.token)
    //         .then(response => {
    //             this.setState({repairables: response.data});
    //         })
    //         .catch(error => {
    //             this.setState({error: true});
    //         });
    // }

    updateOrderState (repairables) {

        const sum = Object.keys(repairables)
            .map(igKey => {
                return repairables[igKey];
            })
            .reduce((sum,el) => {
                return sum + el;
            },0);
        
        this.setState({orderable: sum > 0})
    }

    addOrderablePieceHandler = (type) => {
        const oldCount = this.state.repairables[type];
        const updatedCount = oldCount + 1;
        const updatedOrderablePieces = {
            ...this.state.repairables
        };
        updatedOrderablePieces[type] = updatedCount;
        //const priceAddition = INGREDIENT_PRICES[type];
        //const oldPrice = this.state.totalPrice;
        //const newPrice = oldPrice + priceAddition;
        this.setState({repairables: updatedOrderablePieces})
        this.updateOrderState(updatedOrderablePieces);
    }

    removeOrderablePieceHandler = (type) => {
        const oldCount = this.state.repairables[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedOrderablePieces = {
            ...this.state.repairables
        }
        updatedOrderablePieces[type] = updatedCount;
        //const priceDeduction = INGREDIENT_PRICES[type];
        //const oldPrice = this.state.totalPrice;
        //const newPrice = oldPrice - priceDeduction;
        this.setState({repairables: updatedOrderablePieces})
        this.updateOrderState(updatedOrderablePieces);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        // alert('You cancelled!');
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You continued!');

        let dateformat = new DateObject({
            date: new Date(),
            calendar: persian,
            locale: persian_fa,
          });

        let rightNow = new Date();
        let datee = dateformat.format();
        let hour = rightNow.getHours();
        let minute = rightNow.getMinutes();
        let second = rightNow.getSeconds();

        const order = {
            repairables: this.state.repairables,
            contactdata : {
                address: this.props.contactdataAddress,
                nameOfTheBusiness: this.props.contactdataNameOfTheBusiness,
                ownerFirstAndLastName: this.props.contactdataOwnerFirstAndLastName,
                ownerMobileNumber: this.props.contactdataOwnerMobileNumber,
                telephone: this.props.contactdataTelephone
            },
            time : {
                datee,
                hour,
                minute,
                second
            },
            userId: localStorage.getItem('userId')
        }

        // axios.post('/orders.json?auth='+this.props.token, this.state.repairables)
        //     .then(response => console.log(response))
        //     .catch(error => console.log(error));
        // axios.post('https://tarashkari-panel-admin-default-rtdb.firebaseio.com/Orders.json',order)
        axios.post('http://162.55.9.246/api/v1/customer/orders',order)
            .then(response => console.log(response))
            .catch(error => console.log(error));

        axios.post('https://tarashkari-test-one-default-rtdb.firebaseio.com/OrdersTwo.json',order)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }

    render () {

        const disabledInfo = {
            ...this.state.repairables
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let order = <p>repairables can't be loaded!</p>;

        if (this.state.repairables) {
            order = (
                <Aux>
                    <OrderVerTwo orderablePieceProps={this.state.repairables} />
                    {/* <div style={{display: "flex",justifyContent: "flex-end"}}>
                        <img src="/image/pickup.jpg" alt="aks" />
                    </div> */}
                    <BuildControls
                        orderablePieceAdded={this.addOrderablePieceHandler}
                        orderablePieceRemoved={this.removeOrderablePieceHandler}
                        orderable={this.state.orderable}
                        ordered={this.purchaseHandler}
                        disabled={disabledInfo}
                    />
                </Aux>
            );
            orderSummary = 
                <OrderSummary 
                repairables={this.state.repairables}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                />;
        }

        // console.log(this.state.repairables);

        return (
            <div>
                {/* <NavigationBar isAuthenticated={this.props.isAuthenticated}/> */}
                <AfterAuthNavBar />
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {order}

                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        isAuthenticated: state.auth.token !== null,
        contactdataAddress: state.contactdata.address,
        contactdataNameOfTheBusiness: state.contactdata.nameOfTheBusiness,
        contactdataOwnerFirstAndLastName: state.contactdata.ownerFirstAndLastName,
        contactdataOwnerMobileNumber: state.contactdata.ownerMobileNumber,
        contactdataTelephone: state.contactdata.telephone
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitContactData: (token, userId) => dispatch( actions.fetchContactdata(token,userId))
    };
};



export default connect(mapStateToProps,mapDispatchToProps)(OrderBuilder);