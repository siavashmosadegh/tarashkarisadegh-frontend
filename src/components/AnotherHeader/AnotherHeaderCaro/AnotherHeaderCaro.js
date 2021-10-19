import React from 'react';
import myStyle from './style';
import { Carousel } from 'react-bootstrap';

function AnotherHeaderCaro () {

    const style = myStyle();

    return (
        <div className={style.root}>
                <Carousel>
                    <Carousel.Item>
                        <img src="/image/lathe8.jpg" alt="First slide" className={style.carouselImage} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src="/image/lathe7.jpg" alt="Second slide" className={style.carouselImage} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src="/image/lathe4.jpg" alt="Third slide" className={style.carouselImage} />
                    </Carousel.Item>
                </Carousel>
        </div>
    );
}

export default AnotherHeaderCaro;