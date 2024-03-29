import styled from "styled-components";
import { BsGithub } from "react-icons/bs";


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
 
  padding: 8px;
  background: ${(props) => props.theme.colors.backgroundperfil};
  border-bottom: 2px solid gray;
  width: 100%;
`;

export const DivGit = styled.div`
  @media (max-width: 770px) {
    display: none;
  }
`;

export const ViewGit = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.about};
 
  :hover {
    color: ${(props) => props.theme.colors.text};
    transition: all 0.3s;
  }
`;

export const DivTitle = styled.div`
  display: flex;
  justify-content: center;
  flex: 2;
  
  @media (max-width: 770px) {
    justify-content: flex-start;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.about};
`;

export const DivDesktopOrMobile = styled.div``;


export const GitHub = styled(BsGithub)`
  height: 22px;
  width: 22px;
  margin-right: 5px;
`;
