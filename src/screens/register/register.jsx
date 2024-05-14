import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/screenStyles.css";
import "./register.css";

const Register = () => {
  return (
    <>
      <div>
        <label>Nome Completo</label>
        <input></input>
      </div>
      <div>
        <label>Email</label>
        <input></input>
      </div>
      <div>
        <label>Senha</label>
        <input></input>
      </div>
      <div>
        <label>Repetir Senha</label>
        <input></input>
      </div>
    </>
  );
};

export default Register;
