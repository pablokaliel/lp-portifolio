import styled from 'styled-components';
import {AiFillHtml5,AiOutlineCheck} from 'react-icons/ai'
import {DiJavascript,DiReact,DiSass,DiLess,DiNpm,DiAndroid,DiAngularSimple,DiGulp} from 'react-icons/di'

export const Container = styled.div`
margin-bottom:39vh;
border-top: 1px solid gray;
@media (max-width: 770px) {
   justify-content:center;
   padding: 0 30px;
   align-items:center;
}
`;

export const Title = styled.h1`
margin-top:22vh;
color:#00b37a;
`;
export const SubTitle = styled.p`
color:#e1e1e6;
margin-top:15px;
font-size:18px;
`;
export const DivIcons = styled.div`
max-width:80%;
display: flex;
justify-content:space-evenly;
margin: 30px 0px;
@media (max-width: 770px) {
flex-wrap:wrap;
max-width:100%;
justify-content:center;
}
`;

export const WorkFlow = styled.p`
color:#e1e1e6;
margin-bottom:20px;
font-size:18px;
`;
export const DivCertificed = styled.ul`
display:flex;
flex-direction: column;
list-style:none;
`;
export const Mobile = styled.li`
color:#6c757d;
margin-bottom:10px;
`;
export const Testing = styled.li`
color:#6c757d;
margin-bottom:10px;
`;
export const Teams = styled.li`
color:#6c757d;
margin-bottom:10px;
`;
export const Development = styled.li`
color:#6c757d;

`;
export const React = styled(DiReact)`
color:#7ed6df;

height:48px;
width:48px;
`;
export const Java = styled(DiJavascript)`
color:#7ed6df;

height:48px;
width:48px;
`;
export const Android = styled(DiAndroid)`
color:#7ed6df;

height:48px;
width:48px;
`;
export const Npm = styled(DiNpm)`
color:#7ed6df;

height:48px;
width:48px;
`;
export const Html = styled(DiGulp)`
color:#7ed6df;

height:48px;
width:48px;
`;
export const Angular = styled(DiAngularSimple)`
color:#7ed6df;

height:48px;
width:48px;
`;
export const Sass = styled(DiSass)`
color:#7ed6df;

height:48px;
width:48px;
`;
export const Less = styled(DiLess)`
color:#7ed6df;

height:48px;
width:48px;
`;
export const Check = styled(AiOutlineCheck)`
color:#0f0;
margin-left:10px;
margin-right:10px;
`;
