import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Spinner from '../UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../axios-orders';
import Input from '../UI/Input/Input';
import NavigationBar from '../NavigationBar/NavigationBar';

class ContactData extends Component {
    state = {
        registerForm: {
            ownerFirstAndLastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'نام و نام خانوادگی صاحب کسب و کار'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'نام کاربری'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'گذرواژه'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            },
            nameOfTheBusiness: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'نام مکانیکی'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            telephone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'تلفن ثابت'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8,
                    maxLength: 8,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            ownerMobileNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'شماره ی همراه صاحب کسب و کار'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 11,
                    maxLength: 11,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'آدرس دقیق مکانیکی'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.registerForm) {
            formData[formElementIdentifier] = this.state.registerForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        }
        axios.post( '/registers.json', order )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push( '/' );
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedregisterForm = {
            ...this.state.registerForm
        };
        const updatedFormElement = { 
            ...updatedregisterForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedregisterForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedregisterForm) {
            formIsValid = updatedregisterForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({registerForm: updatedregisterForm, formIsValid: formIsValid});
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.registerForm) {
            formElementsArray.push({
                id: key,
                config: this.state.registerForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <div className={classes.LoginButtonDiv}>
                    <Link to="/afterloginorregister">
                        <Button variant="success" className={classes.LoginButton} disabled={!this.state.formIsValid}>ثبت نام</Button>
                    </Link>
                </div>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div>
                <NavigationBar />
                
                <br></br>
                <br></br>
            
                <h1 className={classes.FirstHeader}>ایجاد حساب کاربری</h1>

                <br></br>

                <h6 className={classes.SecondHeader}>اگر حساب کاربری ایجاد کردید دکمه ی پایین را بزنید تا به صفحه ی ورود به حساب منقتل شوید</h6>

                <br></br>
                
                <div className={classes.GoToLoginButtonDiv}>
                    <Link to="/login">
                        <Button variant="warning" className={classes.GoToLoginButton}>هدایت به صفحه ی ورود به حساب</Button>
                    </Link>
                </div>

                <div className={classes.ContactData}>
                    {/* <h4>Enter your Contact Data</h4> */}
                    {form}
                </div>
            </div>
        );
    }
}

export default ContactData;