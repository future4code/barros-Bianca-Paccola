import React from 'react'
import './style.js'
import { Icones, IconImage } from './style.js'
import instagram from "../../img/instagram.png"
import facebook from "../../img/facebook.png"
import twitter from "../../img/twitter.png"


export function SecaoCompartilhar(props) {
	return (
		<Icones>
            		< IconImage alt={'Icone'} src={instagram}/>
                    < img className ='IconImage' alt={'Icone'} src={facebook}/>
                    < img className ='IconImage' alt={'Icone'} src={twitter}/>
		</Icones>
	)
}