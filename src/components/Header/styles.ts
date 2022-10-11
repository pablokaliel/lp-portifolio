import styled from 'styled-components';
import {RiComputerLine} from 'react-icons/ri'
import {HiOutlineDeviceMobile} from 'react-icons/hi'
import {BsGithub} from 'react-icons/bs'

export const Container = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:8px;
  background:#202024;
  border-bottom: 2px solid gray;
`;
export const DivGit = styled.div`
`;
export const ViewGit = styled.a`
text-decoration:none;
color: #e1e1e6;
:hover{
  color:#00b37e;
  transition: all 0.3s;
}
`;
export const DivTitle = styled.div`
display:flex;
justify-content:center;
flex:2;
`;
export const Title = styled.h1`
color: #e1e1e6;
`;
export const DivDesktopOrMobile = styled.div`

`;
export const Computer = styled(RiComputerLine)`
height:20px;
width:20px;
margin-right:20px;
color: #e1e1e6;
:hover{
  cursor:pointer;
  color:#00b37e;
  transition: all 0.3s;
}
`;
export const Mobile = styled(HiOutlineDeviceMobile)`
height:20px;
width:20px;
margin-right:18px;
color: #e1e1e6;
:hover{
  cursor:pointer;
  color:#00b37e;
  transition: all 0.3s;
}
`;
export const GitHub = styled(BsGithub)`
height:22px;
width:22px;
margin-right:5px;
`;