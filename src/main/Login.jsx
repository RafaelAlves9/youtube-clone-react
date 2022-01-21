import { Link } from "react-router-dom"

import "./All.css"
import "./Login.css"

import Google from "../components/Login/google_logo.png"

export default () => 
    <div className="container-login">
        <div className="content-login">

            <div className="tittle-login">
                <img src={Google}/>
                <p className="tittle-login-h1">Fazer Login</p>
                <p className="sub-tittle-login">Prosseguir no YouTube</p>
            </div>

            <div className="input-login">
                <input type="email" placeholder="E-mail ou telefone"/>
                <p className='button-link'>Esqueceu seu e-mail?</p>
                <p className='messenge'>Não está no seu computador? Use o modo visitante para fazer login com privacidade. <span className='button-link'>Saiba mais</span></p>
            </div>


            <div className='send-login'>
                <Link to="/"><p className='button-link'>Retornar</p></Link>
                <span className='button-link'>Continuar</span>
            </div>
            
        </div>
    </div>