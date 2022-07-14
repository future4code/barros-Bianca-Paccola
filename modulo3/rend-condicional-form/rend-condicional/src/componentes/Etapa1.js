import React from "react";
import {Form} from '../style'

function Etapa1(props) {
    return( 
    <Form>
        <label>
            Nome:
            <input type="text" id="remetente"></input>
      </label>
      <label>
        Idade:
        <input type="number"></input>
      </label>
      <label>
        Email:
        <input type='email'></input>
      </label>
      <label>
        Grau de escolaridade
        <select value={props.select} onChange={props.opcao}>
          <option value="medio">Ensino Médio Incompleto</option> 
          <option value="medio">Ensino Médio Completo</option>
          <option value="superior">Superior Incompleto</option>
          <option value="superior">Superior Completo</option>
        </select>
      </label>
    </Form>
    )
}

export default Etapa1;
