import "./All.css"
import "./Login.css"

import Google from "./google_logo.png"

export default () => 
    <div className="container-login">
        <div className="content-login">
            <div className="tittle-login">
                <img src={Google}/>
                <p className="tittle">Fazer Login</p>
                <p className="sub-tittle">Prosseguir no YouTube</p>
            </div>
        </div>
    </div>