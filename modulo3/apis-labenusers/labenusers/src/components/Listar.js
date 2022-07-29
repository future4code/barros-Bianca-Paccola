import React from "react";

function Listar (props) {
    return (
        <>
            <h1>Lista de usuários cadastrados no sistema:</h1>
            <ul>
                {props.lista}
            </ul>
            <button onClick={props.voltar}>Voltar</button>
            <input type='text'
            value={props.busca}
            onChange={props.change}
            ></input>
            <button onClick={props.buscaUser}>Buscar</button>
            <button onClick={props.limparBusca}>Limpar</button>
        </>
    )
}

export default Listar;