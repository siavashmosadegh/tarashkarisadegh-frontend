import React , { useState , useEffect} from 'react';
import myStyle from './style';
import { Container , Row , Col , Button} from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar';
import {Link} from 'react-router-dom';
import {InputValidation} from './InputValidation';

function Register () {

    const [name, setName] = useState('');
    useEffect(() => {
        console.log('name', name);
    },[name])
////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function CheckingEmptyness () {
    
        
    
        const username = document.getElementById('username').innerHTML;
    
        const password = document.getElementById('password').innerHTML;
    
        const nameOfTheWorkplace = document.getElementById('nameOfTheWorkplace').innerHTML;
    
        const workplaceTelephoneNumber = document.getElementById('workplaceTelephoneNumber').innerHTML;
    
        const ownerMobileNumber = document.getElementById('ownerMobileNumber').innerHTML;
    
        const address = document.getElementById('address').innerHTML;
    
        //alert(username);
    
        // if (username == "") {
        //     alert("نام کاربری را وارد کنید");
        // }
    
        // if (password == "" && username != "") {
        //     alert("کلمه ی عبور را وارد کنید");
        // }
    
        // if (ownerFirstAndLastName == "" && password != "" && username != "") {
        //     alert("نام و نام خانوادگی صاحب کسب و کار وارد کنید");
        // }
    
        // if (ownerMobileNumber === "") {
        //     alert ("شماره موبایل صاحب کسب و کار را وارد کنید");
        // }
    
        // if (workplaceTelephoneNumber === "") {
        //     alert("تلفن ثابت مغازه را وارد کنید");
        // }
    
        // if (nameOfTheWorkplace === "") {
        //     alert("نام مکانیکی را وارد کنید");
        // }
    
        // if (address === "") {
        //     alert("آدرس را وارد کنید");
        // }
    }

    //////////////////////////

    const style = myStyle();

    return (

        <div className={style.root}>

            <NavigationBar />

            <br></br>
            <br></br>

            <h1 className={style.header}>ثبت نام</h1>

            <br></br>

            <h6 className={style.secondHeader}>اگر حساب کاربری دارید ، دکمه ی پایین را بزنید تا به صفحه ی ورود به حساب کاربری منتفل شوید</h6>

            <br></br>

            <Container>
                {/* <Row>
                    <Col md={4}>    
                    </Col>

                    <Col md={4}>
                        <Link to="/login">
                            <Button variant="warning" style={{width: "100%",height: "auto"}}>هدایت به صفحه ی ورود به حساب</Button>
                        </Link>
                    </Col>

                    <Col md={4}>
                    </Col>
                </Row> */}

                <div className={style.goToLoginButtonDiv}>
                    <Link to="/login">
                        <Button variant="warning" className={style.goToLoginButton}>هدایت به صفحه ی ورود به حساب</Button>
                    </Link>
                </div>

                <br></br>
                <br></br>
                <br></br>

                <Row>
                    <Col md={4}>
                        <input placeholder="نام و نام خانوادگی صاحب کسب و کار" className={style.nameInputs} id="owner"></input>
                    </Col>
                    <Col md={4}>
                        <input placeholder="کلمه ی عبور" className={style.nameInputs} id="username"></input>
                    </Col>
                    <Col md={4}>
                        <input placeholder="نام کاربری" className={style.nameInputs} id="password"></input>
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={4}>
                    <InputValidation
                                value={name}
                                validations={{required: true}}>
                            <input onChange={(e) => setName(e.target.value)} placeholder="نام مکانیکی" className={style.nameInputs} id="nameOfTheWorkplace" />
                    </InputValidation>
                        
                    </Col>
                    <Col md={4}>
                        <input placeholder="تلفن ثابت مغازه" className={style.nameInputs} id="workplaceTelephoneNumber"></input>
                    </Col>
                    <Col md={4}>
                        <input placeholder="شماره همراه صاحب کسب و کار" className={style.nameInputs} id="ownerMobileNumber"></input>
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col md={12}>
                        <input placeholder="آدرس دقیق مکانیکی" className={style.addressInput} id="address"></input>
                    </Col>
                </Row>

                <br></br>

                <div className={style.registerButtonDiv}>
                    <Link to="/afterloginorregister">
                        <Button variant="success" className={style.registerButton} onClick={CheckingEmptyness}>ثبت نام</Button>
                    </Link>
                </div>

                <br></br>

                {/* <Row>
                    <Col md={5}>
                    </Col>

                    <Col md={2}>
                        <Link to="/afterloginorregister">
                            <Button variant="success" className={style.registerButton} onClick={CheckingEmptyness}>ثبت نام</Button>
                        </Link>
                    </Col>

                    <Col md={5}>
                    </Col>
                </Row> */}

            </Container>
        </div>
    );
}



export default Register;