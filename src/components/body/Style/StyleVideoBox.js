import styled from "styled-components";

export const NavBox = styled.nav`
width:100%;
margin-top:60px;
@media screen and (max-width: 700px) {
    margin-top:0px;
      }
`
export const SubText = styled.h4`
line-height: 36px;
    font-family:Arial, Helvetica, sans-serif;
    color:#474747;
`
export const NameTag = styled.p`
margin-top:20px;
    letter-spacing: 3px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-bottom: 56px;
}
`
export const Bximg = styled.img`
width:658px;
    height:390px;
    margin-top: -50px;
    margin-left: -12px;
    @media screen and (max-width: 1350px) {
        width:570px;
        height:350px;
          }
          @media screen and (max-width: 1200px) {
            width:480px;
            height:320px;
              }
              @media screen and (max-width: 1000px) {
                width:400px;
                height:280px;
                margin-left:-54px;
                  }
                  @media screen and (max-width: 800px) {
                    margin-left:auto;
                    width:100%;
                      }
                      @media screen and (max-width: 600px) {
                        margin-left:auto;
                        width:70%;
                          }
                          @media screen and (max-width: 550px) {
                            width:84%;
                              }
                              @media screen and (max-width: 440px) {
                                height:230px;
                                  }
`
export const Patag = styled.p`
width:350px;
    color:#8d8c8c;
    font-size: 16px;
    text-align: start;
    margin-top: 50px;
    margin-left:110px;
    @media screen and (max-width: 1350px) {
        margin-top:40px;
        margin-left:80px;
          }
          @media screen and (max-width: 1200px) {
            font-size: 14px;
            margin-left:40px;
            width:290px;
              }
              @media screen and (max-width: 1000px) {
                font-size:12px;
                margin-left:-20px;
                width:250px;
                  }
                  @media screen and (max-width: 800px) {
                    text-align: center;
                    margin: auto;
                    margin-top: 40px;
                      }
          
`
export const More = styled.p`
margin-top:30px;
    letter-spacing: 4px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-left:100px;
    font-size: 16px;
    border-bottom: 3px solid  #6db1f1;
    width: 120px;
    padding-bottom: 8px;
    box-sizing: border-box;
    &:hover{
        opacity: 0.6;
        cursor:pointer;
    } 
    @media screen and (max-width: 1350px) {
        margin-left:74px;
          }
          @media screen and (max-width: 1200px) {
            font-size: 13px;
            margin-left:30px;
            width:90px;
            padding-bottom:6px;
            letter-spacing:2px;
              }
              @media screen and (max-width: 1000px) {
                font-size:11px;
                margin-left:-20px;
                width:76px;
                  }
                  @media screen and (max-width: 800px) {
                    text-align: center;
                    margin: auto;
                    margin-top: 40px;
                      }
`
export const PlayIcon = styled.img`
position: absolute;
    margin-top: 236px;
    margin-left: 194px;
    cursor: pointer;
    &:hover{
        opacity:0.8;
    }
    @media screen and (max-width: 1350px) {
        margin-left: 184px;
        margin-top:216px;
          }
          @media screen and (max-width: 1200px) {
            margin-left: 130px;
            margin-top:192px;
              }
              @media screen and (max-width: 1000px) {
                margin-left: 102px;
                margin-top:168px;
                  }
                  @media screen and (max-width: 800px) {
                      margin-top:190px;
                      margin-left: 200px;
                      }
                      @media screen and (max-width: 600px) {
                        margin-top:164px;
                        width:80px;
                        margin-left:150px;
                          }
                          @media screen and (max-width: 550px) {
                            margin-left:160px;
                              }
                              @media screen and (max-width: 500px) {
                                margin-left:140px;
                                  }
                                  @media screen and (max-width: 440px) {
                                    margin-top:130px;
                                    margin-left:110px;

                                      }
                                      @media screen and (max-width: 400px) {
                                        margin-left:90px;
                                        width:60px;
                                          }
          
`
export const VideoImg = styled.img`
width:126%;
    margin-left: -150px;
    margin-top:10px;
    height:540px;
    box-shadow: 0.3em 0.3em 3em rgba(0,0,0,0.5);
    @media screen and (max-width: 1350px) {
        margin-left: -100px;
        width:124%;
        height:500px;
        margin-top:20px;
          }
          @media screen and (max-width: 1200px) {
            height:440px;
              }
              @media screen and (max-width: 1000px) {
                width:144%;
                height:390px;
                margin-left:-90px;
                  }
                  @media screen and (max-width: 800px) {
                    width:100%;
                    margin:auto;
                    margin-top:50px;
                      }
                      @media screen and (max-width: 600px) {
                        width:72%;
                        height:310px;
                          }
                          @media screen and (max-width: 550px) {
                            width:84%;
                              }
                              @media screen and (max-width: 440px) {
                                height:230px;
                                  }
`
export const VideoPlay = styled.video`
width:126%;
margin-left: -150px;
margin-top:10px;
height:540px;
@media screen and (max-width: 1350px) {
    margin-left: -90px;
    width:120%;
    height:480px;
      }
      @media screen and (max-width: 1200px) {
        height:420px;
          }
          @media screen and (max-width: 1000px) {
            width:144%;
            height:390px;
            margin-left:-90px;
              }
              @media screen and (max-width: 800px) {
                width:100%;
                margin:auto;
                margin-top:50px;
            }
            @media screen and (max-width: 600px) {
                width:72%;
                height:310px;
                  }
                  @media screen and (max-width: 550px) {
                    width:84%;
                      }
                      @media screen and (max-width: 440px) {
                        height:230px;
                          }
`