import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/screenStyles.css";

const SignIn = () => {
  return (
    <>
      <div className="row">
        <div className="col-7">
          <div className="col-3">
            <label className="form-label">Usuario</label>
            <input type="text" className="form-control" id="user"></input>
          </div>
          <div className="col-3">
            <label className="form-label">Senha</label>
            <input type="text" className="form-control" id="password"></input>
          </div>
          <div>
            <p className="link-p">Esqueceu sua Senha?</p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default SignIn;
