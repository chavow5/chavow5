import { motion } from 'framer-motion';

// Lista de proyectos (podés agregar más)
const proyectos = [
  {
    id: 1,
    title: 'Portafolio David Ramirez',
    image: 'https://private-user-images.githubusercontent.com/98863759/447362176-ef6f948e-4bfd-4f04-8292-a6d63fd4a46a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgyMDY4OTMsIm5iZiI6MTc0ODIwNjU5MywicGF0aCI6Ii85ODg2Mzc1OS80NDczNjIxNzYtZWY2Zjk0OGUtNGJmZC00ZjA0LTgyOTItYTZkNjNmZDRhNDZhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI1VDIwNTYzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFkMDg2ZGY0ZGY1OTI4ZjgzNTA3ZTg1NDY1MWJjZDE3ZjQ0OGFiZDY1MWQyZTRkODc0NmFiMjZmNmE1NGU4M2UmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.mq-4esCuxmi8DfMBogI6YQ-NFT1KKBiuMSrgiSn99nw', 
    link: 'https://github.com/chavow5/chavow5/tree/main/Portafolio%20David%20Ramirez'
  },
  {
    id: 2,
    title: 'Sistema de Peajes',
    image:'https://private-user-images.githubusercontent.com/98863759/436771567-839030a6-3cbf-4d1d-9d4a-50c071a5c390.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgyMDY4MjEsIm5iZiI6MTc0ODIwNjUyMSwicGF0aCI6Ii85ODg2Mzc1OS80MzY3NzE1NjctODM5MDMwYTYtM2NiZi00ZDFkLTlkNGEtNTBjMDcxYTVjMzkwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI1VDIwNTUyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUzNmU3ZTI1YWUzZWM1NWU2NmNmOGUyNmVhMDFjNjhiMTFjY2E3YmRhMDVmNDk1NDcxYzQ5YjZjYjdiNWFhMWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.BGIHmq91aL_VeSDeZdChLKgYAsf1KU98Doo0Hyh7fNQ',
    link: 'https://github.com/chavow5/dev-squad?tab=readme-ov-file'
  },
  {
    id: 3,
    title: 'ORIGXN',
    image: './images/orignx.png',
    link: 'https://origxn.store'
  },
  {
    id: 4,
    title: 'Carta de Invitacion',
    image: 'https://private-user-images.githubusercontent.com/98863759/437173056-b4ba9e58-632f-4dd8-91bb-adabb55d174e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgyMDE3MTUsIm5iZiI6MTc0ODIwMTQxNSwicGF0aCI6Ii85ODg2Mzc1OS80MzcxNzMwNTYtYjRiYTllNTgtNjMyZi00ZGQ4LTkxYmItYWRhYmI1NWQxNzRlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI1VDE5MzAxNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNmZTRhZjA1MWFlYTY1Yzg1NGU5YzAyM2I2OGY5M2MwZmFkZGY0Y2E3ODJhZjg5N2I4MTZmZTBjZGMzMzMxZjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.cKU-hJ3iwPt3WwwSQWFKrIfgVZF4OZV3uIuZWn4o1uE',
    link: 'https://github.com/chavow5/invitacion.git'
  },
  {
    id: 5,
    title: 'Juego de Adivinanza',
    image: 'https://private-user-images.githubusercontent.com/98863759/436882444-59e501d8-8154-415d-a10a-3da477da8b04.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgyMDE2OTUsIm5iZiI6MTc0ODIwMTM5NSwicGF0aCI6Ii85ODg2Mzc1OS80MzY4ODI0NDQtNTllNTAxZDgtODE1NC00MTVkLWExMGEtM2RhNDc3ZGE4YjA0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI1VDE5Mjk1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTcyZGM1NmJjYmNmZjdmODM5NmEzMTAxNWI4ZTViNDZlYjViZGZjNjEzMWU4MDk4MGU5YzdkMDEzOTRlZmZmZTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.HXBFJ5nictCjRi_RDVvsb1oz2IU7vslE3FRFn4YStBs',
    link: 'https://chavow5.github.io/MemoryGame/'
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
