import { useState } from "react";

import { Heading, Container ,DivLogins,NavLink,SignIn,SignOut, ButtonNav,ImgLogo2 } from "./styles";
import { Navbar } from "./Navbar";


import iconMenu from "../../assets/hamburger.png";
import iconCloseMenu from "../../assets/closeIcon.png";

// import {RxHamburgerMenu} from 'react-icons/rx'

export function HeaderEasyBank() {
  const [menuActive, setMenuState] = useState(false);

  return (
    <Heading>
      <Container>


        <ButtonNav onClick={() => setMenuState(!menuActive)}>
          <img
            src={!menuActive ? iconMenu : iconCloseMenu}
            alt="Menu"
            loading="lazy"
            style={{height:26, width:26, color: "#fff"}}
          />
        </ButtonNav>

        <Navbar class={menuActive ? "active" : ""} />

       <ImgLogo2>Portifolio</ImgLogo2>
      </Container>
    </Heading>
  );
}

export default HeaderEasyBank;
