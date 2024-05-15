import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoDex from "../../imgs/dex-logo.png";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import "../styles/screenStyles.css";
import "./home.css";

const Home = () => {
  return (
    <div className="screen-body">
      <NavigationMenu />
      <div>
        <img src={LogoDex} className="logoDexRegister" />
        <p>Tela de Inicio</p>
      </div>
    </div>
  );
};

export default Home;
