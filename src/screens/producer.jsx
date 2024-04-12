import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormProducer from "../components/FormProducer";
import NavigationMenu from "../components/NavigationMenu";
import "./styles/screenStyles.css";

const Producer = () => {
  return (
    <div className="screen-body">
      <NavigationMenu />
      <div className="producer-form">
        <h3 className="form-title">Ficha de Informações - Produtor Rural </h3>
        <FormProducer />
      </div>
    </div>
  );
};

export default Producer;
