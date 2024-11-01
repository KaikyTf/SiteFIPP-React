
// import {Duvidas} from './components/duvidas/duvidas';
// import {Mapa} from './components/mapa/mapa';
// import {Cursos} from './components/cursos/cursos';
// import {Footer} from './components/footer/footer';
import { Cursos } from './components/cursos/cursos';
import { Duvidas } from './components/duvidas/duvidas';
import { Footer } from './components/footer/footer';
import {Intro} from './components/intro/intro';
import { Mapa } from './components/mapa/maps';
import { SobreNos } from './components/sobre-nos/sobrenos';

export const Home = () => {
  return (
    <>
      <Intro />
      <SobreNos />
      <Cursos />
      <Mapa />
      <Duvidas />
      <Footer />
    </>
  );
};
