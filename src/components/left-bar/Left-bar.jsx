//import jsx
import OpicionMenu from "./components/opicions.jsx"
import OpicionSmall from "./components/opicion-small.jsx"

//import css
import "./left-bar.css"
import "./components/opicions.css"
import "./components/opicion-small.css"

//import foto
import Home from "./components/web-house.png"
import Inscricao from "./components/inscricao.png"
import Explorar from "./components/explorar.png"
import Musica from "./components/musica.png"
import Biblioteca from "./components/biblioteca.png"

export default () =>
    <div className="left-bar">
        <div className="small-bar">
            <OpicionSmall Foto={Home} OpicionTitle="Início"/>
            <OpicionSmall Foto={Explorar} OpicionTitle="Explorar"/>
            <OpicionSmall Foto={Inscricao} OpicionTitle="Incrições"/>
            <OpicionSmall Foto={Musica} OpicionTitle="Music"/>
            <OpicionSmall Foto={Biblioteca} OpicionTitle="Biblioteca"/>
        </div>
        <div className="big-bar open-big">
           <div className="content-big-bar">
               <OpicionMenu OpicionTitle="Início" Foto={Home} selected/>
               <OpicionMenu OpicionTitle="Explorar" Foto={Explorar}/>
               <OpicionMenu OpicionTitle="Incrições" Foto={Inscricao}/>
               <OpicionMenu OpicionTitle="Music" Foto={Musica}/>
           </div>
           <div className="content-big-bar">
               <OpicionMenu OpicionTitle="Biblioteca" Foto={Home}/>
               <OpicionMenu OpicionTitle="Histórico" Foto={Explorar}/>
               <OpicionMenu OpicionTitle="Seus vídeos" Foto={Inscricao}/>
               <OpicionMenu OpicionTitle="Assistir mais tarde" Foto={Musica}/>
               <OpicionMenu OpicionTitle="Vídeos curtidos" Foto={Musica}/>
           </div>

           <OpicionMenu OpicionTitle="MAIS DO YOUTUBE" tittle/>

           <div className="content-big-bar">
               <OpicionMenu OpicionTitle="Início" Foto={Home}/>
               <OpicionMenu OpicionTitle="Explorar" Foto={Explorar}/>
               <OpicionMenu OpicionTitle="Incrições" Foto={Inscricao}/>
               <OpicionMenu OpicionTitle="YouTube Music" Foto={Musica}/>
           </div>
           <div className="content-big-bar">
               <OpicionMenu OpicionTitle="YouTube Premium" Foto={Home}/>
               <OpicionMenu OpicionTitle="Filmes" Foto={Explorar}/>
               <OpicionMenu OpicionTitle="Jogos" Foto={Inscricao}/>
               <OpicionMenu OpicionTitle="Ao vivo" Foto={Musica}/>
               <OpicionMenu OpicionTitle="Aprender" Foto={Explorar}/>
               <OpicionMenu OpicionTitle="Esportes" Foto={Inscricao}/>
           </div>

           <OpicionMenu OpicionTitle="OPIÇÕES" tittle/>

           <div className="content-big-bar">
               <OpicionMenu OpicionTitle="Configurações" Foto={Home}/>
               <OpicionMenu OpicionTitle="Denúncias" Foto={Explorar}/>
               <OpicionMenu OpicionTitle="Ajuda" Foto={Inscricao}/>
               <OpicionMenu OpicionTitle="Feedback" Foto={Musica}/>
           </div>
        </div>
    </div>