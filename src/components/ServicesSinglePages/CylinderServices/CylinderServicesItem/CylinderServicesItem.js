import React from 'react';
import classes from './CylinderServicesItem.module.css';

const CylinderServicesItem = (props) => {

    return (
        <div className={classes.root}>
            <h1 className={classes.header}>{props.title}</h1>

            <br></br>

            <p className={classes.paragraf}>{props.paragraphhh}</p>

            <br></br>

            <img src={props.imageSource} alt={props.imageSourceAlt} className={classes.image} />
        </div>
    );
}

export default CylinderServicesItem;