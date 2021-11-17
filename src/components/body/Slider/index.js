import React, { Fragment, useState } from 'react';
import {
    Navslider,
    BoxSlider,
    ImageSlider,
    TextSlider,
    TitlePgf,
    Subject,
    CaptionTag,
    ControlSlide,
    BoxIcon
} from '../Style/Sliderstyle'
import { SliderData, Icons } from './SliderData';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "bootstrap/dist/css/bootstrap.css";


const prevNext = {
    cursor: 'pointer'
}
const Slider = () => {
    const [count, setCount] = useState(1);

    const PrevSlide = () => {
        if (count === 1) {
            setCount(SliderData.length)
        } else {
            setCount(count - 1);
        }
    }

    const NextSlide = () => {
        if (count === SliderData.length) {
            setCount(1)
        } else {
            setCount(count + 1)
        }
    }
    return (
        <Fragment>
            {
                SliderData.map((item, index) => {
                    if (index + 1 === count) {
                        return (
                            <Navslider>
                                <BoxSlider>
                                    <p>First Surfing Magazine</p>
                                    <BoxIcon>
                                        <a href='#'>
                                            <img src={Icons.icon1} />
                                        </a>
                                        <a href='#'>
                                            <img src={Icons.twitter} />
                                        </a>
                                        <a href='#'>
                                            <img src={Icons.vimeo} />
                                        </a>
                                    </BoxIcon>
                                    <ImageSlider src={item.src} />
                                </BoxSlider>
                                <TextSlider>
                                    <TitlePgf >{item.title.toUpperCase()}</TitlePgf>
                                    <Subject >{item.subject}</Subject>
                                    <CaptionTag >One of the greatest things about the sport of surfing is<br /> that you need only three things: your body,
                                        <br />a surfboard, and a wave.</CaptionTag>
                                    <ControlSlide >
                                        <ArrowBackIosNewIcon fontSize="small" color="disabled" style={prevNext} onClick={PrevSlide} />
                                        <span style={{ color: '#6db1f1' }}>{count}</span>/5
                                        <ArrowForwardIosIcon fontSize="small" color="disabled" style={prevNext} onClick={NextSlide} />
                                    </ControlSlide>
                                </TextSlider>
                            </Navslider>
                        )
                    }

                })
            }
        </Fragment >

    )
}

export default Slider;
