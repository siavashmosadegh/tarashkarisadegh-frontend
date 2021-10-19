import React from 'react';
import {Container , Row , Col , Button} from 'react-bootstrap';
import myStyle from './style';

function ContactUsForm () {

    const style = myStyle();

    return (
        <div>
            <Container>
                <h1 className={style.header}>فرم تماس با تراشکاری</h1>

                <br></br>

                <p className={style.paragraphhhh}>اگر ایده ی ساخت قطعه ای در سر دارید یا به تعمیر چیزی فکر میکنید  یا در هر زمینه ی فنی ای نیاز به مشاوره دارید با تکمیل فرم زیر شروع کنید</p>

                <br></br>

                <Row>
                    <Col md={12}>
                        <input placeholder="نام و نام خانوادگی *" className={style.otherInputs}/>
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <input placeholder="شماره تلفن ثابت *" className={style.otherInputs}/>
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <input placeholder="شماره تلفن همراه *" className={style.otherInputs}/>
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <input placeholder="ایمیل" type="email" className={style.otherInputs} />
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <input placeholder="پیام شما" className={style.longInput} />
                    </Col>
                </Row>

                <br></br>

                <div className={style.sendButtonDiv}>
                    <Button variant="success" className={style.sendButton}>ارسال</Button>
                </div>

                {/* <Row>
                    <Col md={8}></Col>

                    <Col md={4}>
                        <Button variant="success" className={style.sendButton}>ارسال</Button>
                    </Col>
                </Row> */}

            </Container>
        </div>
    );
}

export default ContactUsForm;