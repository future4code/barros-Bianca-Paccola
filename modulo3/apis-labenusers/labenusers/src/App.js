import { React, useState } from "react";
import axios from "axios";
import Cadastrar from './components/Cadastrar'
import Listar from './components/Listar'
import './App.css'

function App() {

  const [inputNome, setInputNome] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [listaUsers, setListaUsers] = useState(['Carregando...'])
  const [home, setHome] = useState(true)


//------------------------Request para criar Usuário----------------------//
  const body = {
    name: inputNome,
    email: inputEmail
  }

  const createUser = () => axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
    headers: {
      Authorization : 'bianca-paccola-barros'
    }
  }).then((response) => {
    window.alert("Usuário cadastrado com sucesso!!!")
  }).catch((error) => {
    window.alert("Dados incompletos ou usuário já cadastrado: Revise os dados preenchidos!!!")
  })

  function CriarUser (e) {
    e.preventDefault()
    createUser()
    setInputEmail('')
    setInputNome('')
  }


//-----------------------Request para listar usuários-----------------------//
const getAllUsers = () => {
  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
    headers: {
      Authorization: 'bianca-paccola-barros'
    }
  }).then((response) => {
    setListaUsers(response.data)
  }).catch((error) => {
    console.log(error.response.data, 'não deu')
  })
}

const lista = listaUsers.map((user)=>{
  return (
    <>
  <li key={user.id}>{user.name} <span onClick={() => excluirUser(user.id)}>X</span></li> 

  </>
  )
})

function listarUsuarios (e) {
  e.preventDefault()
  setHome(!home)
  getAllUsers()
  console.log(conteudo)
}

//----------------------Excluir Usuário------------------------//
function excluirUser (id) {
  const listaAtualizada = listaUsers.filter((user) => {
    return id !== user.id
  })

  axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
    headers: {
      Authorization: 'bianca-paccola-barros'
    }
  }).then((response) => {
    window.alert("Usuário excluido com sucesso!!!")
  }).catch((error) => {
    window.alert("Houve algum erro :( , tente novamente!")
  })
  setListaUsers(listaAtualizada)
}

//Função para voltar para o cadastro do usuário
function voltar () {
  setHome(!home)
}

//Renderização condicional
  let conteudo;

  if (home === true) {
    conteudo = <Cadastrar
                inputNome = {inputNome}
                inputEmail = {inputEmail}
                setInputNome = {(event) => setInputNome(event.target.value)}
                setInputEmail = {(event) => setInputEmail(event.target.value)}
                criarUser = {CriarUser}
                listarUsuarios={listarUsuarios}
              />
  } else {
    conteudo = <Listar
                  lista={lista}
                  voltar={voltar}
                />
  }

  return (
    <div className="App">
      {conteudo}
    </div>
  );
}

export default App;
