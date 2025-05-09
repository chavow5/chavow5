import React from 'react';
import { motion } from 'framer-motion';

// Lista de proyectos (podés agregar más)
const proyectos = [
  {
    id: 1,
    title: 'Portafolio Chavo',
    image: '/images/lomiteria.png', 
    link: 'https://lomiteria.onrender.com'
  },
  {
    id: 2,
    title: 'Sistema de Peajes',
    image: '/images/peajes.png',
    link: 'https://peajes-app.netlify.app'
  },
  {
    id: 3,
    title: 'ORIGXN',
    image: '/images/origxn.png',
    link: 'origxn.store'
  },
  {
    id: 4,
    title: 'Carta de Invitacion',
    image: '/images/invitacion.png',
    link: 'invitacion.com'
  },
  {
    id: 5,
    title: 'Juego de Adivinanza',
    image: '/images/adivino.png',
    link: 'adivino.com'
  }


];

const Enlinea = () => {
  return (
    <section className="py-10 px-4 md:px-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Proyectos en línea</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {proyectos.map(({ id, title, image, link }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Ver proyecto →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Enlinea;
