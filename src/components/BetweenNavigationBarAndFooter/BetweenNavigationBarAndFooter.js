import React from 'react';
import Caro from '../Caro/Caro';
import MainPageContact from '../MainPageContact/MainPageContact';
import MainPageWhyVersionOne from '../MainPageWhyVersionOne/MainPageWhyVersionOne';
import NavigationBar from '../NavigationBar/NavigationBar';
import Welcome from '../Welcome/Welcome';
import WelcomeVerTwo from '../WelcomeVerTwo/WelcomeVerTwo';
import Why from '../Why/Why';

function BetweenNavigationBarAndFooter () {
    return (
        <div>
            <NavigationBar />
            
            <Caro />

            <Welcome />

            {/* <WelcomeVerTwo /> */}

            {/* <MainPageWhyVersionOne /> */}

            <Why />

            <MainPageContact />
        </div>
    );
}

export default BetweenNavigationBarAndFooter;