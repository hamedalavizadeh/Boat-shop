import React, { Fragment } from 'react';
import { Col, Row, Container } from "react-bootstrap";
import { LogoImg, BoxFooter, Tag, UlTag, BoxMenu, NavLink, NavMenu } from './FooterStyle';
import LogoImgs from '../../images/logo/Logo.png';


const Footer = () => {

    return (
        <Fragment>
            <Container>
                <BoxFooter>
                    <Row>
                        <Col sm={12} md={12}>
                            <LogoImg >
                                <img src={LogoImgs} />
                            </LogoImg>
                        </Col>
                        <Col sm={12} md={12}>
                            <BoxMenu>
                                <UlTag>
                                    <NavMenu>
                                        <Tag><NavLink to='/stores'>STORIES</NavLink></Tag>
                                        <Tag><NavLink to='/events'>EVENTS</NavLink></Tag>
                                        <Tag><NavLink to='/places'>PLACES</NavLink></Tag>
                                        <Tag><NavLink to='/boards'>BOARDS</NavLink></Tag>
                                    </NavMenu>
                                </UlTag>
                            </BoxMenu>
                        </Col>
                        <Col sm={12} md={12}>

                        </Col>
                    </Row>
                </BoxFooter>
            </Container>
        </Fragment>
    )
}

export default Footer;