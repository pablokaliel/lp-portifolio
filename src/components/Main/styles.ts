import styled from 'styled-components';
import {BsGithub, BsFacebook, BsLinkedin,BsInstagram} from 'react-icons/bs'

export const Container = styled.div`
  margin-left:330px;
  display: flex;
  flex-direction: column;
  margin-top:40px;
`;

export const Title = styled.h1`
color: #e1e1e6;
font-size: calc(1.1rem + 3.4vw);
`;
export const Email = styled.a`
color:#00b37e;
margin-left:12px;
`;
export const Infos = styled.ul`
display:flex;
margin-top:7px;
margin-bottom:3rem;
`;
export const Info = styled.p`
color: #e1e1e6;

`;
export const Text = styled.p`
color: #e1e1e6;
font-size:1.15rem;
margin-bottom:3rem;

`;
export const DivIcons = styled.div`
`;
export const Icons = styled.ul`
  display:flex;
  list-style: none;
  `;
export const Icon = styled.a`
padding:1rem;
color: #e1e1e6;

`;
export const Github = styled(BsGithub)`
    height: 3.5rem;
    width: 3.5rem;
    color: #e1e1e6;
:hover{
  cursor:pointer;
  color:#00b37e;
  transition: all 0.3s;
}
:active{
  margin :1px;
  border-bottom: 1px solid #00b37e;
}
`;
export const Instagram = styled(BsInstagram)`
    height: 3.5rem;
    width: 3.5rem;
    color: #e1e1e6;
:hover{
  cursor:pointer;
  color:#00b37e;
  transition: all 0.3s;
}
:active{
  margin :1px;
  border-bottom: 1px solid #00b37e;
}
`;
export const Linkedin = styled(BsLinkedin)`
    height: 3.5rem;
    width: 3.5rem;
    color: #e1e1e6;
:hover{
  cursor:pointer;
  color:#00b37e;
  transition: all 0.3s;
}
:active{
  margin :1px;
  border-bottom: 1px solid #00b37e;
}
`;
export const Facebook = styled(BsFacebook)`
    height: 3.5rem;
    width: 3.5rem;
    color: #e1e1e6;
:hover{
  cursor:pointer;
  color:#00b37e;
  transition: all 0.3s;
}
:active{
  margin :1px;
  border-bottom: 1px solid #00b37e;
}
`;