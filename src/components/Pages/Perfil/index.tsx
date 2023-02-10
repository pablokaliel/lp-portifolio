import { Container, DivIcone, ImagePerfil, DivOptions, About } from "./styles";

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
        <ImagePerfil
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4Gl24ayq6YsEcQNsQ0b8IuomsSou__h6pXT8dH_fcDvOa2ol4hv2W-DCy7maqFViwrA&usqp=CAU"
          alt="Image"
        />
      </DivIcone>
      <DivOptions>
        <About href="#" onClick={scrollToTop}>
          About
        </About>
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

