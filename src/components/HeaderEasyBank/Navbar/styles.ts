import styled from "styled-components";

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  list-style: none;
  gap: 30px;
  @media (max-width: 770px) {
    display: none;
    position: absolute;
    top: calc(100% + 25px);
    left: -15%;
    transform: translateX(-50%);
    background-color: ${(props) => props.theme.colors.backgroundHamburguer};
    /* width: 90%; */
    border-radius: 6px;

    padding: 25px 25px 0;
    text-align: center;
    box-shadow: inset 2px 5px 1.3em ${(props) => props.theme.colors.shadowOne},
      3px 2px 0.5em ${(props) => props.theme.colors.shadowTwo};

    &.active {
      display: block;
    }
  }
`;
