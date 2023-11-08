import "./style.css"
import {motion} from "framer-motion";
import { useNavigate } from 'react-router-dom';
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
        <div className="containerHover">
          <div className="box box-1 img1" data-text="Arena" onClick={ClickARENA}></div>
          <div className="box box-2 img2" data-text="Primavera" onClick={ClickPRIMAVERA}></div>
          <div className="box box-3 img3" data-text="River" onClick={ClickRIVER}></div>
          <div className="box box-4 img4" data-text="Mar" onClick={ClickMAR}></div>
          <div className="box box-5 img5" data-text="Faro" onClick={ClickFARO}></div>
        </div>
    );
  }else{

    return (<motion.div className="slider-container" >
              <motion.div className="SliderG">
                  <motion.div className="item"><img src="img/ImgArtifice/ARENA/5.webp"  alt="" onClick={ClickARENA} key={1}/> <p>Arena</p> </motion.div>
                  <motion.div className="item" ><img src="img/ImgArtifice/PRIMAVERA/primavera.webp" alt="" onClick={ClickPRIMAVERA} key={2}/> <p>Primavera</p> </motion.div>
                  <motion.div className="item"><img src="img/ImgArtifice/RIVER/IMG_3819.webp" alt="" onClick={ClickRIVER} key={3}/> <p>River</p> </motion.div>
                  <motion.div className="item"><img src="img/ImgArtifice/MAR/IMG_0855.webp" alt="" onClick={ClickMAR} key={4}/> <p>Mar</p> </motion.div>
                  <motion.div className="item"><img  src="img/ImgArtifice/FARO/IMG_3955.webp" alt="" onClick={ClickFARO} key={5}/> <p>Faro</p> </motion.div>
                  <motion.div className="item"><img  src="img/ImgArtifice/PALMA/IMG_1981.webp" alt="" key={5}/> <p>Palma</p> </motion.div>
              </motion.div>
            </motion.div>
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
