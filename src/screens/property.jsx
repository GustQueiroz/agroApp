import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormProperty from "../components/FormProperty";
import NavigationMenu from "../components/NavigationMenu";
import "./styles/screenStyles.css";

const Property = () => {
  return (
    <div className="screen-body">
      <NavigationMenu />
      <div className="producer-form">
        <h3 className="form-title">Ficha Cadastro - Propriedade Rural </h3>
        <FormProperty />
      </div>
    </div>
  );
};

export default Property;
