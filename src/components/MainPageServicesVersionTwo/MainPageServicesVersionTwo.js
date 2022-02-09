import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import MainPageServicesItem from './MainPageServicesItem/MainPageServicesItem';
import classes from './MainPageServicesVersionTwo.module.css';
import Footer from '../Footer/Footer';
const MainPageServicesVersionTwo = () => {

    return (
        <div>
            <NavigationBar />

            <div className={classes.servicesdiv}>

                <div className={classes.row}>

                    <div className={classes.contentDiv}>
                        <MainPageServicesItem header="انواع تعمیرات سیلندر" paragraf="تراشکاری صادق با در دست داشتن انواع دستگاه های مربوط به تعمیرات سیلندر ، قادر به تعمیر انواع سیلندر های خودرو های مختفف میباشد."
                        routing="/cylinder"/>
                    </div>
                    
                    <div className={classes.imageDivv}>
                        <img src="/image/peugeotcylinder.jpg" alt="cylinder" className={classes.imageItself}></img>                    
                    </div>
                </div>

                <br></br>
                <br></br>

                <div className={classes.row}>

                    <div className={classes.imageDivv}>
                        <img src="/image/cylinderhead.jpg" alt="cylinderhead" className={classes.imageItself}></img>
                    </div>

                    <div className={classes.contentDiv}>
                        <MainPageServicesItem header="انواع تعمیرات سرسیلندر" paragraf="تراشکاری صادق با در دست داشتن انواع دستگاه های مربوط به تعمیرات سیلندر ، قادر به تعمیر انواع سیلندر های خودرو های مختفف میباشد."
                        routing="/cylinderhead"/>
                    </div>
                </div>

                <br></br>
                <br></br>

                <div className={classes.row}>

                    <div className={classes.contentDiv}>
                        <MainPageServicesItem header="تراش و تعمیر قطعات داخلی خودرو" paragraf="تراشکاری ما با استفاده از مدرن ترین دستگاه های تراش انواع قطعات داخلی مثل توپی ، دیسک و غیره را تعمیر میکند"/>
                    </div>

                    <div className={classes.imageDivv}>
                        <img src="/image/others.jpeg" alt="tooppi" className={classes.imageItself} />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default MainPageServicesVersionTwo;