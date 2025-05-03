import React from "react";

const certificados = [
  {
    nombre: "Full Stack Web Developer - Digital House",
    imagen: "/images/certificado1.png", // guarda el certificado en public/images
    enlace: "#", // podes poner el enlace a un PDF o imagen en Google Drive.
  },
  {
    nombre: "JavaScript Avanzado - FreeCodeCamp",
    imagen: "/images/certificado2.png",
    enlace: "#",
  },
  {
    nombre: "JavaScript Avanzado - FreeCodeCamp",
    imagen: "/images/certificado2.png",
    enlace: "#",
  },
  
];

const Certificados = () => {
  return (
    <section id="certificados" className="py-16 bg-[#111] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Certificados</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificados.map((cert, index) => (
            <a
              key={index}
              href={cert.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1e1e1e] hover:bg-[#2a2a2a] rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition"
            >
              <img src={cert.imagen} alt={cert.nombre} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{cert.nombre}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificados;
