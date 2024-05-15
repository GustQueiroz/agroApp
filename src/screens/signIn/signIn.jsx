import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoDex from "../../imgs/dex-logo.png";
import { Link } from "react-router-dom";
import "../styles/screenStyles.css";
import "./signIn.css";

const SignIn = () => {
  return (
    <>
      <div className="signIn-body row">
        <div className="register-link-body col-xl-6 col-1">
          <h1 className="register-title">É NOVO POR AQUI?</h1>
          <p className="register-text">
            CRIE SUA CONTA E CONHEÇA NOSSOS PLANOS
          </p>
          <Link to="/registro">
            <button type="submit" className="register-button">
              Cadastre-se
            </button>
          </Link>
        </div>
        <div className="space col-xl-2 col-1"></div>
        <div className="col-xl-4 col-12">
          <img src={LogoDex} className="logoDexSignIn" />
          <div className="col-xl-6 signIn-user-text">
            <label className="form-label">Usuario</label>
            <input type="text" className="form-control" id="user"></input>
          </div>
          <div className="col-xl-6 signIn-password-text">
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
          <div className="col-xl-12 mobile-register-link">
            <Link to="/registro">
              <p>Não tem conta? Cadastre-se</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
