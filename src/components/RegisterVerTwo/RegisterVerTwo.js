import React , {Component} from 'react';
import {Button} from 'react-bootstrap';
import Input from '../UI/Input/Input';
import axios from '../../axios-orders';

class RegisterVerTwo extends Component {
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
                    placeholder: 'ثبت نام'
                },
                value: '',
                validation: {
                    required: true
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
                    minLength: 10
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
                    required: true
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
        // const order = {
        //     ingredients: this.props.ingredients,
        //     price: this.props.price,
        //     orderData: formData
        // }
        axios.post( '/registers.json', formData )
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
        let updatedRegisterForm = {
            ...this.state.registerForm
        };
        let updatedFormElement = { 
            ...updatedRegisterForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedRegisterForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedRegisterForm) {
            formIsValid = updatedRegisterForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedRegisterForm, formIsValid: formIsValid});
    }

    render () {

        const formElementArray = [];
        for (let key in this.state.registerForm) {
            formElementArray.push({
                id: key,
                config: this.state.registerForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <Button variant="success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        );
        return (
            <div>
                {form}
            </div>
        );
    }
}

export default RegisterVerTwo;