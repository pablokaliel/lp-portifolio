import styled from 'styled-components';
import {BsGithub, BsFacebook, BsLinkedin,BsInstagram} from 'react-icons/bs'

export const Container = styled.div`
  margin-left:300px;
  display: flex;
  flex-direction: column;
  margin-top:70px;
  position:absolute;
  justify-content:center;
  margin-top:240px;
`;

export const FirstName = styled.p`
color: #e1e1e6;
font-size: calc(1.1rem + 3.4vw);
font-weight:bold;
`;
export const SecondName = styled.span`
color:#00b37e;
font-size: calc(1.1rem + 3.4vw);
font-weight:bold;
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
color: #6c757d;

`;
export const Text = styled.p`
color: #e1e1e6;
font-size:1.15rem;
margin-bottom:3rem;

`;
export const DivIcons = styled.div`

margin-bottom:39vh;
`;
export const Icons = styled.ul`
  display:flex;
  list-style: none;
  `;
export const Icon = styled.a`
padding:1rem;
color: #6c757d;

`;
export const Github = styled(BsGithub)`
    height: 3.5rem;
    width: 3.5rem;
    color: #e1e1e6;
:hover{
  cursor:pointer;
  color:#00b37a;
  transition: all 0.3s;
}
:active{
  margin :1px;
}
`;
export const Instagram = styled(BsInstagram)`
    height: 3.5rem;
    width: 3.5rem;
    color: #e1e1e6;
:hover{
  cursor:pointer;
  color:#00b37a;
  transition: all 0.3s;
}
:active{
  margin :1px;
}
`;
export const Linkedin = styled(BsLinkedin)`
    height: 3.5rem;
    width: 3.5rem;
    color: #e1e1e6;
:hover{
  cursor:pointer;
  color:#00b37a;
  transition: all 0.3s;
}
:active{
  margin :1px;
}
`;
export const Facebook = styled(BsFacebook)`
    height: 3.5rem;
    width: 3.5rem;
    color: #e1e1e6;
:hover{
  cursor:pointer;
  color:#00b37a;
  transition: all 0.3s;
}
:active{
  margin :1px;
}
`;