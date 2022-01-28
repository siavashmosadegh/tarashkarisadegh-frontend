import React from 'react';
import classes from './WhyItem.module.css';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BuildIcon from '@material-ui/icons/Build';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const WhyItem = (props) => {

    let icon;

    switch (props.icon) {
        case 0:
            icon = (<LocalShippingIcon fontSize="large" className={classes.materialIcon} />)
            break;
        case 1:
            icon = (<ThumbUpAltIcon fontSize="large" className={classes.materialIcon} />)
            break;
        case 2:
            icon = (<BuildIcon fontSize="large" className={classes.materialIcon} />)
            break;
        case 3:
            icon = (<AttachMoneyIcon fontSize="large" className={classes.materialIcon} />)
            break;
    }
    return (
        <div>
            <div className={classes.icon}>
                {icon}
            </div>

            <br></br>

            <h1 className={classes.header}>{props.header}</h1>

            <br></br>

            <p className={classes.paragraph}>{props.paragraph}</p>
        </div>
    );
}

export default WhyItem;