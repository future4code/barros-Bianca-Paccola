import {Header1} from '../../style'
import logolabenu from '../images/labenu-logo.jpg'

export function Cabecalho() {
    return (
        <div>
            <Header1>
                <img src={logolabenu} alt='Logo Labenu'/>
                <h1>LabZap</h1>
            </Header1>
        </div>
    )
}







