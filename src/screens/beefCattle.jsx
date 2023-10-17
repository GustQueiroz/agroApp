import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormBeefCattle from "../components/FormBeefCattle";
import './styles/screenStyles.css'

const BeefCattle = () => {
    return ( 
        <div className="screen-body">
            <div className="producer-form">
                <h3 className="form-title">Ficha Cadastro - Atividade Rural </h3>
                <h5 className="form-title">Atividade Rural - Pecuária de Corte</h5>
                <FormBeefCattle/>
            </div>
        </div>
     );
}
 
export default BeefCattle;