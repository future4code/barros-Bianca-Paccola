import React from "react";
import { FormMsg } from "../../style";

export function Inputs(Props) {
  return (
    <FormMsg onSubmit={Props.enviar}>
      <label>
        Remetente:
        <input
          type="text"
          id="remetente"
          value={Props.remetente}
          onChange={Props.handleRemetente}
        ></input>
      </label>
      <label>
        Msg:
        <textarea
        placeholder="Digite sua mensagem..."
          rows="3"
          value={Props.msg}
          onChange={Props.handleMsg}
          maxLength="150"
          ></textarea>
      </label>
      <input type='submit' value='Enviar' />
    </FormMsg>
  );
}
