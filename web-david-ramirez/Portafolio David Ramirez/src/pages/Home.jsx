import HeroSection from '../components/HeroSection';
import Aboutme from '../components/Aboutme';
import Proyectos from '../components/Proyectos';
import Certificados from '../components/Certificados';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Aboutme />
      <Proyectos />
      <Certificados />
    </main>
  );
};

export default Home;