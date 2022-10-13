import { Container,Title,Email,Infos,Info,Text,DivIcons,Icons,Icon,Github,Instagram,Linkedin,Facebook } from "./styles";
function Main() {
  return (
    <Container>
      <Title>CLARENCE TAYLOR</Title>
      
        <Infos>
          <Info>3542 BERRY STREET · CHEYENNE WELLS, CO 80810 · (317) 585-8468</Info>
          <Email href="#">NAME@EMAIL.COM</Email>
        </Infos>
      
      <Text>
        I am experienced in leveraging agile frameworks to provide a robust
        synopsis for high level overviews. Iterative approaches to corporate
        strategy foster collaborative thinking to further the overall value
        proposition.
      </Text>
      <DivIcons>
        <Icons>
          <Icon href="#"><Instagram/></Icon>
          <Icon href="#"><Github/></Icon>
          <Icon href="#"><Linkedin/></Icon>
          <Icon href="#"><Facebook/></Icon>
        </Icons>
      </DivIcons>
    </Container>
  );
}

export default Main;
