import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormPerennialCulture from "../components/FormPerennialCulture";
import NavigationMenu from "../components/NavigationMenu";
import "./styles/screenStyles.css";

const PerennialCulture = () => {
  return (
    <div className="screen-body">
      <NavigationMenu />
      <div className="producer-form">
        <h3 className="form-title">Ficha de Informações - Produtor Rural </h3>
        <h5 className="form-title">Atividade Rural - Cultura Perene</h5>
        <FormPerennialCulture />
      </div>
    </div>
  );
};

export default PerennialCulture;
