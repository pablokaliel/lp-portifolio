import styled from "styled-components";

export const Container = styled.div`
  width: 17rem;
  height: 100vh;
  text-align: center;

  display: flex;
  position: fixed;
  flex-direction: column;
  
  background: ${(props) => props.theme.colors.backgroundperfil};
  border-right: 2px solid gray;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const DivIcone = styled.div`
  display: flex;
  height: 208px;
  width: 208px;

  margin: 0 auto;
  margin-top: 220px;

  border-radius: 50%;
  border: 5px solid ${(props) => props.theme.colors.backgroundicone};
  padding: 2px;
`;

export const ImagePerfil = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

export const DivOptions = styled.div`
  display: flex;
  flex-direction: column;
  
  :first-child {
    margin-top: 10px;
  }
`;

export const About = styled.a`
  text-transform: uppercase;
  text-decoration: none;

  padding: 11px;
  font-weight: 500;

  color: ${(props) => props.theme.colors.about};
  
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.namepage2};
    transition: all 0.3s;
  }
  
  :focus {
    margin: 1px;
    border-bottom: 1px solid ${(props) => props.theme.colors.backgroundicone};
    color: ${(props) => props.theme.colors.backgroundicone};
  }
`;
