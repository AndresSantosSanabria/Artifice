import "./style.css"
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const App = () => {
  const navigate = useNavigate();
  const ClickARENA = () => {  
  navigate('/galeria?opcion=opcion1');
};
const ClickPRIMAVERA = () => {  
  navigate('/galeria?opcion=opcion7');
};
const ClickRIVER = () => {
  navigate('/galeria?opcion=opcion8');
};
const ClickMAR = () => {  
  navigate('/galeria?opcion=opcion5');
};
const ClickFARO = () => {
  navigate('/galeria?opcion=opcion4');
};
  const [ancho, setAncho] = useState();

    // const carousel = useRef();
// borrar
  useEffect(()=>{
    // setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[]);



  useEffect(() => {
    setAncho(window.innerWidth);
    // setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth); //borrar
    window.addEventListener("resize", () => {
      setAncho(window.innerWidth);
    });
  }, []);
  if (ancho > 767) {
    return (
        <div className="container">
          <div className="box box-1 img1" data-text="Arena" onClick={ClickARENA}></div>
          <div className="box box-2 img2" data-text="Primavera" onClick={ClickPRIMAVERA}></div>
          <div className="box box-3 img3" data-text="River" onClick={ClickRIVER}></div>
          <div className="box box-4 img4" data-text="Mar" onClick={ClickMAR}></div>
          <div className="box box-5 img5" data-text="Faro" onClick={ClickFARO}></div>
        </div>
    );
  }else{

    return (<div className="slider-container" >
              <div className="SliderG">
                  <div className="item"  onClick={ClickARENA}><img src="img/ImgArtifice/ARENA/5.webp"  alt=""/> <p>Arena</p> </div>
                  <div className="item" onClick={ClickPRIMAVERA}><img src="img/ImgArtifice/PRIMAVERA/primavera.webp" alt="" key={2}/> <p>Primavera</p> </div>
                  <div className="item" onClick={ClickRIVER}><img src="img/ImgArtifice/RIVER/IMG_3819.webp" alt=""  key={3}/> <p>River</p> </div>
                  <div className="item" onClick={ClickMAR}><img src="img/ImgArtifice/MAR/IMG_0855.webp" alt=""key={4}/> <p>Mar</p> </div>
                  <div className="item" onClick={ClickFARO}><img  src="img/ImgArtifice/FARO/IMG_3955.webp" alt="" key={5}/> <p>Faro</p> </div>
              </div>
            </div>
      );
  }
};


const GaleriaHover =() => {

    return < >
        <section>
          <App></App>
        </section>
        </>
    
}


export default GaleriaHover;
