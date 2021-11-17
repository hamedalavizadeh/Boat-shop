import React, { Fragment } from 'react';
import { Col, Row, Container } from "react-bootstrap";
import { ProductData } from './ProductData';
import OwlCarousel from 'react-owl-carousel3';
import {
    CarouselContainer, CarouselContentDiv, CarouselGrayDiv, CarouselImage,
    ShopTAg, ShopName, ProName, Price, TagPro, BuyTag, NavProduct
} from './products.styled'


const options = {
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='ri-arrow-left-s-line'></i>",
        "<i class='ri-arrow-right-s-line'></i>",
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
};

const Product = () => {

    return (
        <Fragment>
            <NavProduct>
                <Container>
                    <Row>
                        <Col sm={12} md={12}>
                            <ShopTAg className='Shop'>SHOP</ShopTAg>
                            <ShopName className='shopName'>SurFboards</ShopName>
                        </Col>
                    </Row>
                    <OwlCarousel
                        {...options}
                    >
                        {ProductData.map((item, index) => {
                            return (
                                <CarouselContainer>
                                    <CarouselGrayDiv />
                                    <CarouselImage style={{ width: 'auto', }} src={item.image} />
                                    <CarouselContentDiv>
                                        <TagPro>{item.tag}</TagPro>
                                        <ProName>{item.name}</ProName>
                                        <Price>${item.price}</Price>
                                        <BuyTag>BUY</BuyTag>
                                    </CarouselContentDiv>
                                </CarouselContainer>
                            )
                        })}
                    </OwlCarousel>


                </Container>

            </NavProduct>
        </Fragment >
    )
}

export default Product;