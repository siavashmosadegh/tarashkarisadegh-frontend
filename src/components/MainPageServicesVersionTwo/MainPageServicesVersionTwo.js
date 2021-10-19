import React from 'react';
import { Container , Col , Row } from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar';
import MainPageServicesItem from './MainPageServicesItem/MainPageServicesItem';
import myStyle from './style';

function MainPageServicesVersionTwo () {

    const style = myStyle();

    return (
        <div>
            <NavigationBar />
            
            <Container>
                <Row>
                    <Col md={6} className={style.notImageColumn}>
                        <MainPageServicesItem header="انواع تعمیرات سیلندر" paragraf="تراشکاری صادق با در دست داشتن انواع دستگاه های مربوط به تعمیرات سیلندر ، قادر به تعمیر انواع سیلندر های خودرو های مختفف میباشد."
                        routing="/cylinder"/>
                    </Col>

                    <Col md={6}>
                        <img src="/image/peugeotcylinder.jpg" alt="cylinder" className={style.imageItself}></img>
                    </Col>
                </Row>

                <br></br>
                <br></br>

                <Row>
                    <Col md={6}>
                        <img src="/image/cylinderhead.jpg" alt="cylinderhead" className={style.imageItself}></img>
                    </Col>

                    <Col md={6} className={style.notImageColumn}>
                        <MainPageServicesItem header="انواع تعمیرات سیلندر" paragraf="تراشکاری صادق با در دست داشتن انواع دستگاه های مربوط به تعمیرات سیلندر ، قادر به تعمیر انواع سیلندر های خودرو های مختفف میباشد."
                        routing="/cylinderhead"/>
                    </Col>
                </Row>

                <br></br>
                <br></br>

                <Row>
                    <Col md={6}>
                        <MainPageServicesItem header="تراش و تعمیر قطعات داخلی خودرو" paragraf="تراشکاری ما با استفاده از مدرن ترین دستگاه های تراش انواع قطعات داخلی مثل توپی ، دیسک و غیره را تعمیر میکند"/>
                    </Col>

                    <Col md={6}>
                        <img src="/image/tooppi.jpg" alt="tooppi" className={style.imageItself} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainPageServicesVersionTwo;