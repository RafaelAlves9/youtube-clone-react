import { Link } from 'react-router-dom'
import MenuA from './cardapio.png'
import MenuB from './menu-de-pontos.png'
import Perfil from './perfil.png'

export default () =>
    <div className="opicion-menu">
        <span className='opicions'><img src={MenuB} alt=""/></span>
        <span className='opicions'><img src={MenuA} alt=""/></span>
        <Link to="/login"><span className='login'><img src={Perfil} alt=""/>FAZER LOGIN</span></Link>

        {/* login mobile */}
        <span className='login-mobile'><img src={Perfil} alt=""/></span>
    </div>
