import React from "react";

const Header = () => {
  return (
    <header class="encabezado">
      <nav>
        <ul>
          <a href="#footer">
            <button class="custom-btn btn-2">Sobre Mi</button>
          </a>
          <a href="#contact">
            <button class="custom-btn btn-2">Contactos</button>
          </a>
          <a href="#projects">
            <button class="custom-btn btn-2">Proyectos</button>
          </a>
        </ul>
      </nav>
      <h1>Sofia Flores</h1>
      <p>Desarrollador Web / Diseñador Gráfico</p>
    </header>
  );
};

export default Header;
