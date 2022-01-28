import React from 'react';
import classes from './ContactUsNumAndAddVerTwoItem.module.css';

const ContactUsNumAndAddVerTwoItem = (props) => {
    return (
        <div className={classes.root}>
            {props.description}

            {props.icon}
        </div>
    );
}

export default ContactUsNumAndAddVerTwoItem;