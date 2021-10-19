import React from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import myStyle from './style';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

function MainPageWhyVersionOneItemTwo () {

    const style = myStyle();

    return (
        <div>
            <Container>
                <Row>
                    <Col md={5}>
                    </Col>

                    <Col md={2}>
                        <AttachMoneyIcon fontSize="large" className={style.materialIconDige} />
                    </Col>

                    <Col md={5}>
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <h1 className={style.header}>قیمت مناسب</h1>
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <p className={style.paragraf}>انواع خدمات با ارزان ترین قیمت در اختیار شماست</p>
                    </Col>
                </Row>
            </Container>

            <br></br>
        </div>
    );
}

export default MainPageWhyVersionOneItemTwo;