import { useState } from "react";
import { Menu, X } from "lucide-react"; // Iconos 
import logo from "../assets/logodavidramirez.png"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-black text-white fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-2" />
          {/* <span className="text-xl font-semibold">CHAVO</span> */}
        </div>

        {/* Navegacion */}
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="block hover:text-gray-300">Inicio</a>
          <a href="#aboutme" className="block hover:text-gray-300">Sobre mí</a>
          <a href="#proyectos" className="block hover:text-gray-300">Mis Proyectos</a>
          <a href="#certificados" className="block hover:text-gray-300">Certificados</a>
          <a href="#contacto" className="block hover:text-gray-300">Contacto</a>
        </nav>

        {/* <li><a href="#inicio" className="hover:text-gray-300">Inicio</a></li>
            <li><a href="#aboutme" className="hover:text-gray-300">Sobre mí</a></li>
            <li><a href="#proyectos" className="hover:text-gray-300">Proyectos</a></li>
            <li><a href="#certificados" className="hover:text-gray-300">Certificados</a></li>
            <li><a href="#contacto" className="hover:text-gray-300">Contacto</a></li>
          */}

        {/* Botón hamburguesa*/}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Navegacion celular  */}
      {menuOpen && (
        <div className="md:hidden text-center bg-black px-4 pb-4 space-y-2">
          <a href="#inicio" className="block hover:text-gray-300">Inicio</a>
          <a href="#AboutMe" className="block hover:text-gray-300">Sobre mí</a>
          <a href="#Proyectos" className="block hover:text-gray-300">Mis Proyectos</a>
          <a href="#certificados" className="block hover:text-gray-300">Certificados</a>
          <a href="#contacto" className="block hover:text-gray-300">Contacto</a>
          <button onClick={toggleMenu} className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full w-full">Cerrar</button>
        </div>
      )}
    </header>
  );
};

export default Header;
