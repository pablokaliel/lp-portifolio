import {
  Container,
  Title,
  DivCertificed,
  Mobile,
  Google,
  Th1,
  Th2,
  Th3,
  Th4,
  Th5,
  Check,
} from "./styles";

function Awards() {
  return (
    <Container id="awards">
      <Title>AWARDS & CERTIFICATIONS</Title>
      <DivCertificed>
        <Google>
          <Check />
          Google Analytics Certified Developer
        </Google>
        <Mobile>
          <Check />
          Mobile Web Specialist - Google Certification
        </Mobile>
        <Th1>
          <Check />1 st Place - University of Colorado Boulder - Emerging Tech
          Competition 2009
        </Th1>
        <Th2>
          <Check />1 st Place - University of Colorado Boulder - Adobe Creative
          Jam 2008 (UI Design Category)
        </Th2>
        <Th3>
          <Check />2 nd Place - University of Colorado Boulder - Emerging Tech
          Competition 2008
        </Th3>
        <Th4>
          <Check />1 st Place - James Buchanan High School - Hackathon 2006
        </Th4>
        <Th5>
          <Check />3 rd Place - James Buchanan High School - Hackathon 2005
        </Th5>
      </DivCertificed>
    </Container>
  );
}

export default Awards;
