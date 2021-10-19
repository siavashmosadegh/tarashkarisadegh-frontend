import React from 'react';
import {Container , Row , Col } from 'react-bootstrap';
import myStyle from './style';

function OrderableItem (props) {

    const style = myStyle();

    return (
        <div className={style.root}>
            <Container>
                <Row>
                    <Col md={4} className={style.checkboxxColumn}>
                        <input type="checkbox" className={style.checkboxx} />
                    </Col>

                    <Col md={4}>
                        <img src={props.image} alt={props.imageName} className={style.image}></img>
                    </Col>

                    <Col md={4} className={style.rightColumn}>
                        <h1 className={style.headerr}>{props.title}</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OrderableItem;