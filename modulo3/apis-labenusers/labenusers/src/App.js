import { React, useState } from "react";
import axios from "axios";
import Cadastrar from './components/Cadastrar'
import Listar from './components/Listar'
import Detalhes from './components/Detalhes'
import './App.css'

function App() {

  const [inputNome, setInputNome] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [listaUsers, setListaUsers] = useState(['Carregando...'])
  const [home, setHome] = useState(true)
  const [emailUser, setEmailUser] = useState('')
  const [nomeUser, setNomeUser] = useState('')
  const [busca, setBusca] = useState('')


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
    alert('Problemas com o servidor. Atualize a página e tente novamente')
  })
}

const lista = listaUsers.map((user)=>{
  return (
    <>
  <li key={user.id}>{user.name} <span onClick={() => excluirUser(user.id, user.name)}>X</span> <button onClick={() => mostrarEmail(user.id)}>Detalhes</button></li> 
  </>
  )
})

function listarUsuarios (e) {
  e.preventDefault()
  setHome(false)
  getAllUsers()
}

//----------------------Request para excluir Usuário------------------------//
function excluirUser (id, name) {
  
  if (window.confirm(`Tem certeza que quer excluir o/a usuário(a) ${name}?`)){
    const listaAtualizada = listaUsers.filter((user) => {
      return id !== user.id
    })

    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
        Authorization: 'bianca-paccola-barros'
      }
    }).then((response) => {
      window.alert("Usuário excluido com sucesso!!!")
      limparBusca()
    }).catch(() => {
      console.log("Houve algum erro :( , tente novamente!")
    })
    setListaUsers(listaAtualizada)
  }
}

//Função para voltar para o cadastro do usuário
function voltar () {
  setHome(!home)
  setEmailUser('')
  setNomeUser('')
  setBusca('')
}

//Request para ver o email
function mostrarEmail (id) {
  const getUserById = axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
    headers: {
      Authorization: 'bianca-paccola-barros'
    } 
  }).then((response) => {
    setEmailUser(response.data.email)
    setNomeUser(response.data.name)
  }).catch((error) => {
    alert(error)
  })
}

//Request para buscar
function buscaUser () {
  axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${busca}&email=`, {
    headers: {
      Authorization: 'bianca-paccola-barros'
    }
  }).then(() => {
    const listaAtualizada = listaUsers.filter((user) => {
      return user.name === busca
    })
    setListaUsers(listaAtualizada)
    setEmailUser('')
    setNomeUser('')

  }).catch((error) => {
    console.log('errrr')
    alert(error)
  })
}

//Limpar Campo Busca
function limparBusca (e) {
  e.preventDefault()
  getAllUsers()
  setBusca('')
  setEmailUser('')
  setNomeUser('')
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
                  busca = {busca}
                  change = {(event) => setBusca(event.target.value)}
                  buscaUser = {buscaUser}
                  limparBusca = {limparBusca}
                />
  }

  return (
    <div className="App">
      {conteudo}
      {!home &&     
      <Detalhes
      email = {emailUser}
      nome = {nomeUser}
      />
      }
    </div>
  );
}

export default App;
