import React, { Fragment, useState } from 'react';
import { Col, Row, Container } from "react-bootstrap";
import Img01 from '../../../images/Slide/01.jpg';
import Tmg02 from '../../../images/Slide/02.jpg';
import Img03 from '../../../images/Slide/03.jpg';
import Line from '../../../images/Icon/line.png';
import Sahel from '../../../images/Slide/backsool.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
    NavShow, ShowTag,
    Content, ContentBox, NumberX, Subject, OnderLine,
    Paragraf, More, RotTag, ShowImgOne, RotTagtow, ShowImgTow,
    ClubBoxImage, ClubBox, SubClub, ParClub, Buttons, Input, SahelImg,
    ShowImgThree, CampTag, CampSub, CampLink, Content2, ImgLine, ContentBox2
} from '../Style/ShowAllStyle';



const ShowAll = () => {

    const [email, setEmail] = useState('Y O U R  - M A I L');

    const ClickHandler = (e) => {
        e.preventdefault();
        console.log(email);
    }

    return (
        <Fragment>
            <SahelImg src={Sahel} />
            <NavShow>
                <Container>
                    <Row>
                        <Col sm={12} md={12}>
                            <ShowTag>SHOW ALL</ShowTag>
                        </Col>
                    </Row>
                    <Content>
                        <Row>
                            <Col sm={12} md={6} >
                                <ContentBox>
                                    <NumberX>01</NumberX>
                                    <Subject>Surf Training</Subject>
                                    <OnderLine></OnderLine>
                                    <Paragraf>By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.</Paragraf>
                                    <More>READ MORE</More>
                                </ContentBox>
                            </Col>
                            <Col sm={12} md={6} style={{ direction: 'rtl' }}>
                                <RotTag>SURF CAMPS</RotTag>
                                <ShowImgOne src={Img01} />
                            </Col>
                        </Row>
                    </Content>
                    <Content>
                        <Row>
                            <Col sm={12} md={6} style={{ direction: 'rtl' }}>
                                <RotTagtow>SURF CAMPS</RotTagtow>
                                <ShowImgTow src={Tmg02} className='ShowImgTow' />
                            </Col>
                            <Col sm={12} md={6} >
                                <ContentBox>
                                    <NumberX>02</NumberX>
                                    <Subject>Surf Training</Subject>
                                    <OnderLine></OnderLine>
                                    <Paragraf>By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.</Paragraf>
                                    <More>READ MORE</More>
                                </ContentBox>
                            </Col>
                        </Row>
                    </Content>
                    <Content>
                        <Row>
                            <ClubBoxImage>
                                <Col sm={12} md={12} style={{ direction: 'rtl' }}>
                                    <ClubBox>
                                        <ImgLine src={Line} />
                                        <SubClub>Join the Club</SubClub>
                                        <ParClub>By better understanding the various aspects of surfing, you will improve faster<br />
                                            and have more fun in the water.</ParClub>
                                        <form onSubmit={ClickHandler}>
                                            <Buttons type='submit' className='Buttons'>
                                                <ArrowForwardIosIcon sx={{ color: 'white' }} fontSize="small" />
                                            </Buttons>
                                            <Input type='email'
                                                value={email}
                                                onChange={(e) => { setEmail(e.target.value) }}
                                            />
                                        </form>
                                    </ClubBox>
                                </Col>
                            </ClubBoxImage>
                        </Row>
                    </Content>
                    <Content2>
                        <Row>
                            <Col sm={12} md={6} style={{ direction: 'rtl' }}>
                                <ShowImgThree src={Img03} className='ShowImgThree' />
                            </Col>
                            <Col sm={12} md={6} >
                                <ContentBox2>
                                    <CampTag>OUR CAMP</CampTag>
                                    <CampSub>CA 91932, USA<br />
                                        Imperial Beach<br />
                                        560 Silver Strand Blvd
                                    </CampSub>
                                    <CampLink>GET IN TOUCH</CampLink>
                                </ContentBox2>
                            </Col>
                        </Row>
                    </Content2>
                </Container>
            </NavShow >
        </Fragment >
    )
}

export default ShowAll;