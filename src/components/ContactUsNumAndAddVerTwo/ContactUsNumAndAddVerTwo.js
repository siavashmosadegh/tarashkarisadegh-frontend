import React from 'react';
import ContactUsNumAndAddVerTwoItem from './ContactUsNumAndAddVerTwoItem/ContactUsNumAndAddVerTwoItem';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import ScheduleIcon from '@material-ui/icons/Schedule';
import classes from './ContactUsNumAndAddVerTwo.module.css';

const ContactUsNumAndAddVerTwo = () => {

    const dictionary = [
        [ <LocationOnIcon /> , "جاده ساوه ، نسیم شهر ، اسماعیل آباد ، بلوار امام خمینی ، نبش خیابان شهید قاسمی"],
        [ <PhoneIcon /> , "02156754223"],
        [ <PhoneIcon /> , "09122773647"],
        [ <PhoneIcon /> , "09122093612"],
        [ <TwitterIcon /> , "@TarashkariSadegh"],
        [ <InstagramIcon /> , "tarashkari_sadegh"],
        [ <EmailIcon /> , "tarashkarisadegh@yahoo.com"],
        [ <ScheduleIcon /> , "شنبه تا پنج شنبه ۱۰ صبح تا ۸ شب"]
    ]

    let form = dictionary.map( item => {
        return (
            <div>
                <ContactUsNumAndAddVerTwoItem icon={item[0]} description={item[1]} />
                <br></br>
            </div>
        )
    })

    return (
        <div className={classes.root}>
            <h1 className={classes.header}>تماس با تراشکاری</h1>

            <br></br>

            {form}
        </div>
    );
}

export default ContactUsNumAndAddVerTwo;