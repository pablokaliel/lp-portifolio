import styled from "styled-components";

export const Container = styled.div`
  border-top: 1px solid gray;
  margin-bottom: 39vh;
`;

export const DivTitle = styled.div`
  margin-top: 22vh;
 
  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.namepage};
`;

export const DivContext = styled.div`
  margin-top: 30px;
 
  @media (max-width: 770px) {
    padding: 0px 20px;
  }
`;

