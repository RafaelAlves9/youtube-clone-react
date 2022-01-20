import './opicions.css'

export default props =>{
    let classes = 'opicion-left-bar '
    classes += props.selected ? 'selected' : ''
    classes += props.tittle ? 'tittle' : ''

    return (
        <div className={classes}>
            <img src={props.Foto}/>
            {props.OpicionTitle}
        </div>
    )
}