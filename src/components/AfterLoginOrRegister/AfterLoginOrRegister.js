import React from 'react';
import {Container , Row , Col , Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import myStyle from './style';

function AfterLoginOrRegister (props) {

    const style = myStyle();

    return (
        <div>
            <h1 className={style.headerr}>خوش آمدید</h1>

            <Container>
                <Row>
                    <Col md={6}>
                        <Link to="/order">
                            <Button variant="success" className={style.orderButton}>ثبت سفارش جدید</Button>
                        </Link>
                    </Col>

                    <Col md={6}>
                        <Link to="/profile">
                            <Button variant="success" className={style.profileButton}>ویرایش اطلاعات پروفایل</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AfterLoginOrRegister;