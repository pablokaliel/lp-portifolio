import styled from "styled-components";

export const Heading = styled.header`
  position: relative;
  background-color: transparent;
  z-index: 10;
  width: 100%;
  @media (min-width: 770px) {
    display: none;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 10px 30px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 770px) {
    padding: 25px;
    height: 70px;
  }
`;

export const ButtonNav = styled.button`
  padding: 0;
  border: 0;
  background-color: transparent;

  @media (min-width: 770px) {
    display: none;
  }
`;

export const ImgLogo2 = styled.p`
  font-family: "Press Start 2P";
  color: #000;
  @media (max-width: 770px) {
    display: none;
  }
`;
