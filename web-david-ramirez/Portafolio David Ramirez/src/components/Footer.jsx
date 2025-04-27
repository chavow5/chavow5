
const Footer = () => {
    return (
      <footer className="bg-black-50 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} David Ramírez. Todos los derechos reservados.</p>
          
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-400 transition">Inicio</a>
            <a href="#" className="hover:text-gray-400 transition">Contacto</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  