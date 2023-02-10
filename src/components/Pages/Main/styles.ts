import styled from "styled-components";
import { FaGithubSquare, FaFacebookSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export const Container = styled.div`
  margin-left: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  position: absolute;
  justify-content: center;
  margin-top: 240px;
  @media (max-width: 770px) {
    margin-left: 0px;
    margin-top: 150px;
    justify-content: center;
    align-items: center;
  }
`;

export const FirstName = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: calc(1.1rem + 3.4vw);
  font-weight: bold;
`;
export const SecondName = styled.span`
  color: ${(props) => props.theme.colors.namepage};
  font-size: calc(1.1rem + 3.4vw);
  font-weight: bold;
`;
export const Email = styled.a`
  color: ${(props) => props.theme.colors.namepage};
  margin-left: 12px;
  @media (max-width: 770px) {
    margin-left: 0;
  }
`;
export const Infos = styled.ul`
  display: flex;
  margin-top: 7px;
  margin-bottom: 3rem;
  @media (max-width: 770px) {
    justify-content: center;
    padding: 0 30px;
    flex-direction: column;
  }
`;
export const Info = styled.p`
  color: ${(props) => props.theme.colors.subTitle};
`;
export const Text = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.15rem;
  margin-bottom: 3rem;

  @media (max-width: 770px) {
    padding: 0 30px;
  }
`;
export const DivIcons = styled.div`
  margin-bottom: 39vh;
`;
export const Icons = styled.ul`
  display: flex;
  list-style: none;
`;
export const Icon = styled.a`
  padding: 1rem;
  color: ${(props) => props.theme.colors.textInfo};
`;
export const Github = styled(FaGithubSquare)`
  height: 3.5rem;
  width: 3.5rem;
  color: ${(props) => props.theme.colors.text};
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.namepage};
    transition: all 0.3s;
  }
  @media (max-width: 770px) {
    height: 2.5rem;
    width: 2.5rem;
  }
`;
export const Instagram = styled(FaInstagramSquare)`
  height: 3.5rem;
  width: 3.5rem;
  color: ${(props) => props.theme.colors.text};
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.namepage};
    transition: all 0.3s;
  }
  @media (max-width: 770px) {
    height: 2.5rem;
    width: 2.5rem;
  }
`;
export const Linkedin = styled(FaLinkedin)`
  height: 3.5rem;
  width: 3.5rem;
  color: ${(props) => props.theme.colors.text};
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.namepage};
    transition: all 0.3s;
  }
  @media (max-width: 770px) {
    height: 2.5rem;
    width: 2.5rem;
  }
`;
export const Facebook = styled(FaFacebookSquare)`
  height: 3.5rem;
  width: 3.5rem;
  color: ${(props) => props.theme.colors.text};
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.namepage};
    transition: all 0.3s;
  }
  @media (max-width: 770px) {
    height: 2.5rem;
    width: 2.5rem;
  }
`;
