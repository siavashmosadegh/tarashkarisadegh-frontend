import React , {useEffect} from 'react';
import classes from './Welcome.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const Welcome = () => {

    useEffect(() => {
        Aos.init({duration: 500})
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.introdiv} data-aos="zoom-in">
                <div className={classes.introheaderdiv}>
                    <h1 className={classes.header}>به تراشکاری و میل لنگ تراشی ما خوش آمدید</h1>
                </div>
                <div className={classes.introparagraphdiv}>
                    <p className={classes.paragraf}>تراشکاری و میللنگ تراشی ما با بیش از ۲۵ سال سابقه ی درخشان در زمینه ی تراشکاری
                        و میل لنگ تراشی و جوشکاری و اینا و با داشتن بیش از ۱۰۰ مشتری ثابت و بر اساس استانداردهای بین‌المللی و همچنین با به کارگیری نیروی انسانی مجرب و متخصص آغاز نمود.تراشکاری صادق به عنوان یکی از شرکت‌های پیشرو در صنعت برش فلزات به وسیله دستگاه‌های برش لیزر، خط مشی خود را در جهت ارتقای صنعت کشور و افزایش سطح کیفی محصولات مرتبط قرار داده است.</p>
                </div>
            </div>
        </div>
    );
}

export default Welcome;