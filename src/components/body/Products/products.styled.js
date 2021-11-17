import styled from 'styled-components'
import Sahel from '../../../images/Slide/sahel.jpg';
export const NavProduct = styled.div`
width:100%;
    height:1000px;
    margin-top:-240px;
    background-color: bisque;
    background: url(${Sahel});
}
`
export const CarouselContainer = styled.div`
    height: 450px;
    display: flex;
    position: relative;
    margin-top: 50px;
    `

export const CarouselGrayDiv = styled.div`
    left: 0;
    bottom: 0;
    width: 55%;
    height: 70%;
    position: absolute;
    background-color: #e3e3e3;
    @media screen and (max-width: 768px) {
        width:40%;
    }
    @media screen and (max-width: 520px) {
        width:44%;
    }
    @media screen and (max-width: 500px) {
        width:48%;
    }
    @media screen and (max-width: 450px) {
        width:54%;
    }
    @media screen and (max-width: 400px) {
        width:66%;
    }
    `

export const CarouselImage = styled.img`
    height: 100%;
    margin-top: -40px;
    margin-left: 10px;
    @media screen and (max-width: 1400px) {
        margin-left:0px;
      }
      @media screen and (max-width: 1200px) {
        margin-left:20px;
      }
      @media screen and (max-width: 1000px) {
        margin-left:-6px;
      }
      @media screen and (max-width: 768px) {
        margin-left:0px;
    }
    `

export const CarouselContentDiv = styled.div`
    flex: 1;
    z-index: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const ShopTAg = styled.p`
    text-align: center;
    margin-top: 360px;
    color:#6db1f1;
    font-size: 16px;
    font-weight: bolder;
    letter-spacing: 6px;
`
export const ShopName = styled.h1`
text-align: center;
    font-weight: bolder;
    margin-top:-18px;
`
export const ProName = styled.h4`
margin-top:150px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    @media screen and (max-width: 1400px) {
        font-size:20px;
      }
      @media screen and (max-width: 1200px) {
        font-size:24px;
      }
      @media screen and (max-width: 1000px) {
        font-size:20px;
        margin-left:-20px;
      }
      @media screen and (max-width: 400px) {
        font-size:16px;
    }
`
export const Price = styled.p`
color:#ce60a8;
    font-size: 22px;
    margin-top: 20px;
    margin-left: 50px;
    @media screen and (max-width: 1200px) {
        margin-left:60px;
      }
      @media screen and (max-width: 1000px) {
        margin-left:30px;
      }
      @media screen and (max-width: 400px) {
        margin-left:20px;
    }
`
export const TagPro = styled.p`
color:#7a7a7a;
    position: absolute;
    margin-top: 20px;
    font-size: 16px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    @media screen and (max-width: 1400px) {
        font-size:14px;
      }
      @media screen and (max-width: 1200px) {
        font-size:16px;
      }
      @media screen and (max-width: 1000px) {
        font-size:14px;
        margin-left:-20px;
      }
`
export const BuyTag = styled.p`
font-size:10px;
font-weight: 1000;
letter-spacing:3px;
margin-left: 50px;
margin-top:-16px;
cursor:pointer;
&:hover{
    opacity:0.8;
    font-size:12px;
}
@media screen and (max-width: 1200px) {
    margin-left:60px;
  }
  @media screen and (max-width: 1000px) {
    margin-left:30px;
  }
  @media screen and (max-width: 400px) {
    margin-left:20px;
}
`