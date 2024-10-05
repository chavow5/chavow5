import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#333', color: '#fff', textAlign: 'center' }}>
      <a href="#landing" style={{ margin: '0 15px', color: '#fff', textDecoration: 'none' }}>Inicio</a>
      <a href="#deporte" style={{ margin: '0 15px', color: '#fff', textDecoration: 'none' }}>Deporte</a>
      <a href="#tecnologia" style={{ margin: '0 15px', color: '#fff', textDecoration: 'none' }}>Tecnología</a>
    </nav>
  );
};

export default Navbar;
