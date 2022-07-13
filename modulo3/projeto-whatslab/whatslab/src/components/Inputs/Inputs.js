import React from "react";
import { FormMsg } from "../../style";

export function Inputs(props) {
  return (
    <FormMsg onSubmit={props.enviar}>
      <label>
        Remetente:
        <input
          type="text"
          id="remetente"
          value={props.remetente}
          onChange={props.handleRemetente}
          autoFocus
        ></input>
      </label>
      <label>
        Msg:
        <textarea
          placeholder="Digite sua mensagem..."
          rows="3"
          value={props.msg}
          onChange={props.handleMsg}
          onKeyPress={props.teclaEnter}
          maxLength={150}
        ></textarea>
      </label>
      <input type="submit" value="Enviar" />
    </FormMsg>
  );
}
