import React from 'react';
import {Container , Row , Col} from 'react-bootstrap';
import OrderableItem from './OrderableItem/OrderableItem';
import myStyle from './style';

function Order () {

    const style = myStyle();

    return (

        <div className={style.root}>

            <Container>

                <h1 className={style.header}>ثبت سفارش جدید</h1>

                <br></br>
                <br></br>
                
                {/* CylinderHead Section */}

                <div>
                    <Container>
                        <h1 className={style.headerTwo}>تعمیرات مربوط به سرسیلندر</h1>

                        <br></br>

                        <Row>
                            <Col md={12}>
                                <p className={style.explaination}>مشتری گرامی اگر موتوری باز کرده اید بنا به تشخیص خودتان میتوانید هرکدام از تعمیرات زیر را که سرسیلندر نیاز دارد ، سفارش دهید</p>
                            </Col>
                        </Row>

                        <br></br>
                        <br></br>

                        <Container>
                            <Row>
                                <Col md={12}>
                                    <OrderableItem image="/image/lathe8.jpg" title="آب بندی سرسیلندر" />
                                </Col>
                            </Row>

                            <br></br>

                            <Row>
                                <Col md={12}>
                                    <OrderableItem image="/image/lathe5.jpg" title="کف تراشی سرسیلندر" />
                                </Col>
                            </Row>

                            <br></br>

                            <Row>
                                <Col md={12}>
                                    <OrderableItem image="/image/lathe1.jpg" title="سنگ زدن سرسیلندر" />
                                </Col>
                            </Row>

                            <br></br>

                            <Row>
                                <Col md={12}>
                                    <OrderableItem image="/image/lathe2.jpg" title="تعویض گایت سرسیلندر" />
                                </Col>
                            </Row>

                            <br></br>

                            <Row>
                                <Col md={12}>
                                    <OrderableItem image="/image/lathe3.jpg" title="تعویض سیت سرسیلندر" />
                                </Col>
                            </Row>

                            <br></br>

                            <Row>
                                <Col md={12}>
                                    <OrderableItem image="/image/lathe4.jpg" title="برقو ی سرسیلندر" />
                                </Col>
                            </Row>

                            <br></br>

                            <Row>
                                <Col md={12}>
                                    <OrderableItem image="/image/lathe5.jpg" title="شیم بندی سرسیلندر" />
                                </Col>
                            </Row>
                        </Container>

                        <br></br>
                        <br></br>


                    </Container>

                </div>

                <br></br>
                <br></br>

                {/* Cylinder Section */}

                <div>
                    <Container>
                        <h1 className={style.headerTwo}>تعمیرات مربوط به سیلندر</h1>

                        <br></br>

                        <Row>
                            <Col md={12}>
                                <p className={style.explaination}>مشتری گرامی چنانچه سیلندر موتوری که باز کرده اید نیاز به تعمیر دارد ، میتوانید هر کدام از موارد زیر را انتخاب کنید</p>
                            </Col>
                        </Row>

                        <br></br>
                        <br></br>

                        <Container>
                            <Row>
                                <Col md={12}>
                                    <OrderableItem image="/image/lathe8.jpg" title="تعمیر جای بوش سیلندر" />
                                </Col>
                            </Row>

                            <br></br>

                            <Row>
                                <Col md={12}>
                                    <OrderableItem image="/image/lathe7.jpg" title="برقوی سیلندر" />
                                </Col>
                            </Row>

                            <br></br>

                            <Row>
                                <Col md={12}>
                                    <OrderableItem image="/image/lathe6.jpg" title="پلیش بعد از برقو" />
                                </Col>
                            </Row>

                            <br></br>

                            <Row>
                                <Col md={12}>
                                    <OrderableItem image="/image/lathe5.jpg" title="بوش زدن سیلندر" />
                                </Col>
                            </Row>

                            <br></br>

                            <Row>
                                <Col md={12}>
                                    <OrderableItem image="/image/lathe4.jpg" title="آزمایش سیلندر" />
                                </Col>
                            </Row>

                            <br></br>

                            <Row>
                                <Col md={12}>
                                    <OrderableItem image="/image/lathe3.jpg" title="تنظیم زدن ثابت سیلندر" />
                                </Col>
                            </Row>

                            <br></br>

                            <Row>
                                <Col md={12}>
                                    <OrderableItem image="/image/lathe2.jpg" title="بازسازی شاتون زدگی سیلندر" />
                                </Col>
                            </Row>

                            <br></br>

                            <Row>
                                <Col md={12}>
                                    <OrderableItem image="/image/lathe1.jpg" title="کف تراشی سیلندر" />
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </div>
            </Container>

        </div>
    );
}

export default Order;