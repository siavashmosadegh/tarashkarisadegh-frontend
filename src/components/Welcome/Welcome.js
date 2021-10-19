import React from 'react';
import { Container , Row , Col } from 'react-bootstrap';

import myStyle from './style';

function Welcome () {
    const style = myStyle();

    return (
        <div className={style.root}>
            <Container>
                <Row>
                    <Col md={12}>
                        <h1 className={style.header}>به تراشکاری و میل لنگ تراشی ما خوش آمدید</h1>
                            <p className={style.paragraf}>تراشکاری و میللنگ تراشی ما با بیش از ۲۵ سال سابقه ی درخشان در زمینه ی تراشکاری
                                و میل لنگ تراشی و جوشکاری و اینا و با داشتن بیش از ۱۰۰ مشتری ثابت و بر اساس استانداردهای بین‌المللی و همچنین با به کارگیری نیروی انسانی مجرب و متخصص آغاز نمود. مجموعه صنعتی پرشیا لیزر به عنوان یکی از شرکت‌های پیشرو در صنعت برش فلزات به وسیله دستگاه‌های برش لیزر، خط مشی خود را در جهت ارتقای صنعت کشور و افزایش سطح کیفی محصولات مرتبط قرار داده است. یکی از بهترین تراشکاری های ایران است </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Welcome;