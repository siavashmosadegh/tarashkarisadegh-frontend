import React from 'react';
import Caro from '../Caro/Caro';
import MainPageContact from '../MainPageContact/MainPageContact';
import MainPageWhyVersionOne from '../MainPageWhyVersionOne/MainPageWhyVersionOne';
import NavigationBar from '../NavigationBar/NavigationBar';
import Welcome from '../Welcome/Welcome';

function BetweenNavigationBarAndFooter () {
    return (
        <div>
            <NavigationBar />
            
            <Caro />

            <Welcome />

            <MainPageWhyVersionOne />

            <MainPageContact />
        </div>
    );
}

export default BetweenNavigationBarAndFooter;