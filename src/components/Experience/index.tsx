import ContextExperience from "./ContextExperience";
import {Container,DivTitle,Title,DivContext} from './styles'

function Experience() {
  return ( 
    <Container>
      <DivTitle>
        <Title>Experience</Title>
      </DivTitle>
      <DivContext>
        <ContextExperience
        title="SENIOR WEB DEVELOPER"
        subtitle="INTELITEC SOLUTIONS"
        context="Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
        data="March 2013 - Present"
        />
        <ContextExperience
        title="WEB DEVELOPER"
        subtitle="INTELITEC SOLUTIONS"
        context="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
        data="December 2011 - March 2013"
        />
        <ContextExperience
        title="JUNIOR WEB DESIGNER"
        subtitle="SHOUT! MEDIA PRODUCTIONS"
        context="Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration."
        data="July 2010 - December 2011"
        />
        <ContextExperience
        title="WEB DESIGNER INTERN"
        subtitle="SHOUT! MEDIA PRODUCTIONS"
        context="Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI."
        data="September 2008 - June 2010"
        />
      </DivContext>
    </Container>
   );
}

export default Experience;