import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
//import {Container , Row , Col} from 'react-bootstrap';
import TheActualContactUs from '../TheActualContactUs/TheActualContactUs';
// import Register from '../Register/Register';
//import Login from '../Login/Login';
import MainPageServicesVersionTwo from '../MainPageServicesVersionTwo/MainPageServicesVersionTwo';
import CylinderServices from '../ServicesSinglePages/CylinderServices/CylinderServices';
import CylinderheadServices from '../ServicesSinglePages/CylinderheadServices/CylinderheadServices';
import BetweenNavigationBarAndFooter from '../BetweenNavigationBarAndFooter/BetweenNavigationBarAndFooter';
import AfterLoginOrRegister from '../AfterLoginOrRegister/AfterLoginOrRegister';
import Order from '../Order/Order';
import Footer from '../Footer/Footer';
//import OrderVerTwo from '../OrderVerTwo/OrderVerTwo';
import OrderBuilder from '../../containers/OrderBuilder/OrderBuilder';
//import RegisterVerTwo from '../../components/RegisterVerTwo/RegisterVerTwo';
import ContactData from '../../components/ContactData/ContactData';
import LoginVerTwo from '../../components/LoginVerTwo/LoginVerTwo';
import Auth from '../../containers/Auth/Auth';
import Logout from '../../containers/Auth/Logout/Logout';
import Panel from '../../containers/Panel/Panel';

function Layout () {
    return (
        <div>
            <BrowserRouter>
                <Route path="/contactus" component={TheActualContactUs} />
                <Route path="/register" component={Auth} />
                <Route path="/login" component={LoginVerTwo} />
                <Route path="/services" component={MainPageServicesVersionTwo} />
                <Route path="/logout" component={Logout} /> 
                <Route path="/cylinder" component={CylinderServices} />
                <Route path="/cylinderhead" component={CylinderheadServices} />
                <Route path="/afterloginorregister" component={AfterLoginOrRegister} />
                <Route path="/order" component={Order} />
                <Route path="/staff" component={OrderBuilder} />
                <Route path="/panel" component={Panel} />

                <Route exact path="/" component={BetweenNavigationBarAndFooter} />
            </BrowserRouter>

            <Footer />
        </div>
    );
}

export default Layout;