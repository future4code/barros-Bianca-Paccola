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
                        <div>
                            <label for='remetente'>Remetente:</label>
                            <input type='text' id='remetente'></input>
                        </div>
                        <div>
                        <label for='mensagem'>Msg:</label>
                        <input type='text' id='mensagem'></input>
                        </div>
                            <input type='submit' value='Enviar mensagem'></input>
                    </form>
                </section>
                <aside></aside>
            </Main>
        </div>
    )
}

