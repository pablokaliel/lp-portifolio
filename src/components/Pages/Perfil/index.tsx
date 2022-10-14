import { useState } from 'react';
import {Container,DivIcone,ImagePerfil,DivOptions,About,About1} from './styles'


function Perfil() {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return ( 
    <Container>
      <DivIcone>
        <ImagePerfil src='https://avatars.githubusercontent.com/u/104238801?v=4' alt='Image'/>
      </DivIcone>
      <DivOptions >
        <About href="#" onClick={scrollToTop}>About</About>
        <About href="#experience">Experience</About>
        <About href="#education">Education</About>
        <About href="#skills">Skills</About>
        <About href="#interest">Interest</About>
        <About href="#awards">Awards</About>
      </DivOptions>
    </Container>
   );
}

export default Perfil;