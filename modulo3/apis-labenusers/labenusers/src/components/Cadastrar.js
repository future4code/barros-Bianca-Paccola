import React from "react";

function Cadastrar (props) {
    return (
        <>
        <h1>Tela de Cadastro de Usuários:</h1>
        <p><strong>Para criar seu login:</strong> Preencha com seu nome e-email e clique no botão <em>Criar Usuário</em></p>
        <p>Para exibir a lista de usuário cadas, clique em <em>Lista Usuários</em></p>
        <form>
            <fieldset>
            <legend>Cadastrar</legend>
        <input 
            type='text'
            placeholder="Digite seu nome..."
            onChange = {props.setInputNome}
            value = {props.inputNome}
            />

            <input
            type='text'
            placeholder="Digite seu E-MAIL..."
            onChange = {props.setInputEmail}  
            value = {props.inputEmail}  
            />
            <button onClick={props.criarUser}>Criar Usuário</button>
            <button onClick={props.listarUsuarios}>Listar Usuários</button>
            </fieldset>
        </form>
        </>
    )
}

export default Cadastrar;