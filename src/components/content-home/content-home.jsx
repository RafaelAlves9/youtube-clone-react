import Video from "./components/Video.jsx"
import Tittle from "./components/TittleVideo.jsx"

import "./content-home.css"
import "./components/Video.css"
import "./components/TittleVideo.css"

//import foto
import ReactTumb from "./components/reacttumb.png"
import Js from "./components/js.png"

export default () => 
    <div className="content-home">
         
        <Tittle TittleCategorie="Futebol" />
        <div className="categorias">
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
        </div>

        <Tittle TittleCategorie="Política" />
        <div className="categorias">
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
        </div>

        <Tittle TittleCategorie="Tecnologia" />
        <div className="categorias">
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
            <Video Tumb={ReactTumb} ImageCanal={Js} TittleVideo="YOUTUBE COM REACTJS" Canal="RAFAEL ALVES"/>
        </div>
    </div>