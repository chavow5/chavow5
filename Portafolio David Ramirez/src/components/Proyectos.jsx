import { useEffect, useState } from "react";

// utilizo una api para obtener los repositorios de github
const Proyectos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/chavow5/repos?per_page=7&sort=updated")
      .then((res) => res.json())
      .then((data) => {
        // Filtramos repositorios que tengan descripción y ordenamos por fecha
        const filtrados = data
          .filter((repo) => repo.description)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(filtrados);
      })
      .catch((err) => console.error("Error al cargar los repositorios:", err));
  }, []);

  return (
    <section id=" Mis Proyectos" className="bg-[#0d1117] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Mis Proyectos en GitHub</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-blue-400 hover:underline">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h3>
              <p className="text-sm text-gray-400 mt-2">{repo.description}</p>
              <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                <span className="bg-[#238636] text-white px-2 py-0.5 rounded">
                  {repo.language || "Sin lenguaje"}
                </span>
                <a
                  href={repo.html_url}
                  className="text-blue-500 hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver código →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
