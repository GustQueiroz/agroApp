import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoDex from "../../imgs/dex-logo.png";
import { Link, useNavigate } from "react-router-dom";
import "../styles/screenStyles.css";
import "./signIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    let valid = true;

    if (!email) {
      setEmailError("Por favor, digite um email válido.");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Por favor, digite um email no formato correto.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Por favor, digite uma senha válida.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) {
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth`,
        {
          email: email.toLowerCase(),
          password: password,
        }
      );

      if (response.status === 200) {
        const { accessToken, refreshToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        navigate("/inicio");
      } else {
        console.error("Erro ao fazer login:", response.data);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

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
          <img src={LogoDex} className="logoDexSignIn" alt="Logo Dex" />
          <form onSubmit={handleLogin}>
            <div className="col-xl-6 signIn-user-text">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (e.target.value) setEmailError("");
                }}
              />
              {emailError && <p className="text-danger">{emailError}</p>}
            </div>
            <div className="col-xl-6 signIn-password-text">
              <label className="form-label">Senha</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (e.target.value) setPasswordError("");
                }}
              />
              {passwordError && <p className="text-danger">{passwordError}</p>}
            </div>
            <div className="forgot-text">
              <p className="link-p">Esqueceu sua Senha?</p>
            </div>
            <div className="col-xl-12 submit-button">
              <button type="submit" className="signIn-button">
                Entrar
              </button>
            </div>
          </form>
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
