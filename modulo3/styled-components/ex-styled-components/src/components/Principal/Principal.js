import react from 'react'
import App from '../../App'
import {Main} from '../../style'

export function Principal() {
    return ( 
        <div>
            <Main>
                <aside></aside>
                <section>
                    <form>
                        <label>Remetente:
                        <input type='text' id='remetente'></input>
                        </label>
                        <label>Msg:
                        <input type='text' id='mensagem'></input>
                        </label>
                            <input type='submit' value='Enviar mensagem'></input>
                    </form>
                </section>
                <aside></aside>
            </Main>
        </div>
    )
}

