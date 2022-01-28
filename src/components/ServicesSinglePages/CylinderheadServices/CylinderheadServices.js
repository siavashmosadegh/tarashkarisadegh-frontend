import React , {useEffect} from 'react';
import classes from './CylinderheadServices.module.css';
import NavigationBar from '../../NavigationBar/NavigationBar';
import CylinderheadServicesItem from './CylinderheadServicesItem/CylinderheadServicesItem';
import Aos from 'aos';
import "aos/dist/aos.css";

const CylinderheadServices = () => {

    useEffect(() => {
        Aos.init({duration: 500})
    }, []);

    const dictionary = [
        [ "آب بندی سرسیلندر" , "/image/CylinderheadWaterClosing.jpg" , "CylinderheadWaterClosing" , "زمانی که راننده فشار زیادی به خودرو وارد میکند یا مقدار آبی که باعث خنکی موتور ماشین میشود کم هست و یا سیستم خنک کننده ی خودرو از کار افتاده است ، باعث میشود که آب بندی سوپاپ و سیت سرسیلندر دچار مشکل شود. پس از رخداد هر کدام از عوامل ذکر شده در بالا ، باعث سوختن سوپاپ ، سیت ، گشادی گایت میشود. برای برطرف کردن مشکل سیت ، با استفاده از روغن سمباده و سوپاپ نو و سیت سالم به صورتی که در فیلم زیر نمایش داده شده است ، سرسیلندر آب بندی و مشکل برطرف میشود." , null ],
        [ "کف تراشی سرسیلندر" , "/image/CylinderheadBottomShave.jpg" , "CylinderheadBottomShave" , "به علت شدت گرما و فشار مضاعفی که به موتور خودرو وارد شده و یا معیوب بودن سیستم خنک کننده ، سرسیلندر و سیلندر خودرو تاب برداشته و فاصله ی بین این دو از همدیگر زیاد میشود و همین امر باعث مخلوط شدن آب و روغن خواهد شد. به این علت سرسیلندر کف تراشی میشود" , "fade-left"],
        [ "سنگ زدن سرسیلندر" , "/image/CylinderheadRocking.jpg" , "CylinderheadRocking" , "سرسیلندری که از آب بندی خارج شده یا قبل از تعویض سیت یا بعد از آن نیاز به سنگ زدن دارد و سپس به راحتی آب بندی میشود که اینکار به دو طریق دستی و یا به کمک دستگاه های پیشرفته انجام میشود که میتوانید هر دو را در پایین مشاهده کنید." , "fade-right"],
        [ "تعویض گایت" , "/image/CylinderheadRocking.jpg" , "CylinderheadGitChange" , "به علت دود کردن زیاد خودرو و یا در مواردی خارج شدن سرسیلندر از آب بندی سرسیلندر خودرو نیاز به تعویض گایت سوپاپ دارد." , "flip-left"],
        [ "تعویض سیت" , "/image/CylinderheadRocking.jpg" , "CylinderheadSithChange" , "در مواردی سوختن سرسیلندر ، مشخصاً سیت سرسیلندر ، نیاز به تعویض سیت های آلیاژی و اورسایز دارد که آن را جایگزین میکنیم" , "flip-right" ],
        [ "برقو" , "/image/CylinderheadRocking.jpg" , "CylinderheadBorghooo" , "پس از تعویض گایت سرسیلندر و سوپاپ های اورسایز داخل گایت را برقو کاری کرده که خلاصی سوپاپ و گایت استاندارد شود" , "flip-up"],
        [ "شیم بندی" , "/image/CylinderheadRocking.jpg" , "CylinderheadShimClosing" , "فاصله ی بین ساقه ی سوپاپ و میل سوپاپ قطعه ای قرار میگیرد که نام این قطعه شیم میباشد و با نازک و کلفت کردن شیم سرسیلندر ما شیم بندی میشود" , "flip-down"]
    ]

    const cylinderHeadServices = dictionary.map( item => {
        return (
            <div className={classes.cylinderheaditemdiv} data-aos={item[4]}>
                <CylinderheadServicesItem 
                    key={item[0]}
                    title={item[0]}
                    imageSource={item[1]}
                    imageSourceAlt={item[2]}
                    paragraphhh={item[3]}
                />
                <br></br>
            </div>
        );
    }); 

    return (
        <div>
            <NavigationBar />

            <div className={classes.root}>
                {cylinderHeadServices}
            </div>
        </div>
    );
}

