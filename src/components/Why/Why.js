import React , {useEffect} from 'react';
import classes from './Why.module.css';
import WhyItem from './WhyItem/WhyItem';
import Aos from 'aos';
import "aos/dist/aos.css";

const Why = () => {

    useEffect(() => {
        Aos.init({duration: 500})
    }, []);

    return (
        <div className={classes.root}>

            <div className={classes.headerdivdiv}>
                <div className={classes.headerdiv} data-aos="zoom-in">
                    <h1 className={classes.header}>چرا تراشکاری صادق را انتخاب کنیم ؟</h1>            
                </div>
            </div>

            <br></br>

            <div className={classes.firstRow}>
                <div data-aos="flip-left" className={classes.div}>
                    <WhyItem icon={0} header="پیک رایگان" paragraph="هر جای ایران که باشید پیک ما به صورت رایگان قطعه ی شما را جا به جا میکند" />
                </div>
                <div data-aos="flip-right" className={classes.div}>
                    <WhyItem icon={3} header="قیمت مناسب" paragraph="انواع خدمات با ارزان ترین قیمت در اختیار شماست" />
                </div>
            </div>

            <br></br>
            <br></br>

            <div className={classes.firstRow}>
                <div data-aos="fade-right" className={classes.div}>
                    <WhyItem icon={2} header="دستگاه های پیشرفته" paragraph="تراشکاری ما با در دست داشتن به روز ترین دستگاه ها قطعات شما را تعمیر میکند" />
                </div>
                <div data-aos="fade-left" className={classes.div}>
                    <WhyItem icon={1} header="بالاترین کیفیت" paragraph="پرسنل مجرب ما قطعات شما را با بالاترین کیفیت تعمیر میکنند" />
                </div>
            </div>
        </div>
    );
}

export default Why;