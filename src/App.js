import React, {Component} from 'react';
//import AnotherHeader from './components/AnotherHeader/AnotherHeader';
import Layout from './components/Layout/Layout';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';
//import Caro from './components/Caro/Caro';
//import MainPageServicesVersionTwo from './components/MainPageServicesVersionTwo/MainPageServicesVersionTwo';
//import NavigationBar from './components/NavigationBar/NavigationBar';
//import Welcome from './components/Welcome/Welcome';
//import Register from './components/Register/Register';
//import Login from './components/Login/Login';
//import MainPageWhyVersionOne from './components/MainPageWhyVersionOne/MainPageWhyVersionOne';
//import MainPageContact from './components/MainPageContact/MainPageContact';
//import CylinderheadServices from './components/ServicesSinglePages/CylinderheadServices/CylinderheadServices';
//import CylinderServices from './components/ServicesSinglePages/CylinderServices/CylinderServices';
//import TheActualContactUs from './components/TheActualContactUs/TheActualContactUs';
//import Slogan from './components/Slogan/Slogan';//import TopBar from './components/TopBar/TopBar';
//import MainPageServices from './components/MainPageServices/MainPageServices';

class App extends Component {

    componentDidMount () {
        this.props.onTryAutoSignup();
    }

    render () {

        return (
            <div>
                {/* <Slogan /> */}{/* <MainPageServices /> */}
                
                {/* <NavigationBar />
    
                <Caro />
    
                <Welcome />
    
                <MainPageServicesVersionTwo />            
    
                <Register />
    
                <Login />
    
                <MainPageWhyVersionOne />
    
                <MainPageContact />
                
                <CylinderheadServices />
    
                <CylinderServices />
    
                <TheActualContactUs /> */}
    
                <Layout />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup : () => dispatch(actions.authCheckState())
    };
};

export default connect(null, mapDispatchToProps)(App);