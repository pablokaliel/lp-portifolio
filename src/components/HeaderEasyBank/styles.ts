import styled from "styled-components";

export const Heading = styled.header`
  position: relative;
  background-color: transparent;
  z-index: 10;
  width:100%;
  @media (min-width: 770px) {
    display:none;
  }
`;

export const Container = styled.div`
  /* max-width: 1170px; */
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

export const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  border-radius: 25px;
  padding: 12px 30px;
  color: #fff;
  background-image: #ff0;
  font-weight:bold;
  font-size:0.87rem;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 770px) {
    display: none;
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

export const ImgLogo = styled.img`
    height: 150px;
    width: 150px;
    margin-top:7px;
    @media (max-width: 770px) {
margin-top:30px;
  }
    
`;
export const ImgLogo2 = styled.p`
  font-family: "Press Start 2P";
  color:#000;
  @media (max-width: 770px) {
display: none;
  }
`;

export const DivLogins = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 770px) {
display: flex;
order:1;
  }
`;
export const SignIn = styled.p`
  padding: 5px 0px;
  font-size: 13px;
  margin-left: 0.7rem;
  display: flex;
  text-transform: uppercase;

    ::after {
    display: inline-block;
    content: "";
    background-color: #464646;
    width: 2px;
    height: 16px;
    margin-left: 8px;
  }
`;
export const SignOut = styled.p`
  padding: 5px 0px;
  font-size: 13px;
  margin-left: 0.7rem;
  display: flex;
  text-transform: uppercase;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  transition: all 0.4s;

  :hover {
    color: #000;
  }
`;