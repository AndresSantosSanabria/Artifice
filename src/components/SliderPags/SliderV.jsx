import  "./SliderV.css"

const SliderV = (props)=> {
    return <>
    <div className="sliderHome">
            <div className="TituloSlider"> 
                <h1>{props.nombre}</h1>
            </div>
        <div className="SlideV">
            <ul>
                <li>
                    <img className="imgSlider" src="img/ImgArtifice/ARENA/9.webp"  alt="" />
                </li>
                <li >
                    <img className="imgSlider" src="img/ImgArtifice/RIVER/IMG_3785.webp" alt="" />
                </li>
                <li>
                    <img className="imgSlider" src="img/ImgArtifice/PRIMAVERA/IMG_4118.webp"  alt="" />
                </li>
                <li>
                    <img  className="imgSlider" src="img/ImgArtifice/MAR/IMG_5991-1.webp"  alt="" />
                </li>
                <li>
                    <img  className="imgSlider" src="img/ImgArtifice/PRIMAVERA/D223CF74-002E-47A6-ADAA-0834614C159F - copia.webp"  alt="" />
                </li>
            </ul>
            
        </div>
        
    </div>
    </>
}
export default SliderV;