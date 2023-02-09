import styled from "styled-components";

export const NavItem = styled.li`
  position: relative;

  &:hover::before {
    width: 100%;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: calc(100% + 21px);
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background-image: #ff0;
    transition: all 0.5s;
  }

  @media (max-width: 770px) {
    padding-bottom: 15px;
    margin-bottom: 15px;

    &::before {
      top: 100%;
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.namepage};
  transition: all 0.5s;

  &:hover {
    color: #989898;
  }

  @media (max-width: 770px) {
    color: ${(props) => props.theme.colors.namepage};
  }
`;
