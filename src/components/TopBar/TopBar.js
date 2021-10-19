import React from 'react';
import { Container , Button , Row , Col } from 'react-bootstrap';
import myStyle from './style';

function TopBar () {
    const style = myStyle();

    return (
        <div className={style.root}>
            <Container>
                <Row>
                    <Col md={4} className={style.leftColumn}>
                        <input className={style.searchBar}></input>
                    </Col>

                    <Col md={4} className={style.middleColumn}>
                        <p className={style.title}>تراشکاری</p>
                    </Col>

                    <Col md={4} className={style.rightColumn}>
                        <Row>
                            <Col md={6}>
                                <Button className={style.login}>ورود</Button>
                            </Col>

                            <Col md={6}>
                                <Button className={style.register}>ثبت نام</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TopBar;