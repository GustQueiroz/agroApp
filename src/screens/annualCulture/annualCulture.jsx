import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormAnnualCulture from "../../components/Forms/FormAnnualCulture";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu.jsx";
import "../styles/screenStyles.css";
import "./annualCulture.css";

const AnnualCulture = () => {
  return (
    <div className="screen-body">
      <NavigationMenu />
      <div className="annualCulture-form">
        <h3 className="form-title">Ficha Cadastro - Atividade Rural </h3>
        <h5 className="form-title">Atividade Rural - Cultura Anual</h5>
        <FormAnnualCulture />
      </div>
    </div>
  );
};

export default AnnualCulture;
