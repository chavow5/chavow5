import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiPostman } from "react-icons/si";


const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "APIs REST", icon: <SiPostman /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
];

const AboutMe = () => {
  return (
    <section className="bg-[#1e1e1e] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* info principal */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="images/perfilchavo.png"
              alt="perfil"
              className="w-24 h-24 rounded-full border-2 border-white"
            />
            <div>
              <h2 className="text-3xl font-bold">David Ramírez</h2>
              <p className="text-indigo-400">Desarrollador Web Full Stack</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Biografía</h3>
            <p className="text-gray-300">
              ¡Hola! Soy un desarrollador web con experiencia en React, Tailwind
              CSS y otras tecnologías modernas. Me encanta crear experiencias
              web funcionales que resuelvan problemas reales e impacto en las
              redes sociales.
            </p>
            <p className="text-gray-300 mt-2">
              Mi enfoque se centra en construir interfaces intuitivas y
              accesibles, con especial atención al rendimiento y las buenas
              prácticas de desarrollo.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Habilidades Tecnicas</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full flex items-center gap-2"
                >
                  {skill.icon}
                  {/* Si querés mostrar también el nombre, dejá esto: */}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          <br />
          <div>
            <h3 className="text-xl font-semibold mb-2">Habilidades Blandas</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Trabajo en equipo",
                "Comunicacion efectiva",
                "adaptabilidad",
                "Gestion de tiempos",
                "Creatividad",
                "Liderazgo",
                "Proactivo",
                "Resolucion de problemas",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* segunda parte de informacion */}
        <aside className="w-full md:w-80 bg-[#1e1e1e] rounded-lg p-6">
          <a
            href="/CV_DavidRamirez.pdf"
            download
            className="block w-full bg-indigo-600 text-white font-semibold text-center py-2 rounded-lg mb-6 hover:bg-indigo-500 transition"
          >
            Descargar CV
          </a>

          <h3 className="text-lg font-semibold mb-4">Contacto & Redes</h3>
          <div className="text-sm text-gray-300 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span>📧</span>
              <span>Davidramirezw6@gmail.com</span>
              <br />
              <span>📞</span>
              <span>3804201334</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>La Rioja, Argentina</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href="https://github.com/chavow5"
              className="bg-gray-700 px-3 py-1 rounded hover:bg-indigo-500 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/david-ramirez-031015253/"
              className="bg-gray-700 px-3 py-1 rounded hover:bg-indigo-500 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/Chavo651"
              className="bg-gray-700 px-3 py-1 rounded hover:bg-indigo-500 transition"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/davidramirez_651/"
              className="bg-gray-700 px-3 py-1 rounded hover:bg-indigo-500 transition"
            >
              Instagram
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AboutMe;
