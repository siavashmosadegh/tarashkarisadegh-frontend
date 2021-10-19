import React from 'react';
import { Carousel } from 'react-bootstrap';
import myStyle from './style';

function Caro () {

    const style = myStyle();

    return (
        <div className={style.root}>

                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/image/lathe4.jpg" alt="First slide" />
                        <Carousel.Caption>
                            <h1 className={style.firstHeader}>همیشه و در همه جا پر از خلاقیت</h1>
                            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src="/image/lathe5.jpg" alt="Second slide" />
                        <Carousel.Caption>
                            <h1 className={style.secondHeader}>آیا به بهترین ها فکر میکنید ؟ پس خوش آمدید</h1>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src="/image/lathe6.jpg" alt="Third slide" />
                        <Carousel.Caption>
                            <h1 className={style.thirdHeader}>این جا همان جاییست که باید باشید</h1>
                            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </div>
    );
}

export default Caro;