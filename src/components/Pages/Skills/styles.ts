import styled from "styled-components";
import {AiOutlineCheck } from "react-icons/ai";
import {
  DiJavascript,
  DiReact,
  DiSass,
  DiLess,
  DiNpm,
  DiAndroid,
  DiAngularSimple,
  DiGulp,
} from "react-icons/di";

export const Container = styled.div`
  margin-bottom: 39vh;
  border-top: 1px solid gray;
  @media (max-width: 770px) {
    padding: 0px 30px;
    width: 100%;
  }
`;

export const Title = styled.h1`
  margin-top: 22vh;
  color: ${(props) => props.theme.colors.namepage};
`;
export const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.text};
  margin-top: 15px;
  font-size: 18px;
`;
export const DivIcons = styled.div`
  max-width: 80%;
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0px;
  flex-wrap: wrap;
`;

export const WorkFlow = styled.p`
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 20px;
  font-size: 18px;
`;
export const DivCertificed = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const Teams = styled.li`
  color: ${(props) => props.theme.colors.subTitle};
  margin-bottom: 10px;
`;

export const React = styled(DiReact)`
  color: ${(props) => props.theme.colors.textInfo};

  height: 48px;
  width: 48px;
`;
export const Java = styled(DiJavascript)`
  color: ${(props) => props.theme.colors.textInfo};

  height: 48px;
  width: 48px;
`;
export const Android = styled(DiAndroid)`
  color: ${(props) => props.theme.colors.textInfo};

  height: 48px;
  width: 48px;
`;
export const Npm = styled(DiNpm)`
  color: ${(props) => props.theme.colors.textInfo};

  height: 48px;
  width: 48px;
`;
export const Html = styled(DiGulp)`
  color: ${(props) => props.theme.colors.textInfo};

  height: 48px;
  width: 48px;
`;
export const Angular = styled(DiAngularSimple)`
  color: ${(props) => props.theme.colors.textInfo};

  height: 48px;
  width: 48px;
`;
export const Sass = styled(DiSass)`
  color: ${(props) => props.theme.colors.textInfo};

  height: 48px;
  width: 48px;
`;
export const Less = styled(DiLess)`
  color: ${(props) => props.theme.colors.textInfo};

  height: 48px;
  width: 48px;
`;
export const Check = styled(AiOutlineCheck)`
  color: ${(props) => props.theme.colors.namepage};
  margin-left: 10px;
  margin-right: 10px;
`;
