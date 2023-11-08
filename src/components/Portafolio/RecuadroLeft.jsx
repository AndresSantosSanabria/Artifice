import "../Portafolio/RecuadroLeft.css"

const RecuadroLeft = (props) => {
    return<>
        <div className="DivContainer">
            <div className="boxLeft">
                <h1 className="ColorLetra">{props.Titulo}</h1>
            </div>

            <div className="BloqueL" onClick={props.onClick}>
                <h1 className='Texto'>VER MÁS...</h1>
                <img className="PortImg1" src={`img/ImgArtifice/${props.img1}`} alt={props.AltImg1} loading="lazy"></img>
                <img className="PortImg2" src={`img/ImgArtifice/${props.img2}`} alt={props.AltImg2} loading="lazy"></img>
                <img className="PortImg3" src={`img/ImgArtifice/${props.img3}`} alt={props.AltImg3} loading="lazy"></img>
                <img className="PortImg4" src={`img/ImgArtifice/${props.img4}`} alt={props.AltImg4} loading="lazy"></img>
                <img className="PortImg5" src={`img/ImgArtifice/${props.img5}`} alt={props.AltImg5} loading="lazy"></img>              
            </div>
            
        </div>
    </>
}
export default RecuadroLeft;