import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #fff;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  z-index: 10;
  margin-top:50px;
`;

export const NavLink = styled(Link)`
  color: #232428;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight:500;
  &:hover{
    color: gray;
  }
  &.active {
    color: #15cdfc;
  }
`;


export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10%;
  @media screen and (max-width: 1450px) {
    margin-left: 8%;
  }
  @media screen and (max-width: 1370px) {
    margin-left: 8%;
  }
  @media screen and (max-width: 1200px ) {
    margin-left: 7%;
  }
  @media screen and (max-width: 1050px) {
    margin-left: 5%;
  }
  @media screen and (max-width: 950px) {
    margin-left: 2%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const LogoImage = styled.img`
margin-left:100px;
@media screen and (max-width: 1350px) {
  margin-left: 80px;
}
@media screen and (max-width: 768px) {
  margin-left:0px;
}



`;

export const NavResMenu = styled.div`
float:right;
margin-top:-30px;
margin-right:12px;
display:none;
@media screen and (max-width:768px) {
display:block;
}
`


