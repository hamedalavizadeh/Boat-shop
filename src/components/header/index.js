import React, { Fragment } from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    LogoImage,
    NavResMenu
} from './NavStyled';
import Logo from '../../images/logo/Logo.png';
import ResNavbar from './ResNavbar';

const Navbar = () => {

    return (
        <Fragment>
            <Nav>
                <NavLink to='/'>
                    <LogoImage src={Logo} alt='logo' />
                </NavLink>
                <NavMenu>
                    <NavLink to='/stores' activeStyle>
                        STORIES
                    </NavLink>
                    <NavLink to='/events' activeStyle>
                        EVENTS
                    </NavLink>
                    <NavLink to='/places' activeStyle>
                        PLACES
                    </NavLink>
                    <NavLink to='/boards' activeStyle>
                        BOARDS
                    </NavLink>
                </NavMenu>
            </Nav>
            <NavResMenu>
                {/* <MenuIcon sx={{ fontSize: 36 }} color="primary" /> */}
                <ResNavbar />
            </NavResMenu>
        </Fragment>
    )
}

export default Navbar;