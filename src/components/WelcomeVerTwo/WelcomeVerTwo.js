import React , {useState,useEffect} from 'react';
import classes from './WelcomeVerTwo.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";
const WelcomeVerTwo = () => {

    useEffect(() => {
        Aos.init({duration: 3000})
    }, []);

    const [firstParagraph, setFirstParagraph] = useState(null);
    const [secondParagraph, setSecondParagraph] = useState(null);
    const [thirdParagraph, setThirdParagraph] = useState(null);
    const [fourthParagraph, setFourthParagraph] = useState(null);

    const timeouts = () => {
        setTimeout(() => {
            setFirstParagraph(<p className={classes.paragraph}>تراشکاری و میللنگ تراشی ما با بیش از ۲۵ سال سابقه ی درخشان در زمینه ی تراشکاری و میل لنگ تراشی</p>)
        },0);
        setTimeout(() => {
            setSecondParagraph(<p className={classes.paragraph}>و با داشتن بیش از ۱۰۰ مشتری ثابت و بر اساس استانداردهای بین‌المللی و همچنین با به کارگیری نیروی</p>)
        },2000);
        setTimeout(() => {
            setThirdParagraph(<p className={classes.paragraph}>انسانی مجرب و متخصص به عنوان یکی از شرکت‌های پیشرو در صنعت برش فلزات و تعمیر قطعات انواع خودرو ها</p>)
        },4000);
        setTimeout(() => {
            setFourthParagraph(<p className={classes.paragraph}>و ماشین آلات صعنتی به شمار میرود و خط مشی خود را در جهت ارتقای صنعت کشور و افزایش سطح کیفی محصولات مرتبط قرار داده است</p>)
        },6000);
    }

    useEffect( () => {
        timeouts();
    },[]);
    return (
        <div className={classes.root} data-aos="fade-up">
            <h1 className={classes.header}>به تراشکاری و میل لنگ تراشی ما خوش آمدید</h1>

            <br></br>

            {firstParagraph}

            <br></br>

            {secondParagraph}

            <br></br>

            {thirdParagraph}

            <br></br>

            {fourthParagraph}
        </div>
    );
}

export default WelcomeVerTwo;