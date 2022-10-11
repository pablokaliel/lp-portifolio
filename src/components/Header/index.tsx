import {Container, DivGit,ViewGit,DivTitle,Title,DivDesktopOrMobile,Computer,Mobile,GitHub } from './styles'

function Header() {
  return ( 
    <Container>
      <DivGit>
        <ViewGit href='#'><GitHub/> View on GitHub</ViewGit>
      </DivGit>
      <DivTitle>
        <Title>Portifolio</Title>
      </DivTitle>
      <DivDesktopOrMobile>
        <Computer/>
        <Mobile/>
      </DivDesktopOrMobile>
    </Container>
   );
}

export default Header;