import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import { Formulario } from "./styled";
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();

  const [body, onChange] = useForm({ email: "", password: "" });

  function login(event) {
    event.preventDefault();
    axios
    .post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login",
      body
      )
      .then((response) => {
        navigate("/admin/trips/list")
        console.log("deu certo");
      })
      .catch((error) => {
        console.log("deu erro");
      });
  }

  return (
    <>
      <h1>Login</h1>
      <Formulario onSubmit={login}>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          placeholder="Digite seu e-mail..."
          name="email"
          id="email"
          value={body.email}
          onChange={onChange}
          required
        />
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha..."
          name="password"
          value={body.password}
          onChange={onChange}
          required
        />
        <div>
          <button  type="submit">
            Entrar
          </button>
          <button onClick={() => navigate(-1)} type='button'> &#8592; Voltar</button>
        </div>
      </Formulario>
    </>
  );
}

export default LoginPage;
