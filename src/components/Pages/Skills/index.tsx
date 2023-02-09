import {
  Container,
  Title,
  React,
  Html,
  Less,
  Sass,
  Npm,
  Angular,
  Android,
  Java,
  SubTitle,
  DivIcons,
  WorkFlow,
  DivCertificed,
  Teams,
  Check,
} from "./styles";

function Skills() {
  return (
    <Container id="skills">
      <Title>SKILLS</Title>
      <SubTitle>PROGRAMMING LANGUAGES & TOOLS</SubTitle>
      <DivIcons>
        <Html />
        <Java />
        <React />
        <Sass />
        <Less />
        <Npm />
        <Angular />
        <Android />
      </DivIcons>
      <WorkFlow>WORKFLOW</WorkFlow>
      <DivCertificed>
        <Teams>
          <Check />
          Mobile-First, Responsive Design
        </Teams>
        <Teams>
          <Check />
          Cross Browser Testing & Debuggin
        </Teams>
        <Teams>
          <Check />
          Cross Functional Teams
        </Teams>
        <Teams>
          <Check />
          Agile Development & Scrum
        </Teams>
      </DivCertificed>
    </Container>
  );
}

export default Skills;
