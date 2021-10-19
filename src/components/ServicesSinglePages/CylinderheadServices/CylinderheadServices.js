import React from 'react';
import NavigationBar from '../../NavigationBar/NavigationBar';
//import myStyle from './style';
import {Container} from 'react-bootstrap';
import CylinderheadServicesItem from './CylinderheadServicesItem/CylinderheadServicesItem';

function CylinderheadServices () {

    //const style = myStyle();

    return (
        <div>
            <NavigationBar />

            <Container>

                <CylinderheadServicesItem title="آب بندی سرسیلندر" imageSource="/image/CylinderheadWaterClosing.jpg"
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
                imageSourceAlt="CylinderheadShimClosing" paragraphhh="فاصله ی بین ساقه ی سوپاپ و میل سوپاپ قطعه ای قرار میگیرد که نام این قطعه شیم میباشد و با نازک و کلفت کردن شیم سرسیلندر ما شیم بندی میشود"/>

            </Container>
        </div>
    );
}

export default CylinderheadServices;