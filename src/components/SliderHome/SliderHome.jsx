import  "./SliderHome.css"

const SliderHome = ()=> {

    return <>

        <div className="Slide">
            <ul>
                <li className="TextoSecundaria1">
                    <img className="imgSlider" src="img/ImgArtifice/ARENA/9.webp"  alt="" />
                    <div className="textoSlider1">
                        <h5 className="Bienvenido">Bienvenido a Artifice</h5>
                            <h2 className="h2Slider">Remodela tu hogar con nosotros</h2>
                        <p className="ParrafoPrincipal">Porque creemos que tu casa puede ser de pelicula, queremos poner a tu alcance el diseño de interiores online.
                        Facil, divertido y asequiible</p>
                    </div>
                </li>
                <li  className="TextoSecundaria">
                    <img className="imgSlider" src="img/ImgArtifice/RIVER/IMG_3785.webp" alt="" />
                    <div className="textoSlider">
                    <h1 className="h1Slider">Puntualidad</h1>
                        <p className="letraSlider">Es nuestra imagen, nos hace trabajar mejor
                            y entregar mejores resultados</p>
                    </div>    
                </li>
                <li  className="TextoSecundaria">
                    <img className="imgSlider" src="img/ImgArtifice/PRIMAVERA/IMG_4118.webp"  alt="" />
                    <div className="textoSlider">
                    <h1 className="h1Slider">Acompañamiento</h1>
                        <p  className="letraSlider">Creamos valor a través de este beneficio
                            para garantizar la entrega a satisfacción y el
                            cumplimiento de cada uno de los procesos
                            en cada proyecto</p>
                    </div>
                </li>
                <li className="TextoSecundaria">
                    <img  className="imgSlider" src="img/ImgArtifice/MAR/IMG_5991-1.webp"  alt="" />
                    <div className="textoSlider">
                    <h1 className="h1Slider">Confianza</h1>
                        <p  className="letraSlider">Lo traducimos como trabajo en equipo,
                                con nuestros compañeros, nuestros aliados
                                y se lo transmitimos a nuestros clientes.  </p>
                    </div>
                </li >
                <li className="TextoSecundaria">
                    <img  className="imgSlider" src="img/ImgArtifice/MAR/IMG_5991-1.webp"  alt="" />
                    <div className="textoSlider">
                    <h1 className="h1Slider">Confianza</h1>
                        <p  className="letraSlider">Lo traducimos como trabajo en equipo,
                                con nuestros compañeros, nuestros aliados
                                y se lo transmitimos a nuestros clientes.  </p>
                    </div>   
                </li>
            </ul>
        </div>
    </>
}
export default SliderHome ;