import {Container,Title,React,Html,Less,Sass,Npm,Angular,Android,Java,SubTitle,DivIcons,WorkFlow,DivCertificed,Mobile,Testing,Teams,Development,Check} from './styles'

function Skills () {
  return ( 
    <Container>
      <Title>Skills</Title>
      <SubTitle>Programming Languages & Tools</SubTitle>
      <DivIcons>
        <Html/>
        <Java/>
        <React/>
        <Sass/>
        <Less/>
        <Npm/>
        <Angular/>
        <Android/>
      </DivIcons>
      <WorkFlow>WorkFlow</WorkFlow>
      <DivCertificed>
        <Mobile><Check/>Mobile-First, Responsive Design</Mobile>
        <Testing><Check/>Cross Browser Testing & Debuggin</Testing>
        <Teams><Check/>Cross Functional Teams</Teams>
        <Development><Check/>Agile Development & Scrum</Development>
      </DivCertificed>
    </Container>
   );
}

export default Skills ;