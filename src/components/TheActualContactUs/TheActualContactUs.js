import React from 'react';
import ContactUsForm from '../ContactUsForm/ContactUsForm';
import classes from './TheActualContactUs.module.css';
import ContactUsNumAndAddVerTwo from '../ContactUsNumAndAddVerTwo/ContactUsNumAndAddVerTwo';
import NavigationBar from '../NavigationBar/NavigationBar';
import Iframe from 'react-iframe';
import AnotherHeader from '../AnotherHeader/AnotherHeader';
import Footer from '../Footer/Footer';
function TheActualContactUs () {

    //const style = myStyle();

    return (
        <div className={classes.root}>
            <NavigationBar />

            <AnotherHeader />

            <br></br>
            <br></br>
        
            {/* <Row>
                <Col md={6} style={{paddingLeft: "100px"}}>
                    <ContactUsNumAndAddVerTwo />
                </Col>

                <Col md={6}>
                    <ContactUsForm />
                </Col>
            </Row> */}

            <div className={classes.condiv}>
                <div className={classes.conleftdiv}>
                    <ContactUsNumAndAddVerTwo />
                </div>

                <div className={classes.conrightdiv}>
                    <ContactUsForm />
                </div>
            </div>

            <br></br>

            <div className={classes.googleMapsDiv}>
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.106683279055!2d51.172083614474396!3d35.551067344708606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f92098310e1bf31%3A0x14fc6f8b31f556f9!2z2KrYsdin2LTZg9in2LHZiSDZiCDZhdmK2YQg2YTZhtqvINiq2LHYp9i02Ykg2LXYp9iv2YI!5e0!3m2!1sen!2s!4v1617730618947!5m2!1sen!2s" width="1080" height="800" allowfullscreen="" loading="lazy" />
            </div>

            <br></br>
            <br></br>
            
            <Footer />
        </div>
    );
}

export default TheActualContactUs;