export default CylinderheadServices;

{/* <CylinderheadServicesItem title="آب بندی سرسیلندر" imageSource="/image/CylinderheadWaterClosing.jpg"
imageSourceAlt="CylinderheadWaterClosing" paragraphhh="زمانی که راننده فشار زیادی به خودرو وارد میکند یا مقدار آبی که باعث خنکی موتور ماشین میشود کم هست و یا سیستم خنک کننده ی خودرو از کار افتاده است ، باعث میشود که آب بندی سوپاپ و سیت سرسیلندر دچار مشکل شود. پس از رخداد هر کدام از عوامل ذکر شده در بالا ، باعث سوختن سوپاپ ، سیت ، گشادی گایت میشود. برای برطرف کردن مشکل سیت ، با استفاده از روغن سمباده و سوپاپ نو و سیت سالم به صورتی که در فیلم زیر نمایش داده شده است ، سرسیلندر آب بندی و مشکل برطرف میشود."/>

<br></br>
<br></br>

<CylinderheadServicesItem title="کف تراشی سرسیلندر" imageSource="/image/CylinderheadBottomShave.jpg"
imageSourceAlt="CylinderheadBottomShave" paragraphhh="به علت شدت گرما و فشار مضاعفی که به موتور خودرو وارد شده و یا معیوب بودن سیستم خنک کننده ، سرسیلندر و سیلندر خودرو تاب برداشته و فاصله ی بین این دو از همدیگر زیاد میشود و همین امر باعث مخلوط شدن آب و روغن خواهد شد. به این علت سرسیلندر کف تراشی میشود"/>

<br></br>
<br></br>

<CylinderheadServicesItem title="سنگ زدن سرسیلندر" imageSource="/image/CylinderheadRocking.jpg" 
imageSourceAlt="CylinderheadRocking" paragraphhh="سرسیلندری که از آب بندی خارج شده یا قبل از تعویض سیت یا بعد از آن نیاز به سنگ زدن دارد و سپس به راحتی آب بندی میشود که اینکار به دو طریق دستی و یا به کمک دستگاه های پیشرفته انجام میشود که میتوانید هر دو را در پایین مشاهده کنید."/>

<br></br>
<br></br>

<CylinderheadServicesItem title="تعویض گایت" imageSource="/image/CylinderheadRocking.jpg" 
imageSourceAlt="CylinderheadGitChange" paragraphhh="به علت دود کردن زیاد خودرو و یا در مواردی خارج شدن سرسیلندر از آب بندی سرسیلندر خودرو نیاز به تعویض گایت سوپاپ دارد."/>

<br></br>
<br></br>

<CylinderheadServicesItem title="تعویض سیت" imageSource="/image/CylinderheadRocking.jpg" 
imageSourceAlt="CylinderheadSithChange" paragraphhh="در مواردی سوختن سرسیلندر ، مشخصاً سیت سرسیلندر ، نیاز به تعویض سیت های آلیاژی و اورسایز دارد که آن را جایگزین میکنیم"/>

<br></br>
<br></br>

<CylinderheadServicesItem title="برقو" imageSource="/image/CylinderheadRocking.jpg" 
imageSourceAlt="CylinderheadBorghooo" paragraphhh="پس از تعویض گایت سرسیلندر و سوپاپ های اورسایز داخل گایت را برقو کاری کرده که خلاصی سوپاپ و گایت استاندارد شود"/>

<br></br>
<br></br>

<CylinderheadServicesItem title="شیم بندی" imageSource="/image/CylinderheadRocking.jpg" 
imageSourceAlt="CylinderheadShimClosing" paragraphhh="فاصله ی بین ساقه ی سوپاپ و میل سوپاپ قطعه ای قرار میگیرد که نام این قطعه شیم میباشد و با نازک و کلفت کردن شیم سرسیلندر ما شیم بندی میشود"/> */}
