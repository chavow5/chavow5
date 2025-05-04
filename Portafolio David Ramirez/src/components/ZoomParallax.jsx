import { useState, useEffect } from "react";

// plantilla para hacer zoom en imagen

export default function ZoomParallax({ imageUrl }) {
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

  // valor de scale basado en el scroll
  const scaleValue = Math.min(1 + scrollPosition * 0.0008, 1.2);
  // 0.0005 controla qué tanto zoom hace
  //efecto borroso
  const blurValue = Math.min(scrollPosition * 0.005, 1.2);

  return (
    <div
    className="absolute inset-0 w-full h-full transition-transform transition-filter duration-300"
    style={{
      backgroundImage: `
        linear-gradient(to bottom, rgba(0,0,0,0.5), #1e1e1e),
        url(${imageUrl})
      `,
      backgroundSize: `${scaleValue * 100}%`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      filter: `blur(${blurValue}px)`,
    }}
  />
  );
}


// agregar en app.js

// <ZoomParallax imageUrl="url-imagen" />
