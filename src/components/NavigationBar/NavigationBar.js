import React from 'react';
import { Navbar , Nav , Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import myStyle from './style';

function NavigationBar (props) {

    const style = myStyle();
    
    return(
        <div className={style.root}>
            <Navbar dir="rtl" className={style.NavBarDige}>
                <Nav>
                    <Nav.Link>
                        <Link to="/">
                            <Button variant="link" className={style.navBarButtons}>صفحه اصلی</Button>
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="contactus">
                            <Button variant="link" className={style.navBarButtons}>تماس با ما</Button>
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        {!props.isAuthenticated 
                            ?
                            <Link to="/register">
                                <Button variant="link" className={style.navBarButtons}>ثبت نام</Button>
                            </Link>
                            :
                            <Link to="/logout">
                                <Button variant="link" className={style.navBarButtons}>خروج</Button>
                            </Link>
                        }
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/services">
                            <Button variant="link" className={style.navBarButtons}>خدمات ما</Button>
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/login">
                            <Button variant="link" className={style.navBarButtons}>ورود</Button>
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/panel">
                            <Button variant="link" className={style.navBarButtons}>پنل ادمین</Button>
                        </Link>
                    </Nav.Link>

                    {/* <Nav.Link>
                        <Link to="/staff">
                            <Button variant="link" className={style.navBarButtons}>پرسنل</Button>
                        </Link>
                    </Nav.Link> */}

                    <Nav.Link>
                        {props.isAuthenticated
                            ?
                            <Link to="/staff">
                                <Button variant="link" className={style.navBarButtons}>پرسنل</Button>
                            </Link>
                            :
                            null
                        }
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavigationBar;