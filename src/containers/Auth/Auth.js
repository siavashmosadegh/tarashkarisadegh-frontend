import React , {Component} from 'react';
import Input from '../../components/UI/Input/Input';
//import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import {Redirect} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LockIcon from '@mui/icons-material/Lock';

var dict = {
    'email' : <AccountBoxIcon fontSize="larger"/> ,
    'password' : <LockIcon fontSize='50px'/>
}

var auth = {
    'INVALID_PASSWORD': 'گذرواژه را اشتباه وارد کردید',
    'EMAIL_EXISTS' : 'یک حساب با این ایمیل ثبت نام کرده است',
    'EMAIL_NOT_FOUND': 'حسابی با این ایمیل ثبت نشده'
}

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'آدرس ایمیل'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
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
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: true
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

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }
        this.setState({controls: updatedControls});

    } 

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(  this.state.controls.email.value,
                            this.state.controls.password.value,
                            this.state.isSignup);
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup : !prevState.isSignup}
        });
    }

    render () {

        console.log(dict['email']);

        const formElementArray = [];
        for (let key in this.state.controls) {
            formElementArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        let icon= null;

        let form = formElementArray.map(formElement => (
            <div style={{display: "flex", alignItems: "center"}}>
                {/* <label style={{color: "white",textAlign: "right"}}>{formElement.config.elementType}</label> */}
                <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => this.inputChangedHandler(event,formElement.id)}
                />
                <span style={{color: "white"}}>{dict[`${formElement.config.elementConfig.type}`]}</span>
                {/* // {`${formElement.config.elementConfig.type}`} */}
                <br></br>
                <br></br>
            </div>
            
        ))

        if (this.props.loading) {
            form = <Spinner />
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p style={{color: 'white'}}>{auth[this.props.error]}</p>
            );
        }

        // console.log(this.props.error);

        let authRedirect = null
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to="/afterloginorregister" />
        }

        // console.log(this.props.error);

        return (
            <div>
                {/* {dict['email']} */}
                <NavigationBar isAuthenticated={this.props.isAuthenticated}/>
                <div className={classes.rooter}>
                    <div className={classes.imagediv}>
                        <img src="/image/lathe7.jpg" className={classes.image}/>
                    </div>
                    <div className={classes.root}>
                        <div className={classes.insideroot}>
                            <div>
                                {/* <br></br>
                                <br></br> */}

                                <h1 className={classes.header}>
                                    {   
                                        this.state.isSignup ? 'ایجاد حساب کاربری' 
                                                            : 'ورود به حساب کاربری'
                                    }
                                </h1>

                                <br></br>
                                
                                <div className={classes.paragraphDiv}>
                                    <p className={classes.paragraph}>
                                        {
                                            this.state.isSignup ? 'اگر حساب کاربری دارید دکمه ی پایین را بزنید تا به صفحه ی ورود به حساب منتقل شوید'
                                                                : 'اگر هنوز حساب کاربری ایجاد نکرده اید دکمه ی پایین را بزنید تا به صفحه ی ایجاد حساب منتقل شوید'
                                        }
                                    </p>
                                </div>

                                <br></br>

                                <div className={classes.goToButtonDiv}>
                                    <Button variant="warning" onClick={this.switchAuthModeHandler}>برو به {this.state.isSignup ? 'ورود' : 'ثبتنام'}</Button>
                                </div>

                                <br></br>

                                <div className={classes.Auth}>
                                    {authRedirect}
                                    {errorMessage}
                                    <form>
                                        {form}
                                        <br></br>
                                        <Button variant="success" onClick={this.submitHandler}>ارسال اطلاعات</Button>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email,password,isSignup))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Auth);