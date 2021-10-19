import React from 'react';
import myStyle from './style';

function AnotherHeader () {

    const style = myStyle();

    return (

        <div className={style.root}>

            <div>
                <img src="/image/lathe8.jpg" alt="aks" />
            </div>

            <div className={style.rightColumn}>
                <h1 className={style.rightColumnHeader}>بهترین ها را از ما بخواهید</h1>

                <br></br>

                <hr className={style.hrSomething} />

                <br></br>
                <br></br>
                        
                <h4 className={style.title}>تراشکاری و میل لنگ تراشی صادق</h4>
            </div>
            {/* <Row>
                <Col md={12} className={style.rightColumn}>
                    <h1 className={style.rightColumnHeader}>بهترین ها را از ما بخواهید</h1>

                    <br></br>

                    <hr className={style.hrSomething} />

                    <br></br>
                    <br></br>
                            
                    <h4 className={style.title}>تراشکاری و میل لنگ تراشی صادق</h4>
                </Col>
            </Row> */}
        </div>
    );
}

export default AnotherHeader;