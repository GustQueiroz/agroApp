import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormAnnualCulture from "../../components/FormAnnualCulture";
import NavigationMenu from "../../components/NavigationMenu";
import "../styles/screenStyles.css";

const AnnualCulture = () => {
  return (
    <div className="screen-body">
      <NavigationMenu />
      <div className="producer-form">
        <h3 className="form-title">Ficha Cadastro - Atividade Rural </h3>
        <h5 className="form-title">Atividade Rural - Cultura Anual</h5>
        <FormAnnualCulture />
      </div>
    </div>
  );
};

export default AnnualCulture;
