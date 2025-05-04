import HeroSection from '../components/HeroSection';
import Aboutme from '../components/Aboutme';
import Proyectos from '../components/Proyectos';
import Certificados from '../components/Certificados';
import Contactos from '../components/Contactos';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Aboutme />
      <Proyectos />
      <Certificados />
      <Contactos />
    </main>
  );
};

export default Home;