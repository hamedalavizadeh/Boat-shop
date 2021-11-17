import styled from 'styled-components';

export const Navslider = styled.nav`
height:600px;
    margin-top:50px;
    position: relative;
    @media screen and (max-width: 1450px) {
        height:550px;
      }
      @media screen and (max-width: 1180px) {
        height:440px;
      }
      @media screen and (max-width: 970px) {
        height:380px;
      }
      @media screen and (max-width: 768px) {
        height:320px;
    }
    @media screen and (max-width: 570px) {
        height:240px;
    }
    @media screen and (max-width: 460px) {
        height:200px;
    }
    @media screen and (max-width: 375px) {
        height:160px;
    }
`
export const BoxSlider = styled.div`
width:75%;
    height:100%;
    float:right;
    direction:rtl;
    p{
        transform: rotate(-90deg);
    font-size: 16px;
    font-weight: bold;
    margin-top: 60px;
    position: absolute;
    word-spacing:6px;
    letter-spacing: 5px;
    margin-right:-40px;
    color:#cececf;
    @media screen and (max-width: 1350px) {
        margin-right:-70px;
      }
    @media screen and (max-width: 1250px) {
        margin-right:-76px;
      }
      @media screen and (max-width: 1180px) {
        font-size:12px;
        margin-right:-54px;
        margin-top: 40px;
      }
      @media screen and (max-width: 1100px) {
        margin-right:-76px;
      }
      @media screen and (max-width: 970px) {
          font-size:11px;
        margin-right:-80px;
        margin-top: 30px;
      }
      @media screen and (max-width: 850px) {
        margin-right:-96px;
    }
    @media screen and (max-width: 768px) {
        display:none;
    }
    }
`
export const ImageSlider = styled.img`
width:90%;
    height:100%;
    float:right;
    margin-right:14%;
    box-shadow: 0.3em 0.3em 3em rgba(0,0,0,0.5);
    @media screen and (max-width: 1100px) {
        margin-right:12%;
      } 
      @media screen and (max-width: 768px) {
        margin-right:10%;
    }
`
export const TextSlider = styled.div`
width:25%;
height:100%;
`
export const TitlePgf = styled.p`
margin-left: 8%;
    margin-top: 180px;
    color:#6db1f1;
    font-size: 18px;
    position: absolute;
    font-weight: bolder;
    letter-spacing: 6px;
    @media screen and (max-width: 1180px) {
        margin-top:130px;
      }
      @media screen and (max-width: 970px) {
        margin-top:100px;
        font-size:14px;
    }
    @media screen and (max-width: 768px) {
        margin-top:76px;
    }
    @media screen and (max-width: 650px) {
        font-size:12px;
    }
    @media screen and (max-width: 570px) {
        letter-spacing:3px;
        margin-top:50px;
    }
    @media screen and (max-width: 460px) {
        margin-top:36px;
        letter-spacing: 2px;
    }
    @media screen and (max-width: 375px) {
        font-size:10px;
        margin-top:44px;
    }
`
export const Subject = styled.h1`
margin-left: 8%;
    font-size: 68px;
    z-index: 2;
    position: absolute;
    margin-top:210px;
    color:rgb(27, 26, 26);
    @media screen and (max-width: 1450px) {
        font-size: 58px;
      }
      @media screen and (max-width: 1250px) {
        font-size: 54px;
      }
      @media screen and (max-width: 1180px) {
        font-size: 50px;
        margin-top:164px;
      }
      @media screen and (max-width: 970px) {
        margin-top:136px;
        font-size:44px;
    }
    @media screen and (max-width: 850px) {
        font-size:39px;
    }
    @media screen and (max-width: 768px) {
        margin-top:110px;
    }
    @media screen and (max-width: 650px) {
        font-size:34px;
    }
    @media screen and (max-width: 570px) {
        margin-top:80px;
        font-size:28px;
    }
    @media screen and (max-width: 460px) {
        margin-top:58px;
        font-size:24px;
    }
    @media screen and (max-width: 375px) {
        font-size:20px;
        margin-top:68px;
    }
`
export const CaptionTag = styled.p`
margin-left: 8%;
    margin-top: 300px;
    color:#8d8c8c;
    position: absolute;
    font-size: 16px;
    @media screen and (max-width: 1450px) {
        font-size: 14px;
      }
    @media screen and (max-width: 1250px) {
        font-size: 13px;
      }
      @media screen and (max-width: 1180px) {
        margin-top:236px;
        font-size: 12px
      }
      @media screen and (max-width: 970px) {
        margin-top:206px;
        font-size:11px;
    }
    @media screen and (max-width: 850px) {
        font-size:10px;
        margin-top:198px;
    }
    @media screen and (max-width: 768px) {
        margin-top:170px;
    }
    @media screen and (max-width: 650px) {
        font-size:9px;
    }
    @media screen and (max-width: 570px) {
        margin-top:124px;
        font-size:8px;
    }
    @media screen and (max-width: 460px) {
        margin-top:96px;
        width:150px;
        font-size:9px;
    }
    @media screen and (max-width: 375px) {
        display:none;
    }

`
export const ControlSlide = styled.div`
margin-left: 8%;
    margin-top: 570px;
    position: absolute;
    font-family: monospace;
    letter-spacing: 6px;
    font-weight: bold;
    @media screen and (max-width: 1450px) {
        margin-top:524px;
      }
      @media screen and (max-width: 1180px) {
        margin-top:410px;
      }
      @media screen and (max-width: 970px) {
        margin-top:356px; 
    }
    @media screen and (max-width: 768px) {
        margin-top:296px;
        letter-spacing:5px;
    }
    @media screen and (max-width: 570px) {
        margin-top:220px;
        font-size:12px;
        letter-spacing:2px;
    }
    @media screen and (max-width: 460px) {
        margin-top:180px;
        font-size:9px;
    }
    @media screen and (max-width: 375px) {
        margin-top:140px;
        margin-left:6%;
    }
`
export const BoxIcon = styled.div`
position: absolute;
     transform: rotate(-90deg);
     margin-top:500px;
     margin-right:20px;

     a img{
        padding: 20px 20px;
        transform: rotate(90deg);
     }
     @media screen and (max-width: 1350px) {
        margin-top:430px;
        margin-right:-10px;
      }
     @media screen and (max-width: 1250px) {
        margin-right:-12px;
        margin-top:450px;
      }
      @media screen and (max-width: 1180px) {
        margin-top:340px;
      }
      @media screen and (max-width: 1100px) {
        margin-right:-36px
      }
      @media screen and (max-width: 970px) {
        margin-top:280px;
        margin-right:-40px;
      }
        @media screen and (max-width: 850px) {
            margin-right:-60px;
    }
    @media screen and (max-width: 850px) {
        margin-right:-96px;
    }
    @media screen and (max-width: 768px) {
        display:none;
    }
`