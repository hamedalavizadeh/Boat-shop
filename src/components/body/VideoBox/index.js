import React, { Fragment, useState } from 'react';
import { NavBox, SubText, NameTag, Bximg, Patag, More, PlayIcon, VideoImg, VideoPlay } from '../Style/StyleVideoBox';
import { Col, Row, Container } from "react-bootstrap";
import Line from '../../../images/Icon/line.png';
import Bximgs from '../../../images/Slide/bximg.jpg';
import VideoImgs from '../../../images/Slide/video.jpg';
import Video from '../../../images/Video/6ceffb267bb0371b121d38990658fa9d21748982-360p.mp4';
import PlayIcons from '../../../images/Icon/play.png'

const styleCol = {
    marginTop: '100px',
    textAlign: 'center'
}

const VideoBox = () => {

    const [control, setControl] = useState(false);

    return (
        <Fragment >
            <NavBox>
                <Container>
                    <Row>
                        <Col sm={12} md={12} style={styleCol}>
                            <SubText>Surfing is the most blissful experience you can have<br />
                                on this planet, a taste of heaven.</SubText>
                            <NameTag>JOHN MCCARTHY</NameTag>
                            <img src={Line} />
                        </Col>
                    </Row>
                    <Row style={styleCol}>
                        <Col sm={12} md={6} >
                            <Bximg src={Bximgs} />
                            <Patag>By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.</Patag>
                            <More>Read More</More>
                        </Col>
                        <Col sm={12} md={6} >
                            {!control && <PlayIcon src={PlayIcons}
                                onClick={() => { setControl(true) }} />}
                            {!control && <VideoImg src={VideoImgs} />}
                            {control &&
                                <VideoPlay
                                    controls
                                    autoPlay='autoPlay'
                                    poster={VideoImg}
                                    onClick={() => { setControl(false) }}
                                >
                                    <source src={Video}
                                        type="video/mp4" />
                                </VideoPlay>
                            }
                        </Col>
                    </Row>
                </Container>
            </NavBox>
        </Fragment >
    )
}

export default VideoBox;