import React from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import myStyle from './style';

function CylinderheadServicesItem (props) {

    const style = myStyle();

    return (
        <div>
            <Container>

            <h1 className={style.header}>{props.title}</h1>

            <br></br>

            <Row>
                <Col md={12}>
                    <p className={style.paragraf}>{props.paragraphhh}</p>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <img src={props.imageSource} alt={props.imageSourceAlt} className={style.image} />
                </Col>
            </Row>

            </Container>
        </div>
    );
}

export default CylinderheadServicesItem;