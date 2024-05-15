import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoDex from "../../imgs/dex-logo.png";
import { Link } from "react-router-dom";
import "../styles/screenStyles.css";
import "./register.css";

const Register = () => {
  return (
    <div className="register-body">
      <div className="col-xl-5 col-12">
        <img src={LogoDex} className="logoDexRegister" />
        <div className="col-xl-6 signIn-user-text">
          <label className="form-label">Email</label>
          <input type="text" className="form-control" id="email"></input>
        </div>
        <div className="col-xl-6 signIn-user-text">
          <label className="form-label">Nome Completo</label>
          <input type="text" className="form-control" id="user"></input>
        </div>
        <div className="col-xl-6 signIn-password-text">
          <label className="form-label">Senha</label>
          <input type="text" className="form-control" id="password"></input>
        </div>
        <div className="col-xl-6 signIn-password-text">
          <label className="form-label">Repetir Senha</label>
          <input type="text" className="form-control" id="password"></input>
        </div>
        <div className="col-xl-12 submit-button">
          <button type="submit" className="register-submit-button">
            Registrar-se
          </button>
        </div>
        <div className="col-xl-12 return-link">
          <Link to="/">
            <p>Já possui conta? Efetue Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
