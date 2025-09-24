import { useState, useEffect } from "react";

// plantilla para hacer zoom en imagen adaptada a mobile
export default function ZoomParallax({ imageUrl }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // detectar si es pantalla chica
    const handleResize = () => setIsMobile(window.innerWidth < 768); // <768px = mobile
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // valores de zoom y blur SOLO en desktop
  const scaleValue = isMobile ? 1 : Math.min(1 + scrollPosition * 0.0008, 1.2);
  const blurValue = isMobile ? 0 : Math.min(scrollPosition * 0.005, 1.2);

  return (
    <div
      className="absolute inset-0 w-full h-full transition-transform transition-filter duration-300"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.5), #1e1e1e),
          url(${imageUrl})
        `,
        backgroundSize: isMobile ? "full" : `${scaleValue * 200}%`, // en móvil siempre cover
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        filter: `blur(${blurValue}px)`,
      }}
    />
  );
}

// en App.js
// <ZoomParallax imageUrl="url-imagen" />
