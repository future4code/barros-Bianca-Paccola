import React from "react";

function Listar (props) {
    return (
        <>
            <h1>Lista de usuários cadastrados no sistema:</h1>
            <ul>
                {props.lista}
            </ul>
            <button onClick={props.voltar}>Voltar</button>
        </>
    )
}

export default Listar;