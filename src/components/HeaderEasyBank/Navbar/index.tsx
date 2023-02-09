import { NavbarItem } from "./NavbarItem";
import { Nav } from "./styles";

interface Props {
  class: string;
}

export function Navbar(props: Props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function getPageYAfterScroll() {
    console.log(window.scrollY);
  }
  return (
    <Nav className={props.class}>
      <NavbarItem name="about" link="#about" />
      <NavbarItem name="experience" link="#experience" />
      <NavbarItem name="education" link="#education" />
      <NavbarItem name="skills" link="#skills" />
      <NavbarItem name="interest" link="#interest" />
      <NavbarItem name="awards" link="#awards" />
    </Nav>
  );
}

export default Navbar;
