import React , {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from '../../axios-orders';
import classes from './LoginVerTwo.module.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';

class LoginVerTwo extends Component {
    state = {
        loginForm: {
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
            }
        },
        formIsValid: false,
        loading: false
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.loginForm) {
            formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value;
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
        const updatedloginForm = {
            ...this.state.loginForm
        };
        const updatedFormElement = { 
            ...updatedloginForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedloginForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedloginForm) {
            formIsValid = updatedloginForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({loginForm: updatedloginForm, formIsValid: formIsValid});
    }

    render () {

        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
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
                        <Button variant="success" className={classes.LoginButton} disabled={!this.state.formIsValid}>ورود</Button>
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
            
                <h1 className={classes.FirstHeader}>ورود به حساب کاربری</h1>

                <br></br>

                <h6 className={classes.SecondHeader}>اگر هنوز حساب کاربری ایجاد نکردید دکمه ی پایین را بزنید تا به صفحه ی ایجاد حساب کاربری منقتل شوید</h6>

                <br></br>
                
                <div className={classes.GoToRegisterButtonDiv}>
                    <Link to="/register">
                        <Button variant="warning" className={classes.GoToRegisterButton}>هدایت به صفحه ی ایجاد حساب</Button>
                    </Link>
                </div>

                <div className={classes.LoginVerTwo}>
                    {/* <h4>Enter your Contact Data</h4> */}
                    {form}
                </div>
            </div>
        );
    }
}

export default LoginVerTwo;