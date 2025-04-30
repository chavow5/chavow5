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
          <a href="#inicio" className="hover:text-gray-300">Inicio</a>
          <a href="#sobre" className="hover:text-gray-300">Sobre mí</a>
          <a href="#servicios" className="hover:text-gray-300">Servicios</a>
          <a href="#contacto" className="hover:text-gray-300">Contacto</a>
        </nav>

        {/* Botón hamburguesa*/}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Navegacion celular  */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-2">
          <a href="#inicio" className="block hover:text-gray-300">Inicio</a>
          <a href="#sobre" className="block hover:text-gray-300">Sobre mí</a>
          <a href="#servicios" className="block hover:text-gray-300">Servicios</a>
          <a href="#contacto" className="block hover:text-gray-300">Contacto</a>
        </div>
      )}
    </header>
  );
};

export default Header;
