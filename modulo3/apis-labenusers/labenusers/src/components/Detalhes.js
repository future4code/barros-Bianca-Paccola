import React from "react";

function Detalhes (props) {
    if(props.nome){
        return (
            <section>
                <p><strong>Nome:</strong> {props.nome}</p>
                <p><strong>Email: </strong><u>{props.email}</u></p>
            </section>
        )

    }

}

export default Detalhes;