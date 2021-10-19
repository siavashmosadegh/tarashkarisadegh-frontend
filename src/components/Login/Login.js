import React from 'react';
import { Container , Button , Row , Col } from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar';
import myStyle from './style';
import {Link} from 'react-router-dom';

function Login () {

    const style = myStyle();

    return (
        <div className={style.root}>

            <NavigationBar />

            <br></br>
            <br></br>
            
            <h1 className={style.firstHeader}>ورود به حساب کاربری</h1>

            <br></br>

            <h6 className={style.secondHeader}>اگر هنوز حساب کاربری ایجاد نکردید دکمه ی پایین را بزنید تا به صفحه ی ایجاد حساب کاربری منقتل شوید</h6>

            <br></br>

            <Container>

                {/* <Row>
                    <Col md={4}>    
                    </Col>

                    <Col md={4}>
                        <Link to="/register">
                            <Button variant="warning" style={{width: "100%",height: "auto"}}>هدایت به صفحه ی ایجاد حساب</Button>
                        </Link>
                    </Col>

                    <Col md={4}>
                    </Col>
                </Row> */}

                <div className={style.goToRegisterButtonDiv}>
                    <Link to="/register">
                        <Button variant="warning" className={style.goToRegisterButton}>هدایت به صفحه ی ایجاد حساب</Button>
                    </Link>
                </div>

                <br></br>
                <br></br>
                <br></br>

                <Row>
                    <Col md={6}>
                        <input placeholder="کلمه ی عبور" className={style.input} />
                    </Col>
                    <Col md={6}>
                        <input placeholder="نام کاربری" className={style.input} />
                    </Col>
                </Row>

                <br></br>

                <div className={style.loginButtonDiv}>
                    <Link to="/afterloginorregister">
                        <Button variant="success" className={style.loginButton}>ورود</Button>
                    </Link>
                </div>

                {/* <Row>
                    <Col md={5}>
                    </Col>

                    <Col md={2}>
                        <Link to="/afterloginorregister">
                            <Button variant="success" className={style.loginButton}>ورود</Button>
                        </Link>
                    </Col>

                    <Col md={5}>
                    </Col>
                </Row> */}
            </Container>
        </div>
    );
}

export default Login;