import React , {Component} from 'react';
import {Button} from 'react-bootstrap';
import classes from './ContactUsForm.module.css';
import axios from 'axios';
import Input from '../UI/Input/Input';
import Spinner from '../UI/Spinner/Spinner';

class ContactUsForm extends Component {

    state = {
        contactusForm: {
            ownerFirstAndLastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'نام و نام خانوادگی'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'آدرس ایمیل'
                },
                value: localStorage.getItem('userId'),
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            mobileNumber: {
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
            message: {
                elementType: 'text',
                elementConfig: {
                    type: 'text',
                    placeholder: 'پیام شما'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false,
        loading: false
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.contactusForm) {
            formData[formElementIdentifier] = this.state.contactusForm[formElementIdentifier].value;
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
            ...this.state.contactusForm
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
        this.setState({contactusForm: updatedregisterForm, formIsValid: formIsValid});
    }

    infoHasBeenCompleted = () => {

        const contactData = {
            userId : localStorage.getItem('userId'),
            ownerFirstAndLastName : this.state.contactusForm.ownerFirstAndLastName.value,
            email: this.state.contactusForm.email.value,
            mobileNumber: this.state.contactusForm.mobileNumber.value,
            message: this.state.contactusForm.message.value
        }

        axios.post('https://tarashkari-panel-admin-default-rtdb.firebaseio.com/contactusinfo.json',contactData)
            .then( response => {
                console.log(response);
                //this.props.history.push( '/' );
            } )
            .catch( error => {
                console.log(error);
            } );
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.contactusForm) {
            formElementsArray.push({
                id: key,
                config: this.state.contactusForm[key]
            });
        }
        let form = (
            <form>
                {formElementsArray.map(formElement => (
                    <div>
                        <Input 
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                        <br></br>
                    </div>
                        
                ))}
                <div className={classes.LoginButtonDiv}>
                    <Button variant="success" onClick={this.infoHasBeenCompleted} className={classes.LoginButton} disabled={!this.state.formIsValid}>ثبت اطلاعات</Button>
                </div>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }

        return (
            <div className={classes.root}>
                <div className={classes.insideroot}>
                    {form}
                </div>
            </div>
        );
    }
}

export default ContactUsForm;