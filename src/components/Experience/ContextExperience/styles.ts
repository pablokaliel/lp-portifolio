import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  
  :first-child {
    margin-top: 50px;
  }

  @media (max-width: 770px) {
    display: block;
  }
`;

export const DivContext = styled.div`
  max-width: 700px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.textInfo};
  margin-bottom: 5px;
`;

export const SubTitle = styled.p`
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.subTitle};
`;

export const Context = styled.p`
  color: ${(props) => props.theme.colors.text};
`;

export const Data = styled.p`
  color: ${(props) => props.theme.colors.textInfo};
  font-size: 13px;
`;

export const DivData = styled.div`
  margin-right: 20px;
  margin-left: 10px;

  @media (max-width: 770px) {
    margin-top: 15px;
  }
`;

