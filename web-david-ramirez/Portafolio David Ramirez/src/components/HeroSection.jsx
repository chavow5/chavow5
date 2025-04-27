import { useState, useEffect } from "react";
import fondo from "../assets/fondo2.png";

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Control de zoom (scale) máximo 1.2
  const scaleValue = Math.min(1 + scrollPosition * 0.0008, 1.2);
  // Control de desenfoque (blur) máximo 5px
  const blurValue = Math.min(scrollPosition * 0.005, 5);

  return (
    <div
      id="inicio"
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden relative"
    >
      {/* Fondo con gradiente, zoom y blur */}
      <div
        className="absolute inset-0 w-full h-full transition-all duration-300"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), #1e1e1e), url(${fondo})`,
          backgroundSize: `${scaleValue * 100}%`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: `blur(${blurValue}px)`,
          zIndex: -1,
        }}
      />

      {/* Contenido del Hero */}
      <div className="relative text-white text-center p-12 pt-24 z-10">
        <h1 className="text-8xl tracking-tighter text-balance text-shadow-lg/30">
          David Ramirez
        </h1>
        <p className="text-lg uppercase font-medium text-shadow-lg/30 mt-4">
          Full Stack Web Developer.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
