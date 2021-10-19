import React from 'react';
import {Container , Row , Col } from 'react-bootstrap';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import myStyle from './style';

function MainPageWhyVersionOneItemFour () {

    const style = myStyle();

    return (
        <div>
            <Container>
                <Row>
                    <Col md={5}>
                    </Col>

                    <Col md={2}>
                        <ThumbUpAltIcon fontSize="large" className={style.materialIconDige} />
                    </Col>

                    <Col md={5}>
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <h1 className={style.header}>بالاترین کیفیت</h1>
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={style.paragraf}>پرسنل مجرب ما قطعات شما را با بالاترین کیفیت تعمیر میکنند</p>
                    </Col>
                </Row>
            </Container>

            <br></br>
        </div>
    );
}

export default MainPageWhyVersionOneItemFour;