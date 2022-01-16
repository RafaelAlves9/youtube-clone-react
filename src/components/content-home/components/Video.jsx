export default (props) => 
    <div className="video-block">
        <div className="video-image">
            <img src={props.Tumb}/>
        </div>
        <div className="video-descrition">
            <div className="image-canal"><img src={props.ImageCanal}/></div>
            <div className="descrition">
                <div className="video-tittle">{props.TittleVideo}</div>
                <div className="video-canal">{props.Canal}</div>
            </div>
        </div>
    </div>