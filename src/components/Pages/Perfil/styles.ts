import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 17rem;
  height: 100vh;
  background: ${ props => props.theme.colors.backgroundperfil};
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
  border: 5px solid ${ props => props.theme.colors.backgroundicone};
  padding: 2px;
`;
export const ImagePerfil = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;
export const DivOptions = styled.div`
  display: flex;
  flex-direction: column;
  :first-child {
    margin-top: 10px;
  }
`;
export const About = styled.a`
  padding: 11px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${ props => props.theme.colors.about};
  font-weight: 500;
  :hover {
    cursor: pointer;
    color: ${ props => props.theme.colors.namepage2};
    transition: all 0.3s;
  }
  :focus {
    margin: 1px;
    border-bottom: 1px solid ${ props => props.theme.colors.namepage2};
    color: ${ props => props.theme.colors.namepage};
  }
`;
export const About1 = styled.a`
  margin-bottom: 7px;
  text-transform: uppercase;
  margin-top: 20px;
  text-decoration: none;
  color: ${ props => props.theme.colors.text};
  :hover {
    cursor: pointer;
    color: ${ props => props.theme.colors.namepage};
    transition: all 0.3s;
  }
  :active {
    margin: 1px;
    border-bottom: 1px solid ${ props => props.theme.colors.namepage};
  }
`;
