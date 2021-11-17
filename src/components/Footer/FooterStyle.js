import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';


export const BoxFooter = styled.div`
margin-top:20px;
`
export const LogoImg = styled.div`
text-align:center;
align-item:center;
@media screen and (max-width: 768px) {
    margin-top:160px;
}
@media screen and (max-width: 400px) {
    margin-top:0px;
}
`

export const BoxMenu = styled.div`
align-item:center;
text-align:center;
margin-top:30px;

`
export const UlTag = styled.ul`
`
export const Tag = styled.li`
display:inline-block;
padding: 10px 20px;

`
export const NavLink = styled(Link)`
  color: #232428;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  font-weight:1000;
  font-size:10px;
  letter-spacing: 5px;
  &:hover{
    color: gray;
  }
  &.active {
    color: #15cdfc;
  }
`;

export const NavMenu = styled.div`
  align-items: center;  
`;