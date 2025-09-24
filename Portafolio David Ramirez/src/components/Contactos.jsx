import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import React, { useState } from "react";

const Contacto = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // Oculta el mensaje después de 3 segundos
  };

  return (
    <section id="contacto" className="bg-[#1e1e1e] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Contacto</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Información de contacto y QR */}
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-400" />
              <span>Davidramirezw6@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-indigo-400" />
              <span>La Rioja, Argentina</span>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-indigo-400" />
              <span>Disponible de 10:00 a 23:00</span>
            </div>

            {/* Botones de contacto */}
            <div className="flex gap-4 mt-6 flex-wrap">
              <a
                href="https://wa.me/543804201334?text=Hola%20David,%20vi%20tu%20portfolio%20y%20me%20gustaría%20hablar%20contigo."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full transition"
              >
                <FaWhatsapp size={20} /> WhatsApp
              </a>
              <a
                href="https://www.instagram.com/davidramirez_651/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 px-4 py-2 rounded-full transition"
              >
                <FaInstagram size={20} /> Instagram
              </a>
            </div>

            {/* QR de WhatsApp */}
            <div className="mt-6">
              <p className="mb-2">O escaneá el código QR:</p>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/543804201334?text=Hola%20David,%20vi%20tu%20portfolio%20y%20me%20gustaría%20hablar%20contigo."
                alt="QR para WhatsApp"
                className="w-40 h-40 rounded-lg border border-gray-600"
              />
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-[#2a2a2a] p-6 rounded-lg shadow-lg">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-2 rounded bg-[#1e1e1e] text-white border border-gray-700"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-2 rounded bg-[#1e1e1e] text-white border border-gray-700"
            />
            <textarea
              placeholder="Tu mensaje"
              rows={4}
              className="w-full p-2 rounded bg-[#1e1e1e] text-white border border-gray-700"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded text-white font-semibold transition"
            >
              Enviar Mensaje
            </button>
            {showMessage && (
              <div className="mt-4 bg-yellow-500 text-black p-3 rounded text-center">
                ⚠️ Formulario en construcción. Intenta en otro momento.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
