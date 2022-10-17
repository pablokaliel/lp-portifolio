import styled from "styled-components";

export const Container = styled.div`
  border-top: 1px solid gray;
  @media (max-width: 770px) {
    padding: 0 30px;
    width: 100%;
  }
`;
export const Swapper = styled.div`
  margin-bottom: 39vh;
`;
export const Title = styled.h1`
  margin-top: 22vh;
  color: ${(props) => props.theme.colors.namepage};
  font-size: 34px;
`;
