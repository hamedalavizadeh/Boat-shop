import styled from "styled-components";
export const NavShow = styled.nav`
width:100%;
`
export const ShowTag = styled.p`
font-size: 14px;
font-weight: bold;
letter-spacing:4px;
margin: auto;
text-align: center;
border-bottom: 2px solid #6db1f1;
width:106px;
padding-bottom: 3px;
`
export const Content = styled.div`
width:100%;
    height:500px;
    margin-top:100px;
    
`
export const ContentBox = styled.div`
margin-left: 16%;
@media screen and (max-width: 1100px) {
    margin-left:6%;
  }
  @media screen and (max-width: 900px) {
    margin-left:0;
    
  }
  @media screen and (max-width: 780px) {
    text-align:center;
    position: relative;
  }
`
export const NumberX = styled.h1`
font-size: 130px;
    font-weight: bold;
    color: #f9f9f9;
    @media screen and (max-width: 780px) {
        text-align:center;
      }
`
export const Subject = styled.h1`
font-weight: bold;
margin-top:-62px ;
position: absolute;
@media screen and (max-width: 780px) {
    text-align:center;
    position: relative;
  }
`
export const OnderLine = styled.div`
width:20px;
    height:3px;
    background: #6db1f1;
    margin-top: -10px;
    @media screen and (max-width: 780px) {
        display:none;
      }
`
export const Paragraf = styled.p`
width:350px;
    color:#8d8c8c;
    font-size: 16px;
    margin-top:30px;
    @media screen and (max-width: 900px) {
        font-size:14px;
        width:300px;
      }
      @media screen and (max-width: 780px) {
        margin: auto;
        margin-top:20px;
      }
`
export const More = styled.p`
margin-top:40px;
    letter-spacing: 4px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 12px;
    border-bottom: 3px solid  #6db1f1;
    width: 102px;
    padding-bottom: 4px;
    box-sizing: border-box;
    cursor: pointer;
     &:hover{
        opacity: 0.6;
    } 
    @media screen and (max-width: 780px) {
        margin:auto;
        margin-top:20px;
      }
`
export const RotTag = styled.p`
transform: rotate(-90deg);
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 4px;
    color:#cececf;
    position: absolute;
    margin-right:-70px;
    margin-top: 44px;
    @media screen and (max-width: 1250px) {
        margin-right:-40px;
      }
      @media screen and (max-width: 1250px) {
        margin-right:-44px;
      }
      @media screen and (max-width: 1100px) {
        margin-right:-24px;
      }
      @media screen and (max-width: 1000px) {
        margin-top:74px;
        margin-right:-114px;
      }
      @media screen and (max-width: 900px) {
        margin-right:-70px;
        
      }
      @media screen and (max-width: 780px) {
        display:none;
      }
`
export const ShowImgOne = styled.img`
width:124%;
    height:450px;
    margin-right:0px;
    @media screen and (max-width: 1250px) {
        height:400px;
        width:110%;
        margin-right:30px;
      }
      @media screen and (max-width: 1250px) {
        margin-right:30px;
      }
      @media screen and (max-width: 1100px) {
        margin-right:10%;
      }
      @media screen and (max-width: 1000px) {
        margin-right:-46px;
        height:350px;
        margin-top:30px;
      }
      @media screen and (max-width: 900px) {
        margin-right:0;
        
      }
      @media screen and (max-width: 780px) {
          width:100%;
      }
      @media screen and (max-width: 400px) {
          height:200px;
    }
`
export const RotTagtow = styled.p`
transform: rotate(-90deg);
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 4px;
    color:#cececf;
    position: absolute;
    margin-right:23.6%;
    margin-top:84px;
    @media screen and (max-width: 1200px) {
        margin-right: 30%;
    }
    @media screen and (max-width: 1000px) {
        display:none;
    }
`
export const ShowImgTow = styled.img`
width:74%;
    margin-top:40px;
    height:80%;
    margin-right: -60px;
    @media screen and (max-width: 1200px) {
        width:80%;
  }
  @media screen and (max-width: 1200px) {
    margin-right: 0px;
}
@media screen and (max-width: 1000px) {
    width:100%;
}
@media screen and (max-width: 780px) {
    margin-top:100px
}
@media screen and (max-width: 400px) {
    height:200px;
    margin-top:0px;
}
`
export const ClubBoxImage = styled.div`
width:100%;
    height:1000px;
    margin-top: -470px;
`
export const SahelImg = styled.img`
width: 100%;
    position: absolute;
    margin-top: 860px;
    z-index:-10;
    @media screen and (max-width: 1100px) {
        margin-top:980px
    }
    @media screen and (max-width: 768px) {
        margin-top:1700px
    }
`
export const ClubBox = styled.div`
width:100%;
    margin-top:460px;
    text-align: center;
    align-items: center;
    @media screen and (max-width: 1350px) {
        margin-top:380px;
      }
      @media screen and (max-width: 1250px) {
        margin-top:350px;
      }
      @media screen and (max-width: 1200px) {
        margin-top:300px;
      }
      @media screen and (max-width: 500px) {
        margin-top:200px;
    }
    @media screen and (max-width: 400px) {
        margin-top:0px;
    }
`
export const SubClub = styled.h1`
font-family:Georgia, 'Times New Roman', Times, serif;
    margin-top:50px;
    font-weight: bold;
`
export const ParClub = styled.p`
direction: ltr;
    color:#8d8c8c;
    font-size: 16px;
    margin-top:40px;
`
export const Buttons = styled.button`
cursor: pointer;
    height:44px;
    margin-top:30px; 
    position: absolute;
    width:50px;
    border:none;
    background: #6db1f1;
    &:hover{
        opacity: 0.8;
    }
`
export const Input = styled.input`
width:500px;
    margin-top:30px;
    height:44px;
    border: none;
    background-color: #f5f5f5;
   box-shadow:         inset 0 0 1px 0.1px #6b6969;
   margin-right:50px;
   direction: ltr;
   padding-left: 10px;
   font-weight: bold;
   font-size: 12px;
   color:#6b6969;
   @media screen and (max-width: 630px) {
    width:300px;
    @media screen and (max-width: 400px) {
        width:200px;
}
`
export const ShowImgThree = styled.img`
margin-right: -20px;
    width:100%;
    margin-top: 30px;
    height:84%;
    @media screen and (max-width: 1000px) {
        margin-right: 0px;
    }
    @media screen and (max-width: 768px) {
        display:none;
    }
`
export const CampTag = styled.p`
margin-top: 80px;
    margin-left: -70px;
    font-size:11px ;
    font-weight: bold;
    letter-spacing: 3px;
    color:#8d8c8c;
    @media screen and (max-width: 768px) {
        margin-left: 0;
        text-align:center;
    }
`
export const CampSub = styled.h3`
font-family:Georgia, 'Times New Roman', Times, serif;
    font-weight: bold;
    line-height: 40px;
    margin-left:-30px;
    margin-top: 50px;
    @media screen and (max-width: 768px) {
        margin-left: 0;
        text-align:center;
    }
`
export const CampLink = styled.p`
letter-spacing:4px;
    margin-left: -70px;
color:#6db1f1;
font-size: 11px;
font-weight: 1000;
border-bottom: 2px solid #6db1f1;
width:128px;
padding-bottom: 3px;
margin-top: 60px;
cursor: pointer;
&:hover{
    opacity:0.8;
}
@media screen and (max-width: 1000px) {
    margin-top:30px;
}
@media screen and (max-width: 768px) {
    margin: auto;
    margin-top: 20px;
}
`
export const Content2 = styled.div`
width:100%;
    height:500px;
    margin-top: -60px;
`
export const ImgLine = styled.img`
@media screen and (max-width: 768px) {
    margin-top:550px;
}
`
export const ContentBox2 = styled.div`
margin-left:16%;
@media screen and (max-width: 1200px) {
    margin-left:20%;
    margin-top:-40px;
}
@media screen and (max-width: 768px) {
    text-align:center;
    margin: auto;
    margin-top:400px;
}
@media screen and (max-width: 400px) {
    margin-top:40px;
}
`
