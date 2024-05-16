import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoDex from "../../imgs/dex-logo.png";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import "../styles/screenStyles.css";
import "./home.css";

const Home = () => {
  return (
    <div className="home-screen-body">
      <NavigationMenu />
      <div className="home-body">
        <img src={LogoDex} className="logoDexRegister" />
        <h3 className="home-text">Seja bem vindo ao sistema AgroProApp</h3>
      </div>
    </div>
  );
};

export default Home;
