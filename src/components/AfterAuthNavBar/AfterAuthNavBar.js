import React from 'react';
import { Navbar , Nav , Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import classes from './AfterAuthNavBar.module.css';

function AfterAuthNavBar (props) {
    
    return(
        <div className={classes.root}>
            <Navbar dir="rtl" className={classes.NavBarDige}>
                <Nav>
                    <Nav.Link>
                        <Link to="/staff">
                            <Button variant="link" style={{fontSize: '20px',color: 'white'}}>ثبت سفارش</Button>
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/login">
                            <Button variant="link" style={{fontSize: '20px',color: 'white'}}>ویرایش اطلاعات پروفایل</Button>
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/myorders">
                            <Button variant="link" style={{fontSize: '20px',color: 'white'}}>سفارش های من</Button>
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/logout">
                            <Button variant="link" style={{fontSize: '20px',color: 'white'}}>خروج</Button>
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default AfterAuthNavBar;