import React , {Component} from 'react';
import AfterAuthNavBar from '../AfterAuthNavBar/AfterAuthNavBar';
import classes from './AfterLoginOrRegister.module.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Line from '../Line/Line';
import Footer from '../Footer/Footer';
class AfterLoginOrRegister extends Component {

    componentDidMount () {
        this.props.onInitContactData(this.props.token, localStorage.getItem('userId'));
    }

    render () {        
        return (
            <div className={classes.root}>
                <AfterAuthNavBar />

                <Line />

                <div className={classes.belownav}>
                    <h1 className={classes.headerr}>خوش آمدید</h1>

                    <br></br>
        
                    <h4 className={classes.headerrrr}>اگر هنوز اطلاعات کاربری خود را تکمیل نکرده اید ، به ویرایش پروفایل بروید و اطلاعات خود را ثبت کنید</h4>
        
                    <br></br>
        
                    <h4 className={classes.headerrrr}>بعد از اینکه اطلاعات خود را ثبت کردید میتوانید از طریق منوی ثبت سفارش ، سفارش خود را ثبت کنید</h4>

                    <br></br>

                    <h4 className={classes.headerrrr}>همچنین پس از ثبت سفارش میتوانید از منوی سفارش های من سفارش هایی که ثبت کرده اید را ببینید</h4>
                </div>

                <Line />

                <Footer />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitContactData: (token, userId) => dispatch( actions.fetchContactdata(token,userId))        
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AfterLoginOrRegister);