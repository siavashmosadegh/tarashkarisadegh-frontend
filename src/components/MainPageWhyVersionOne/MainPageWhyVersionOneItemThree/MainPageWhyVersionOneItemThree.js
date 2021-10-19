import React from 'react';
import {Container , Row , Col } from 'react-bootstrap';
import BuildIcon from '@material-ui/icons/Build';
import myStyle from './style';

function MainPageWhyVersionOneItemThree() {

    const style = myStyle();

    return (
        <div>
            <Container>
                <Row>
                    <Col md={5}>
                    </Col>

                    <Col md={2}>
                        <BuildIcon fontSize="large" className={style.materialIconDige} />
                    </Col>

                    <Col md={5}>
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <h1 className={style.header}>دستگاه های پیشرفته</h1>
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={style.paragraf}>تراشکاری ما با در دست داشتن به روز ترین دستگاه ها قطعات شما را تعمیر میکند</p>
                    </Col>
                </Row>
            </Container>

            <br></br>
        </div>
    );
}

export default MainPageWhyVersionOneItemThree;