import React from 'react';
import Caro from '../Caro/Caro';
import MainPageContact from '../MainPageContact/MainPageContact';
import MainPageWhyVersionOne from '../MainPageWhyVersionOne/MainPageWhyVersionOne';
import NavigationBar from '../NavigationBar/NavigationBar';
import Welcome from '../Welcome/Welcome';
import Why from '../Why/Why';
import Footer from '../Footer/Footer';
function BetweenNavigationBarAndFooter () {
    return (
        <div>
            <NavigationBar />
            
            <Caro />

            <Welcome />

            <Why />

            <MainPageContact />

            <Footer />
        </div>
    );
}

export default BetweenNavigationBarAndFooter;