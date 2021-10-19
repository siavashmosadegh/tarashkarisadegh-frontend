import React from 'react';
import { Row , Col} from 'react-bootstrap';
//import {Link} from 'react-router-dom';
//import Iframe from 'react-iframe';
import myStyle from './style';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';

function Footer () {

    const style = myStyle();

    return (
        <div className={style.root}>
                <Row>
                    <Col md={3}>

                    </Col>

                    <Col md={3}>
                        <h1 className={style.header}>شبکه های اجتماعی</h1>
                        <br></br>

                        <div className={style.social}>
                            <div>
                                <a href="https://www.instagram.com/tarashkari_sadegh/">
                                    <InstagramIcon style={{ fontSize: 40 }} />
                                </a>
                                <br></br>
                                
                                <YouTubeIcon style={{ fontSize: 40 }}/>
                                <br></br>

                                <a href="https://twitter.com/tarashkari">
                                    <TwitterIcon style={{ fontSize: 40 }} />
                                </a>
                                <br></br>
                                
                                <TelegramIcon style={{ fontSize: 40 }}/>
                                <br></br>
                                <LinkedInIcon style={{ fontSize: 40 }}/>
                                <br></br>
                                <WhatsAppIcon style={{ fontSize: 40 }}/>
                                <br></br>
                                <FacebookIcon style={{ fontSize: 40 }}/>
                                <br></br>
                                <MailIcon style={{ fontSize: 40 }}/>
                            </div>
                        </div>

                    </Col>

                    <Col md={3}>
                        <h1 className={style.header}>انواع تعمیرات سیلندر</h1>
                        <br></br>
                        <p className={style.paragraff}>تعمیر جای بوش سیلندر</p>
                        <p className={style.paragraff}>برقوی سیلندر</p>
                        <p className={style.paragraff}>پلیش بعد از برقو</p>
                        <p className={style.paragraff}>بوش زدن سیلندر</p>
                        <p className={style.paragraff}>آزمایش سیلندر</p>
                        <p className={style.paragraff}>تنظیم زدن ثابت سیلندر</p>
                        <p className={style.paragraff}>بازسازی شاتون زدگی سیلندر</p>
                        <p className={style.paragraff}>کف تراشی سیلندر</p>
                    </Col>

                    <Col md={3}>
                        <h1 className={style.header}>انواع تعمیرات سرسیلندر</h1>
                        <br></br>
                        <p className={style.paragraff}>آب بندی سرسیلندر</p>
                        <p className={style.paragraff}>کف تراشی سرسیلندر</p>
                        <p className={style.paragraff}>سنگ زدن سرسیلندر</p>
                        <p className={style.paragraff}>تعویض گایت</p>
                        <p className={style.paragraff}>تعویض سیت</p>
                        <p className={style.paragraff}>شیم بندی</p>
                    </Col>
                </Row>
        </div>
    );
}

export default Footer;