import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormGeneralAgriculture from "../../components/FormGeneralAgriculture";
import NavigationMenu from "../../components/NavigationMenu";
import "../styles/screenStyles.css";

const GeneralAgriculture = () => {
  return (
    <div className="screen-body">
      <NavigationMenu />
      <div className="producer-form">
        <h3 className="form-title">Ficha Cadastro - Atividade Rural </h3>
        <h5 className="form-title">Atividade Rural - Agricultura Geral</h5>
        <FormGeneralAgriculture />
      </div>
    </div>
  );
};

export default GeneralAgriculture;
