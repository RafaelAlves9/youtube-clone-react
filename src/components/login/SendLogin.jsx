import { Link } from 'react-router-dom'
import './SendLogin.css'
import './InputLogin.css'

export default () =>
    <div className='send-login'>
        <Link to="/"><p className='button-link'>Retornar</p></Link>
        <span className='button-link'>Continuar</span>
    </div>