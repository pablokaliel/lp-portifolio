import styled from 'styled-components';
import {BsGithub, BsSunFill, BsMoonFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'

export const Container = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:8px;
  background:#282832;
  border-bottom: 2px solid gray;
  position:fixed;
  width:100%;
  z-index:2;
  
`;
export const DivGit = styled.div`
@media (max-width: 770px) {
  display:none;
}
`;
export const ViewGit = styled.a`
text-decoration:none;
color: #6c757d;
:hover{
  color:#f1f1f1;
  transition: all 0.3s;
}

`;
export const DivTitle = styled.div`
display:flex;
justify-content:center;
flex:2;
@media (max-width: 770px) {
  justify-content:flex-start
}
`;
export const Title = styled.h1`
color: #f1f1f1;
`;
export const DivDesktopOrMobile = styled.div`

`;
export const Computer = styled(BsSunFill)`
height:20px;
width:20px;
margin-right:20px;
color: #6c757d;
:hover{
  cursor:pointer;
  color:#bd5d38;
  transition: all 0.3s;
};
@media (max-width: 770px) {
  display:none;
}
`;
export const Mobile = styled(BsMoonFill)`
height:20px;
width:20px;
margin-right:18px;
color: #6c757d;
:hover{
  cursor:pointer;
  color:#00b37e;
  transition: all 0.3s;
}

@media (max-width: 770px) {
  display:none;
}
`;
export const Hamburger = styled(GiHamburgerMenu)`
height:20px;
width:20px;
margin-right:18px;
color: #6c757d;
:hover{
  cursor:pointer;
  color:#00b37e;
  transition: all 0.3s;
}

@media (min-width: 770px) {
  display:none;
}

`;
export const GitHub = styled(BsGithub)`
height:22px;
width:22px;
margin-right:5px;

`;