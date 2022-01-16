import Menu from './menu-aberto.png'
import Logo from './yt-logo.png'

function OpenLeftbar() {
    if (document.querySelector('.big-bar').classList.contains('open-big')) {
        document.querySelector('.big-bar').classList.remove('open-big')
        document.querySelector('.small-bar').style.display = 'block'
        
    } else {
        document.querySelector('.big-bar').classList.add('open-big')
        document.querySelector('.small-bar').style.display = 'none'
    }
}

export default () => 
        <div className="youtube-menu">
        <span onClick={OpenLeftbar}><img src={Menu} /></span>
        <span className='yt-logo'><a href="#root"><img src={Logo} /></a></span>
        </div>