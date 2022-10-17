import styled from "styled-components";
import { FaTrophy } from "react-icons/fa";

export const Container = styled.div`
  margin-bottom: 39vh;
  border-top: 1px solid gray;
  @media (max-width: 770px) {
    justify-content: center;
    padding: 0 30px;
    align-items: center;
  }
`;
export const Check = styled(FaTrophy)`
  color: #ffc107;
  margin-left: 15px;
  margin-right: 10px;
  @media (max-width: 770px) {
    margin: 0px 5px;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.namepage};
  margin-top: 20vh;
`;
export const DivCertificed = styled.ul`
  color: ${(props) => props.theme.colors.text};
  margin-top: 70px;
  list-style: none;
`;
export const Mobile = styled.li`
  color: ${(props) => props.theme.colors.text};
  margin-top: 10px;
`;
export const Google = styled.li`
  color: ${(props) => props.theme.colors.text};
  margin-top: 10px;
`;
export const Th1 = styled.li`
  color: ${(props) => props.theme.colors.text};
  margin-top: 10px;
`;
export const Th2 = styled.li`
  color: ${(props) => props.theme.colors.text};
  margin-top: 10px;
`;
export const Th3 = styled.li`
  color: ${(props) => props.theme.colors.text};
  margin-top: 10px;
`;
export const Th4 = styled.li`
  color: ${(props) => props.theme.colors.text};
  margin-top: 10px;
`;
export const Th5 = styled.li`
  color: ${(props) => props.theme.colors.text};
  margin-top: 10px;
`;
