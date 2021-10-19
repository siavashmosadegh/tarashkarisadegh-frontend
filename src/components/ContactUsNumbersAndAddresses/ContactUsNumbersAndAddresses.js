import React from 'react';
import {Container , Row , Col} from 'react-bootstrap';
import myStyle from './style';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import ScheduleIcon from '@material-ui/icons/Schedule';

function ContactUsNumbersAndAddresses () {

    const style = myStyle();

    return (
        <div className={style.root}>
            <Container>
                <h1 className={style.rightColumnHeader}>تماس با تراشکاری</h1>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={style.paragraphhhh}>جاده ساوه ، نسیم شهر ، اسماعیل آباد ، بلوار امام خمینی ، نبش خیابان شهید قاسمی   <LocationOnIcon /></p> 
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={style.paragraphhhh}>02156754223  :  <PhoneIcon /></p>
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={style.paragraphhhh}>09122773647   <PhoneIcon /></p> 
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={style.paragraphhhh}>09122093612   <PhoneIcon /></p> 
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={style.paragraphhhh}>@TarashkariSadegh   <TwitterIcon /></p> 
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={style.paragraphhhh}>tarashkari_sadegh   <InstagramIcon /></p> 
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={style.paragraphhhh}>tarashkarisadegh@yahoo.com   <EmailIcon /></p> 
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={style.paragraphhhh}>شنبه تا پنج شنبه ۱۰ صبح تا ۸ شب  <ScheduleIcon /></p>
                    </Col>
                </Row>

                <br></br>
                
            </Container>
        </div>
    );
}

export default ContactUsNumbersAndAddresses;