import Voz from './voz.png'

export default () =>
    <span className="search-top">
        <input type="text" placeholder="Pesquisar"/>
        <button>Ir</button>
        <span className='voz-icon'><img src={Voz} alt="" /></span>
    </span>