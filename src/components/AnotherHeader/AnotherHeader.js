import React , {useState, useEffect} from 'react';
//import myStyle from './style';
import classes from './AnotherHeader.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const AnotherHeader = () => {

    useEffect(() => {
        Aos.init({duration: 3000})
    }, []);

    const [firstHeader, setFirstHeader] = useState(null);
    const [secondHeader, setSecondHeader] = useState(null);

    const timeouts = () => {
        setTimeout(() => {
            setFirstHeader(<h1 className={classes.rightColumnHeader}>بهترین ها را از ما بخواهید</h1>)
        },0);
        setTimeout(() => {
            setSecondHeader(<h4 className={classes.title}>تراشکاری و میل لنگ تراشی صادق</h4>)
        },0);
    }

    useEffect( () => {
        timeouts();
    },[]);

    return (
        <div className={classes.root}>

            <div className={classes.leftColumn}>
                <img className={classes.image} src="/image/lathe8.jpg" alt="aks" />
            </div>


            <div className={classes.rightColumnOuterDiv}>
                <div className={classes.rightColumn}>
                    {firstHeader}

                    <br></br>

                    <hr className={classes.hrSomething} />

                    <br></br>
                    <br></br>
                            
                    {secondHeader}
                </div>
            </div>
        </div>
    );
}

export default AnotherHeader;

/* <Row>
    <Col md={12} className={style.rightColumn}>
        <h1 className={style.rightColumnHeader}>بهترین ها را از ما بخواهید</h1>

        <br></br>

        <hr className={style.hrSomething} />

        <br></br>
        <br></br>
                
        <h4 className={style.title}>تراشکاری و میل لنگ تراشی صادق</h4>
    </Col>
</Row> */