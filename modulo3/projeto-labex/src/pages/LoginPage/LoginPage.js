import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import { FormContainer } from "./styled";
import { PostLogin } from "../../hook/PostLogin";
import { BASE_URL } from "../../constants/constants";

function LoginPage() {
  const navigate = useNavigate();

  const [body, onChange, clear] = useForm({ email: "", password: "" });

  function login(event) {
    event.preventDefault()
    PostLogin(`${BASE_URL}/login`, body, navigate);
    clear()
  }

  return (
    <FormContainer>
      <h1>Login</h1>
      <form onSubmit={login}>
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
          <button type="submit">Entrar</button>
          <button onClick={() => navigate(-1)} type="button">
            &#8592; Voltar
          </button>
        </div>
      </form>
    </FormContainer>
  );
}

export default LoginPage;
