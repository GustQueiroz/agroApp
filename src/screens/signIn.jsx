import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoDex from "../imgs/dex-logo.png";
import { Link } from "react-router-dom";
import "./styles/screenStyles.css";

const SignIn = () => {
  return (
    <>
      <div className="signIn-body row">
        <div className="register-link-body col-xl-5"></div>
        <div className="col-xl-7">
          <img src={LogoDex} className="logoDexSignIn" />
          <div className="col-xl-3 signIn-user-text">
            <label className="form-label">Usuario</label>
            <input type="text" className="form-control" id="user"></input>
          </div>
          <div className="col-xl-3 signIn-password-text">
            <label className="form-label">Senha</label>
            <input type="text" className="form-control" id="password"></input>
          </div>
          <div className="forgot-text">
            <p className="link-p">Esqueceu sua Senha?</p>
          </div>
          <div className="col-xl-12 submit-button">
            <Link to="/cadastro-produtor">
              <button type="submit" className="signIn-button">
                Entrar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
