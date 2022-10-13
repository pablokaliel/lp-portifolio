import styled from 'styled-components';
import {AiFillHtml5,AiOutlineCheck} from 'react-icons/ai'
import {DiJavascript,DiReact,DiSass,DiLess,DiNpm,DiAndroid,DiAngularSimple,DiGulp} from 'react-icons/di'

export const Container = styled.div`
margin-bottom:39vh;
border-top: 1px solid gray;
`;

export const Title = styled.h1`
margin-top:39vh;
color:#00b37a;
`;
export const SubTitle = styled.span`
color:#e1e1e6;
`;
export const DivIcons = styled.div`
max-width:80%;
display: flex;
justify-content:space-evenly;
margin: 30px 0px;
`;

export const WorkFlow = styled.h1`
color:#e1e1e6;
color:#00b37a;
margin-bottom:20px;
`;
export const DivCertificed = styled.ul`
display:flex;
flex-direction: column;
list-style:none;
`;
export const Mobile = styled.li`
color:#e1e1e6;
margin-bottom:10px;
`;
export const Testing = styled.li`
color:#e1e1e6;
margin-bottom:10px;
`;
export const Teams = styled.li`
color:#e1e1e6;
margin-bottom:10px;
`;
export const Development = styled.li`
color:#e1e1e6;

`;
export const React = styled(DiReact)`
color:#e1e1e6;

height:48px;
width:48px;
`;
export const Java = styled(DiJavascript)`
color:#e1e1e6;

height:48px;
width:48px;
`;
export const Android = styled(DiAndroid)`
color:#e1e1e6;

height:48px;
width:48px;
`;
export const Npm = styled(DiNpm)`
color:#e1e1e6;

height:48px;
width:48px;
`;
export const Html = styled(DiGulp)`
color:#e1e1e6;

height:48px;
width:48px;
`;
export const Angular = styled(DiAngularSimple)`
color:#e1e1e6;

height:48px;
width:48px;
`;
export const Sass = styled(DiSass)`
color:#e1e1e6;

height:48px;
width:48px;
`;
export const Less = styled(DiLess)`
color:#e1e1e6;

height:48px;
width:48px;
`;
export const Check = styled(AiOutlineCheck)`
color:#0f0;
margin-left:10px;
margin-right:10px;
`;
