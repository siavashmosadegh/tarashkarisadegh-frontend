import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import classes from './MainPageServicesItem.module.css';

const MainPageServicesItem = (props) => {

    return (
        <div className={classes.root}>
            <h1 className={classes.header}>{props.header}</h1>
            <br></br>
            <p className={classes.paragraf}>{props.paragraf}</p>
            <br></br>
            <br></br>

            <Link to={props.routing}>
                <Button variant="success" className={classes.knowMoreButton}>بیشتر بدانید</Button>
            </Link>
        </div>
    );
}

export default MainPageServicesItem;