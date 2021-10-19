import React from 'react';
import { Button } from 'react-bootstrap';
import myStyle from './style';
import {Link} from 'react-router-dom';

function MainPageServicesItem (props) {

    const style = myStyle();

    return (
        <div>
            <h1 className={style.header}>{props.header}</h1>
            <br></br>
            <p className={style.paragraf}>{props.paragraf}</p>
            <br></br>
            <br></br>

            <Link to={props.routing}>
                <Button variant="success" className={style.knowMoreButton}>بیشتر بدانید</Button>
            </Link>
        </div>
    );
}

export default MainPageServicesItem;