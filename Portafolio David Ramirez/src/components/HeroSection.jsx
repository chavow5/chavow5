import { useState, useEffect } from "react";
import fondo from "../assets/fondo2.png";

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => setScrollPosition(window.scrollY);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // inicial
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scaleValue = Math.min(1 + scrollPosition * 0.0008, 1.2);
  const blurValue = Math.min(scrollPosition * 0.005, 5);

  return (
    <div id="inicio" className="relative min-h-screen w-full overflow-hidden">
      {/* Fondo con zoom y blur */}
      <div
        className="absolute inset-0 w-full h-full transition-all duration-300 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), #1e1e1e), url(${fondo})`,
          backgroundSize: isMobile ? "cover" : `${scaleValue * 100}%`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: `blur(${blurValue}px)`,
        }}
      />

      {/* Contenido encima del fondo */}
      <div className="relative z-10 text-white flex flex-col justify-center items-start min-h-screen px-6 md:px-20 py-24">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight drop-shadow-md">
          David Ramirez
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-4 uppercase font-medium drop-shadow-md">
          Full Stack Web Developer.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
