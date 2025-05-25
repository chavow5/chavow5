import React, { useState } from "react";

const certificados = [
  {
    nombre: "Full Stack Web Developer - Digital House",
    imagen: "./certificados/fullstack.png",
  },
  {
    nombre: "Desarrollo Web Responsive - Domestika",
    imagen: "./certificados/webresponsive.png",
  },
  {
    nombre: "Diseño Gráfico - Juventudes",
    imagen: "./certificados/diseñografico.png",
  },
  {
    nombre: "Programación en Javascript - Domestika",
    imagen: "./certificados/programacion.png",
  },
];

const Certificados = () => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const cerrarImagen = () => setImagenSeleccionada(null);

  return (
    <section id="certificados" className="py-16 bg-[#111] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Certificados</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificados.map((cert, index) => (
            <div
              key={index}
              onClick={() => setImagenSeleccionada(cert.imagen)}
              className="cursor-pointer bg-[#1e1e1e] hover:bg-[#2a2a2a] rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition"
            >
              <img
                src={cert.imagen}
                alt={cert.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{cert.nombre}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de imagen ampliada */}
      {imagenSeleccionada && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={cerrarImagen}
        >
          <img
            src={imagenSeleccionada}
            alt="Certificado ampliado"
            className="max-w-3xl max-h-[90vh] rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Certificados;
