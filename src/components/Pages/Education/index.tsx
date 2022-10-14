import ContextExperience from '../../Experience/ContextExperience';
import {Container,Swapper,Title} from './styles'

function Education() {
  return ( 
    <Container id='education'>
      <Title>EDUCATION</Title>
    <Swapper>
      <ContextExperience
      title='UNIVERSITY OF COLORADO BOULDER'
      subtitle='BACHELOR OF SCIENCE'
      context='Computer Science - Web Development Track GPA: 3.23'
      data='August 2006 - May 2010'
      />
      <ContextExperience
      title='JAMES BUCHANAN HIGH SCHOOL'
      subtitle='TECHNOLOGY MAGNET PROGRAM'
      context='GPA: 3.56'
      data='August 2002 - May 2006'
      />
      </Swapper>
    </Container>
   );
}

export default Education;