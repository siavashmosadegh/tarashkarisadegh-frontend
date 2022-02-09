import React from 'react';
import { Row , Col} from 'react-bootstrap';
//import {Link} from 'react-router-dom';
//import Iframe from 'react-iframe';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import classes from './Footer.module.css';
import {Link} from 'react-router-dom';

const Footer = () => {

    return (
        <div className={classes.root}>
                <Row>
                    <Col md={3}>
                        <h1 className={classes.header}>شبکه های اجتماعی</h1>
                        <br></br>

                        <div className={classes.social}>
                            <div>
                                <a href="https://www.instagram.com/melang_tarashi_sadegh/">
                                    <InstagramIcon style={{ fontSize: 40 , color: "white"}} />
                                </a>

                                <a href="https://www.youtube.com/channel/UCT3ORQT64ndL80wR6GeajVA">
                                    <YouTubeIcon style={{ fontSize: 40 , color: "white"}}/>
                                </a>

                                <a href="https://twitter.com/tarashkari">
                                    <TwitterIcon style={{ fontSize: 40 , color: "white"}} />
                                </a>
                                
                                <a href="https://t.me/sadeghmosadegh">
                                    <TelegramIcon style={{ fontSize: 40 , color: "white"}}/>
                                </a>
                                
                                <a href="https://www.linkedin.com/in/sadegh-mosadegh-60b344231/">
                                    <LinkedInIcon style={{ fontSize: 40 , color: "white"}}/>
                                </a>
                                {/* <WhatsAppIcon style={{ fontSize: 40 }}/>
                                <FacebookIcon style={{ fontSize: 40 }}/> */}

                                <a href="mailto:milangtarashisadegh@gmail.com">
                                    <MailIcon style={{ fontSize: 40 , color: "white"}}/>
                                </a>
                            </div>
                        </div>

                    </Col>

                    <Col md={3}>
                        <Link to="/cylinder">
                            <h1 className={classes.header}>انواع تعمیرات سیلندر</h1>
                        </Link>
                        <br></br>
                        <p className={classes.paragraff}>تعمیر جای بوش سیلندر</p>
                        <p className={classes.paragraff}>برقوی سیلندر</p>
                        <p className={classes.paragraff}>پلیش بعد از برقو</p>
                        <p className={classes.paragraff}>بوش زدن سیلندر</p>
                        <p className={classes.paragraff}>آزمایش سیلندر</p>
                        <p className={classes.paragraff}>تنظیم زدن ثابت سیلندر</p>
                        <p className={classes.paragraff}>بازسازی شاتون زدگی سیلندر</p>
                        <p className={classes.paragraff}>کف تراشی سیلندر</p>
                    </Col>

                    <Col md={3}>
                        <Link to="/cylinderhead">
                            <h1 className={classes.header}>انواع تعمیرات سرسیلندر</h1>
                        </Link>
                        <br></br>
                        <p className={classes.paragraff}>آب بندی سرسیلندر</p>
                        <p className={classes.paragraff}>کف تراشی سرسیلندر</p>
                        <p className={classes.paragraff}>سنگ زدن سرسیلندر</p>
                        <p className={classes.paragraff}>تعویض گایت</p>
                        <p className={classes.paragraff}>تعویض سیت</p>
                        <p className={classes.paragraff}>شیم بندی</p>
                    </Col>

                    <Col md={3}>
                        <h1 className={classes.header}>خدمات متفرقه</h1>
                        <br></br>
                        <p className={classes.paragraff}>سنگ زدن دنده های گیربکس</p>
                        <p className={classes.paragraff}>تعمیر و بازسازی اکسل عقب</p>
                        <p className={classes.paragraff}>تعویض و تابگیری چهارشاخه ی گاردون</p>
                        <p className={classes.paragraff}>جوشکاری آرگون</p>
                        <p className={classes.paragraff}>تاب گیری پوسته ی دفرانسیل و رفع لاستیک سایی</p>
                        <p className={classes.paragraff}>تعویض بلبرینگ چرخ جلو و عقب</p>
                    </Col>
                </Row>
        </div>
    );
}

export default Footer;