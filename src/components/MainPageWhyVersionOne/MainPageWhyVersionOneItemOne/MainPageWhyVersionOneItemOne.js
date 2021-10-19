import React from 'react';
import {Container , Row , Col } from 'react-bootstrap';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import myStyle from './style';

function MainPageWhyVersionOneItemOne () {

    const style = myStyle();

    return (
        <div>
            <Container>
                <Row>
                    <Col md={5}>
                    </Col>

                    <Col md={2}>
                        <LocalShippingIcon fontSize="large" className={style.materialIconDige} />
                    </Col>

                    <Col md={5}>
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <h1 className={style.header}>پیک رایگان</h1>
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={style.paragraf}>هر جای ایران که باشید پیک ما به صورت رایگان قطعه ی شما را جا به جا میکند</p>
                    </Col>
                </Row>
            </Container>

            <br></br>
        </div>
    );
}

export default MainPageWhyVersionOneItemOne;