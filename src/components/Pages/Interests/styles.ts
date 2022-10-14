import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 39vh;
  border-top: 1px solid gray;
  @media (max-width: 770px) {
    justify-content: center;
    padding: 0 30px;
    align-items: center;
  }
`;
export const Title = styled.h1`
  margin-top: 22vh;
  color: #00b37a;
`;
export const SecondContext = styled.p`
  color: #e1e1e6;
  margin-bottom: 16px;
`;
export const FirstContext = styled.p`
  color: #e1e1e6;
  margin-bottom: 20px;
  margin-top: 40px;
`;
