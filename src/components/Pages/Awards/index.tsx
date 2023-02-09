import {
  Container,
  Title,
  DivCertificed,
  Mobile,
  Google,
  Th1,
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
        <Th1>
          <Check />1 st Place - University of Colorado Boulder - Adobe Creative
          Jam 2008 (UI Design Category)
        </Th1>
        <Th1>
          <Check />2 nd Place - University of Colorado Boulder - Emerging Tech
          Competition 2008
        </Th1>
        <Th1>
          <Check />1 st Place - James Buchanan High School - Hackath1n 2006
        </Th1>
        <Th1>
          <Check />3 rd Place - James Buchanan High School - Hackath1n 2005
        </Th1>
      </DivCertificed>
    </Container>
  );
}

export default Awards;
