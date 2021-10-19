import React from 'react';
import { Container , Row , Col , Button } from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar';
import myStyle from './style';
import {Link} from 'react-router-dom';

function MainPageServices () {

    const style = myStyle();

    return (
        <div>
            <NavigationBar />

            <Container>
                <Row>
                    <Col md={6} className={style.cylinderParagrafColumn}>
                        <h1 className={style.cylinderHeader}>انواع تعمیرات سیلندر</h1>
                        <br>
                        </br>
                        <p className={style.cylinderParagraf}>تراشکاری صادق با در دست داشتن انواع دستگاه های مربوط به تعمیرات سیلندر ، قادر به تعمیر انواع سیلندر های خودرو های مختفف میباشد.</p>
                        <br></br>
                        <br></br>
                        <Link to="/cylinder">
                            <Button variant="success" className={style.cylinderKnowMoreButton}>بیشتر بدانید</Button>
                        </Link>
                    </Col>

                    <Col md={6}>
                        <img className={style.cylinderImage} src="/image/peugeotcylinder.jpg" alt="peugeotcylinder" />
                    </Col>
                </Row>

                <br></br>
                <br></br>

                <Row className={style.cylinderheadRow}>
                    <Col md={6}>
                        <img className={style.cylinderheadImage} src="/image/cylinderhead.jpg" alt="cylinderhead" />
                    </Col>

                    <Col md={6} className={style.cylinderheadParagrafColumn}>
                        <h1 className={style.cylinderheadHeader}>انواع تعمیرات سرسیلندر</h1>
                        <br>
                        </br>
                        <p className={style.cylinderheadParagraf}>تراشکاری صادق با در دست داشتن انواع دستگاه های مربوط به تعمیرات سیلندر ، قادر به تعمیر انواع سرسیلندر های خودرو های مختفف میباشد.</p>
                        <br></br>
                        <br></br>
                        <Link to="/cylinderhead">
                            <Button variant="success" className={style.cylinderheadKnowMoreButton}>بیشتر بدانید</Button>
                        </Link>
                    </Col>
                </Row>

                <br></br>
                <br></br>

                <Row className={style.tarashRow}>
                    <Col md={6} className={style.tarashParagrafColumn}>
                        <h1 className={style.tarashHeader}>تراش و تعمیر انواع قطعات داخلی</h1>
                        <br>
                        </br>
                        <p className={style.tarashParagraf}>تراش انواع قطعان داخلی خودرو از جمله توپی و سگدست ، غیره و غیره و غیره و غیره</p>
                        <br></br>
                        <br></br>
                        <Button variant="success" className={style.tarashKnowMoreButton}>بیشتر بدانید</Button>
                    </Col>

                    <Col md={6}>
                        <img className={style.tarashImage} src="/image/tarash.jpg" alt="tarashkari"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainPageServices;