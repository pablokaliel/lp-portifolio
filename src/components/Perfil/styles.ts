import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 17rem;
  height: 100vh;
  background:#202024;
`;

export const DivIcone = styled.div`
  display: flex;
  height: 208px;
  width: 208px;
  margin: 0 auto;
  margin-top: 220px;
  border-radius:50%;
  border: 5px solid #00b37e;
  padding:2px;
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
color: #e1e1e6;
:hover{
  cursor:pointer;
  color:#00b37e;
  transition: all 0.3s;
}
:focus{
  margin :1px;
  border-bottom: 1px solid #00b37e;
  color:#00b37e;
}
`;
export const About1 = styled.a`
  margin-bottom: 7px;
  text-transform: uppercase;
  margin-top: 20px;
  text-decoration: none;
color: #e1e1e6;
:hover{
  cursor:pointer;
  color:#00b37e;
  transition: all 0.3s;
}
:active{
  margin :1px;
  border-bottom: 1px solid #00b37e;
}
`;
