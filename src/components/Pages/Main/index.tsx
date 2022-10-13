import Experience from "../../Experience";
import Awards from "../Awards";
import Education from "../Education";
import { Interests } from "../Interests";
import Skills from "../Skills";
import { Container,FirstName,SecondName,Email,Infos,Info,Text,DivIcons,Icons,Icon,Github,Instagram,Linkedin,Facebook } from "./styles";
function Main() {
  return (
    <Container>
      <FirstName>CLARENCE  <SecondName>TAYLOR</SecondName></FirstName>
      
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
      <Experience/>
      <Education/>
      <Skills/>
      <Interests/>
      <Awards/>
    </Container>
  );
}

export default Main;
