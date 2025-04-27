import logo from "/logodavidramirez.png";


const Header = () => {
  return (
    <header className="bg-black bg-opacity-60 text-white px-6 py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="inicio" className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-15 w-auto" />
          {/* <span className="text-2xl font-bold">MiLanding</span> */}
        </a>

        {/* Navegacion */}
        <nav className="space-x-6">
          <a href="#inicio" className="hover:text-gray-300 transition">
            Inicio
          </a>
          <a href="#sobre-mi" className="hover:text-gray-300 transition">
            Sobre mí
          </a>
          <a href="#servicios" className="hover:text-gray-300 transition">
            Servicios
          </a>
          <a href="#contacto" className="hover:text-gray-300 transition">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
