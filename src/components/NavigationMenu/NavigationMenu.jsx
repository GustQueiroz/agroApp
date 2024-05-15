import React from "react";
import { Link } from "react-router-dom";
import "./NavigationMenu.css";

function NavigationMenu() {
  return (
    <nav className="navigationTab">
      <ul>
        <li>
          <Link to="/cadastro-produtor">Cadastro de Produtor</Link>
        </li>
        <li>
          <Link to="/cadastro-propriedade">Cadastro de Propriedade</Link>
        </li>
        <li>
          <Link to="/cultura-anual">Cultura Anual</Link>
        </li>
        <li>
          <Link to="/cultura-perene">Cultura Perene</Link>
        </li>
        <li>
          <Link to="/agricultura-geral">Agricultura Geral</Link>
        </li>
        <li>
          <Link to="/pecuaria-de-corte">Pecuária de Corte</Link>
        </li>
        <li>
          <Link to="/grid-produtor">Tabela Produtores</Link>
        </li>
        <li>
          <Link to="/inicio">Início</Link>
        </li>
        <li>
          <Link to="/">Sair</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
