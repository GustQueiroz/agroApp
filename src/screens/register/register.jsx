import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/screenStyles.css";
import "./register.css";

const Register = () => {
  return (
    <>
      <div>
        <label className="form-label">Nome Completo</label>
        <input type="text" className="form-control" id="user"></input>
      </div>
      <div>
        <label className="form-label">Email</label>
        <input type="text" className="form-control" id="email"></input>
      </div>
      <div>
        <label className="form-label">Senha</label>
        <input type="text" className="form-control" id="password"></input>
      </div>
      <div>
        <label className="form-label">Repetir Senha</label>
        <input type="text" className="form-control" id="password"></input>
      </div>
    </>
  );
};

export default Register;
