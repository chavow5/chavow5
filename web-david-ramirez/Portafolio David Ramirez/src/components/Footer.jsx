const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm">
        
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} David Ramírez. Todos los derechos reservados.
        </p>

        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-center">
          <a href="#inicio" className="hover:text-gray-400 transition">Inicio</a>
          <a href="#contacto" className="hover:text-gray-400 transition">Contacto</a>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400 transition"
          >
            Instagram
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
