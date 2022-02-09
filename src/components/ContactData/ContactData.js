import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Spinner from '../UI/Spinner/Spinner';
import classes from './ContactData.module.css';
//import axios from '../../axios-orders';
import axios from 'axios';
import Input from '../UI/Input/Input';
import AfterAuthNavBar from '../AfterAuthNavBar/AfterAuthNavBar';
import {connect} from 'react-redux';
import Line from '../Line/Line';
import Footer from '../Footer/Footer';

class ContactData extends Component {
    state = {
        registerForm: {
            // email: {
            //     elementType: 'input',
            //     elementConfig: {
            //         type: 'text',
            //         placeholder: 'آدرس ایمیل'
            //     },
            //     value: localStorage.getItem('userId'),
            //     validation: {
            //         required: true
            //     },
            //     valid: false,
            //     touched: false
            // },
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
            // password: {
            //     elementType: 'input',
            //     elementConfig: {
            //         type: 'password',
            //         placeholder: 'گذرواژه'
            //     },
            //     value: '',
            //     validation: {
            //         required: true,
            //         minLength: 8
            //     },
            //     valid: false,
            //     touched: false
            // },
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
        loading: false,
        noNeedToSendInfo: null
    }

    componentDidMount () {

        if (localStorage.getItem('contactname') == null) {
            this.setState({noNeedToSendInfo: false})
        } else {
            this.setState({noNeedToSendInfo: true});
        }

        console.log("REEEEELLLLLLLLOOOOOOOOOOOOOOAAAAAAAAADDDDDDDDD");
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

    // formIsNeeded = () => {
    //     if (this.props.contactdataAddress == "") 
    //         this.setState({noNeedToSendInfo: false});
    //     else 
    //         this.setState({noNeedToSendInfo: true});
    // }

    infoHasBeenCompleted = () => {

        // const order = {
        //     repairables: this.state.repairables,
        //     customer : {
        //         name: 'kiomars mechanic',
        //         address: {
        //             city: 'nasim shahr',
        //             neighborhood: 'esmaeil abad',
        //             street: 'reza kazemi',
        //             pelak: '2'
        //         },
        //         email: 'test@test.com'
        //     },
        //     deliveryPerson: 'mammad agha'
        // }


        const contactData = {
            userId : localStorage.getItem('userId'),
            ownerFirstAndLastName : this.state.registerForm.ownerFirstAndLastName.value,
            nameOfTheBusiness : this.state.registerForm.nameOfTheBusiness.value,
            telephone : this.state.registerForm.telephone.value,
            ownerMobileNumber: this.state.registerForm.ownerMobileNumber.value,
            address : this.state.registerForm.address.value
        }

        // axios.post('https://tarashkari-test-one-default-rtdb.firebaseio.com/contactdata.json?auth='+localStorage.getItem('token'),contactData)
        axios.post('http://162.55.9.246/api/v1/customer/contactdata?auth='+localStorage.getItem('token'),contactData)
            .then( response => {
                console.log(response);
                //this.props.history.push( '/' );
            } )
            .catch( error => {
                console.log(error);
            } );
    }

    render () {

        let secondHeader = (
            <div>
                <h4 className={classes.SecondHeader}>فرم زیر را تکمیل کنید تا به صفحه ی ثبت سفارش منتقل شوید</h4>
                <br></br>
            </div>
        );

        console.log(this.props.contactdataOwnerFirstAndLastName);
        console.log(this.props.contactdataOwnerMobileNumber);
        console.log(this.props.contactdataTelephone);
        console.log(this.props.contactdataNameOfTheBusiness);
        console.log(this.props.contactdataAddress);

        console.log(this.state.noNeedToSendInfo);

        const formElementsArray = [];
        for (let key in this.state.registerForm) {
            formElementsArray.push({
                id: key,
                config: this.state.registerForm[key]
            });
        }
        let form = (
            <form>
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
                    <Link to="/staff">
                        <Button variant="success" onClick={this.infoHasBeenCompleted} className={classes.LoginButton} disabled={!this.state.formIsValid}>ثبت اطلاعات</Button>
                    </Link>
                </div>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        if ( this.state.noNeedToSendInfo ) {
            form = (
                <div className={classes.nntsiroot}>
                    <div className={classes.nntsirow}>
                        <div className={classes.nntsififty}>
                            <p className={classes.nntsifirstparagraph}>: نام و نام خانوادگی صاحب کسب و کار</p>
                            <p className={classes.nntsisecondparagraph}>{this.props.contactdataOwnerFirstAndLastName}</p>
                        </div>
                        <div className={classes.nntsififty}>
                            <p className={classes.nntsifirstparagraph}>: شماره موبایل</p>
                            <p className={classes.nntsisecondparagraph}>{this.props.contactdataOwnerMobileNumber}</p>
                        </div>
                    </div>

                    <div className={classes.nntsirow}>
                        <div className={classes.nntsififty}>
                            <p className={classes.nntsifirstparagraph}>: تلفن ثابت مغازه</p>
                            <p className={classes.nntsisecondparagraph}>{this.props.contactdataTelephone}</p>
                        </div>
                        <div className={classes.nntsififty}>
                            <p className={classes.nntsifirstparagraph}>: نام مکانیکی</p>
                            <p className={classes.nntsisecondparagraph}>{this.props.contactdataNameOfTheBusiness}</p>
                        </div>
                    </div>

                    <div className={classes.nntsirow}>
                        <div className={classes.nntsihundred}>
                            <p className={classes.nntsifirstparagraph}>: آدرس</p>
                            <p className={classes.nntsisecondparagraph}>{this.props.contactdataAddress}</p>
                        </div>
                    </div>
                </div>                
            );
            secondHeader = null;
        }
        return (
            <div>
                <AfterAuthNavBar />
                
                <Line />
                <Line />

                <div className={classes.belownav}>
                    <h1 className={classes.FirstHeader}>اطلاعات پروفایل</h1>

                    <br></br>

                    {secondHeader}
                    
                    {/* <div className={classes.GoToLoginButtonDiv}>
                        <Link to="/login">
                            <Button variant="warning" className={classes.GoToLoginButton}>هدایت به صفحه ی ورود به حساب</Button>
                        </Link>
                    </div> */}

                    <h6 className={classes.Username}>{localStorage.getItem('userId')} : نام کاربری شما </h6>

                    <div className={classes.ContactData}>
                        {/* <h4>Enter your Contact Data</h4> */}
                        {form}
                    </div>
                </div>
                
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // loading: state.auth.loading,
        // error: state.auth.error,
        // isAuthenticated: state.auth.token !== null
        token: state.auth.token,
        contactdataAddress: state.contactdata.address,
        contactdataNameOfTheBusiness: state.contactdata.nameOfTheBusiness,
        contactdataOwnerFirstAndLastName: state.contactdata.ownerFirstAndLastName,
        contactdataOwnerMobileNumber: state.contactdata.ownerMobileNumber,
        contactdataTelephone: state.contactdata.telephone
    }
}

export default connect(mapStateToProps)(ContactData);