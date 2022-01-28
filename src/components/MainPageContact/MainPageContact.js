import React , {useEffect} from 'react';
//import ContactUsNumbersAndAddresses from '../ContactUsNumbersAndAddresses/ContactUsNumbersAndAddresses';
import Iframe from 'react-iframe';
import ContactUsNumAndAddVerTwo from '../ContactUsNumAndAddVerTwo/ContactUsNumAndAddVerTwo';
import classes from './MainPageContact.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const MainPageContact = () => {

    useEffect(() => {
        Aos.init({duration: 500})
    }, []);

    return (
        <div className={classes.root}>

            <div className={classes.leftdiv}  data-aos="zoom-in-right">
                <ContactUsNumAndAddVerTwo />
            </div>

            <div className={classes.rightdiv}  data-aos="zoom-in-left">
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214.94542327188327!2d51.17428081732125!3d35.55113693957162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f92098310e1bf31%3A0x14fc6f8b31f556f9!2z2KrYsdin2LTZg9in2LHZiSDZiCDZhdmK2YQg2YTZhtqvINiq2LHYp9i02Ykg2LXYp9iv2YI!5e0!3m2!1sen!2s!4v1617603609032!5m2!1sen!2s" width="100%" height="600" loading="lazy" /> 
            </div>
        </div>
    );
}

export default MainPageContact;