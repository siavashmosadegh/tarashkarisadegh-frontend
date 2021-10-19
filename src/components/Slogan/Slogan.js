import React from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import myStyle from './style';

function Slogan () {

    const style = myStyle();

    return (
        <div className={style.root}>
            <Container>
                <Row>
                    <Col md={12}>
                        <h1 className={style.headerYek}>همیشه و در همه جا پر از خلاقیت</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Slogan;