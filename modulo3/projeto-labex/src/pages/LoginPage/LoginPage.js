import React from "react";
import { useNavigate } from 'react-router-dom'
import { useForm } from "../../hook/useForm";
import { usePostLogin } from "../../hook/usePostLogin";
import { Formulario } from "./styled";
import { BASE_URL } from '../../constants/constants'

function LoginPage() {
  const navigate = useNavigate()

  const [body, onChange] = useForm({email: '', password: ''})
  const [postLogin] = usePostLogin(`${BASE_URL}/login`, body)

  function login (event) {
    event.preventDefault()
    postLogin()
    console.log(body)
  }
  
  console.log(body)

    return (
      <>
        <h1>Login</h1>
        <Formulario onSubmit={login}>
          <label htmlFor="email">E-mail:</label>
          <input 
          type='email' 
          placeholder="Digite seu e-mail..." 
          name='email'
          id='email'
          value={body.email}
          onChange={onChange}
          required 
          />
          <label htmlFor="Digite sua senha...">Senha:</label>
          <input 
          type='password' 
          id='password'
          placeholder="Senha"
          name='password'
          value={body.password}
          onChange={onChange} 
          required 
          />
        <button onClick={() => navigate('/admin/trips/list')} type='submit'>Entrar</button>
        </Formulario>
        <button onClick={() => navigate(-1)}> 	&#8592; Voltar</button>
      </>
    );
  }
  
  export default LoginPage;