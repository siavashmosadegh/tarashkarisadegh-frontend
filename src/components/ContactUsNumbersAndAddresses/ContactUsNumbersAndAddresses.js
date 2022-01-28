import React from 'react';
import {Container , Row , Col} from 'react-bootstrap';
//import myStyle from './style';
import classes from './ContactUsNumbersAndAddresses.module.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import ScheduleIcon from '@material-ui/icons/Schedule';

const ContactUsNumbersAndAddresses = () => {

    const dictionary = [
        ["locationicon" , "جاده ساوه ، نسیم شهر ، اسماعیل آباد ، بلوار امام خمینی ، نبش خیابان شهید قاسمی"],
        ["phoneicon" , "02156754223"]
    ]

    console.log(dictionary);

    dictionary.map( item => {
        console.log(item[0]);
        console.log(item[1]);
    } )

    //const style = myStyle();

    return (
        <div className={classes.root}>
            <Container>
                <h1 className={classes.rightColumnHeader}>تماس با تراشکاری</h1>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={classes.paragraphhhh}>جاده ساوه ، نسیم شهر ، اسماعیل آباد ، بلوار امام خمینی ، نبش خیابان شهید قاسمی   <LocationOnIcon /></p> 
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={classes.paragraphhhh}>02156754223  :  <PhoneIcon /></p>
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={classes.paragraphhhh}>09122773647   <PhoneIcon /></p> 
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={classes.paragraphhhh}>09122093612   <PhoneIcon /></p> 
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={classes.paragraphhhh}>@TarashkariSadegh   <TwitterIcon /></p> 
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={classes.paragraphhhh}>tarashkari_sadegh   <InstagramIcon /></p> 
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={classes.paragraphhhh}>tarashkarisadegh@yahoo.com   <EmailIcon /></p> 
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={classes.paragraphhhh}>شنبه تا پنج شنبه ۱۰ صبح تا ۸ شب  <ScheduleIcon /></p>
                    </Col>
                </Row>

                <br></br>
                
            </Container>
        </div>
    );
}

export default ContactUsNumbersAndAddresses;