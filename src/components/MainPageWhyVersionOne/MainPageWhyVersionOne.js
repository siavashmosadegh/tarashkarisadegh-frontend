import React from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import MainPageWhyVersionOneItemFour from './MainPageWhyVersionOneItemFour/MainPageWhyVersionOneItemFour';
import MainPageWhyVersionOneItemOne from './MainPageWhyVersionOneItemOne/MainPageWhyVersionOneItemOne';
import MainPageWhyVersionOneItemThree from './MainPageWhyVersionOneItemThree/MainPageWhyVersionOneItemThree';
import MainPageWhyVersionOneItemTwo from './MainPageWhyVersionOneItemTwo/MainPageWhyVersionOneItemTwo';
import myStyle from './style';

function MainPageWhyVersionOne () {

    const style = myStyle();

    return (
        <div className={style.root}>
            <Container>
                <h1 className={style.mainHeader}>چرا تراشکاری صادق را انتخاب کنیم ؟</h1>

                <br></br>
                <br></br>

                <Row>
                    <Col md={6}>
                        <MainPageWhyVersionOneItemOne />
                    </Col>

                    <Col md={6}>
                        <MainPageWhyVersionOneItemTwo />
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={6}>
                        <MainPageWhyVersionOneItemThree />
                    </Col>

                    <Col md={6}>
                        <MainPageWhyVersionOneItemFour />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainPageWhyVersionOne;