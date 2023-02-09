import { NavItem, Link } from "./styles";

interface Props {
  name: string;
  link: string;
}

export function NavbarItem(props: Props) {
  return (
    <NavItem>
      <Link href={props.link}>{props.name}</Link>
    </NavItem>
  );
}

export default NavbarItem;
