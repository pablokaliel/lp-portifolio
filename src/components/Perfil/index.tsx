import {Container,DivIcone,ImagePerfil,DivOptions,About,About1} from './styles'

function Perfil() {
  return ( 
    <Container>
      <DivIcone>
        <ImagePerfil src='https://avatars.githubusercontent.com/u/104238801?v=4' alt='Image'/>
      </DivIcone>
      <DivOptions >
        <About href="#">About</About>
        <About href="#">Experience</About>
        <About href="#">Education</About>
        <About href="#">Skills</About>
        <About href="#">Interest</About>
        <About href="#">Awards</About>
      </DivOptions>
    </Container>
   );
}

export default Perfil;