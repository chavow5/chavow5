import { FaInstagram, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative text-white mt-12">
      {/* Fondo con degradado */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#080714] via-[#2d2a4d] to-[#0a0a11] animate-pulse-slow" />

      {/* Contenido del footer */}
      <div className="relative z-10 py-10 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm border-t border-gray-700 border-opacity-30">
        
        {/* Contacto */}
        <div className="space-y-2 border-b text-center md:border-b-0 md:border-r border-gray-600 pb-4 md:pb-0 pr-4">
          <h4 className="text-lg font-semibold mb-2">Contacto</h4>
          <p>Email: davidramirezw6@gmail.com</p>
          <p>Teléfono: 3804201334</p>
          <p>Ubicación: La Rioja, Argentina</p>
        </div>

        {/* Navegación */}
        <div className="space-y-2 border-b text-center md:border-b-0 md:border-r border-gray-600 pb-4 md:pb-0 pr-4">
          <h4 className="text-lg font-semibold mb-2">Navegación</h4>
          <ul className="space-y-1">
            <li><a href="#inicio" className="hover:text-gray-300">Inicio</a></li>
            <li><a href="#aboutme" className="hover:text-gray-300">Sobre mí</a></li>
            <li><a href="#proyectos" className="hover:text-gray-300">Proyectos</a></li>
            <li><a href="#certificados" className="hover:text-gray-300">Certificados</a></li>
            <li><a href="#contacto" className="hover:text-gray-300">Contacto</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col justify-center items-center text-center md:text-left">
          <div>
            <h4 className="text-lg  font-semibold mb-2">Redes Sociales</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/chavow5" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/in/david-ramirez-031015253/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-gray-300" />
              </a>
              <a href="https://www.instagram.com/davidramirez_651/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-gray-300" />
              </a>
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-indigo-300 hover:text-indigo-200 transition text-sm"
          >
            <FaArrowUp /> Volver arriba
          </button>
        </div>
      </div>

      {/* copyright */}
      <div className="relative z-10 mt-6 text-center text-xs text-gray-300 border-t border-gray-600 py-4">
        &copy; {new Date().getFullYear()} David Ramirez. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
