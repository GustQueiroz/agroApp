const SignIn = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <label className="form-label">Usuario</label>
            <input type="text" className="form-control" id="user"></input>
          </div>
          <div>
            <label className="form-label">Senha</label>
            <input type="text" className="form-control" id="password"></input>
          </div>
          <div>
            <label className="">Esqueceu sua Senha?</label>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default SignIn;
