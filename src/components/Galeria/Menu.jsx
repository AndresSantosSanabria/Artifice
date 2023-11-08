import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import '../Galeria/Menu.css';
import './Boximg.css';                                      
import SliderV from "../SliderPags/SliderV";
const Menu = () => {

  const location = useLocation(); 
  const searchParams = new URLSearchParams(location.search);
  const selectedOption = searchParams.get('opcion') || 'ver-mas-proyectos'; 
  

  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const newOption = event.target.value;
    window.scrollTo(0, 0);
    navigate(`/galeria?opcion=${newOption}`);
  };

  const Boximg = (props) => {
    return (
      <>
          <div className="Bloqueimg">
              <img className="PortImg8" src={`img/ImgArtifice/${props.img8}`} alt={props.AltImg8} loading="lazy"></img>
          </div>
      </>
    );
  };
  
  const BoxDes =(props) =>{
      return<>
          <div className="BloqueDes">
              <img className="PortImg8" src={`img/ImgArtifice/${props.img8}`} alt={props.AltImg8} loading="lazy"></img>
          </div>
      </>
  }

  return (
    <>
        
        {selectedOption === 'opcion1' && (
            <>
                <SliderV nombre="ARENA"></SliderV>
                <Boximg img8= 'ARENA/9.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'ARENA/1.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <BoxDes img8= 'ARENA/2.webp' AltImg1= 'Portafolio Arena img1'></BoxDes>
                <Boximg img8= 'ARENA/3.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'ARENA/0.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'ARENA/7.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'ARENA/6.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'ARENA/5.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'ARENA/8.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
              {/* Agrega más imágenes aquí */}
            </>
        )}

        {selectedOption === 'opcion2' && (
            <>
            <SliderV nombre="ARTICO"></SliderV>
                <Boximg img8= 'ARTCO/b13beaf4-6510-4e1e-9260-beecd306d3bb.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'ARTCO/1e1f5d76-65f1-4eb1-8574-1ba7a01a67cc.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <BoxDes img8= 'ARTCO/c658ee2f-9252-4c27-be6c-016d08b60932.webp' AltImg8= 'Portafolio Arena img1'></BoxDes>
                <Boximg img8= 'ARTCO/c8b13e50-1fda-47b9-b7ce-48eac0d7dc53.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'ARTCO/c6071fd0-31a2-4221-852d-62e8de6f341f.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'ARTCO/39df2086-ac43-4be4-8dd8-30a903f2acc3.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'ARTCO/33435ee0-75ef-438f-836d-2041d99d4d2d.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'ARTCO/00b389a1-e9ce-44b0-9c4c-a4beba087626.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'ARTCO/7f22148b-f006-4126-8669-c710918c924a.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
            </>
        )}

        {selectedOption === 'opcion3' && (
            <>
                <SliderV nombre="ATTICO"></SliderV>
                <Boximg img8= 'ATTICO/IMG_0377.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'ATTICO/IMG_0360.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <BoxDes img8= 'ATTICO/IMG_0444.webp' AltImg1= 'Portafolio Arena img1'></BoxDes>
                <Boximg img8= 'ATTICO/IMG_0446.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'ATTICO/IMG_0449.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'ATTICO/IMG_0453.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'ATTICO/IMG_0454.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'ATTICO/IMG_0380.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'ATTICO/IMG_0456.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
            </>
        )}

        {selectedOption === 'opcion4' && (
            <>
                <SliderV nombre="FARO"></SliderV>
                <Boximg img8= 'FARO/IMG_3950.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'FARO/IMG_3998.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <BoxDes img8= 'FARO/IMG_4006.webp' AltImg1= 'Portafolio Arena img1'></BoxDes>
                <Boximg img8= 'FARO/IMG_4009.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'FARO/IMG_4010.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'FARO/IMG_3954.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'FARO/IMG_3949.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'FARO/IMG_3955.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'FARO/IMG_3957.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
            </>
        )}
        
        {selectedOption === 'opcion5' && (
            <>
                <SliderV nombre="MAR"></SliderV>
                <Boximg img8= 'MAR/IMG_0720.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'MAR/IMG_0722.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <BoxDes img8= 'MAR/IMG_0764.webp' AltImg1= 'Portafolio Arena img1'></BoxDes>
                <Boximg img8= 'MAR/IMG_0827.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'MAR/IMG_0835.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'MAR/IMG_0849.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'MAR/IMG_0851.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'MAR/IMG_0886.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'MAR/IMG_5991-1.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
            </>
        )}
        
        {selectedOption === 'opcion6' && (
            <>
                <SliderV nombre="LUANA"></SliderV>
                <Boximg img8= 'LUANA/IMG_3654.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'LUANA/IMG_3666.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <BoxDes img8= 'LUANA/IMG_3645.webp' AltImg1= 'Portafolio Arena img1'></BoxDes>
                <Boximg img8= 'LUANA/IMG_3661.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'LUANA/IMG_3667.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'LUANA/IMG_4064.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'LUANA/IMG_4047.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'LUANA/IMG_4078.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'LUANA/IMG_3668.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
            </>
        )}
        
        {selectedOption === 'opcion7' && (
            <>
                <SliderV nombre="PRIMAVERA"></SliderV>
                <Boximg img8= 'PRIMAVERA/IMG_3695.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'PRIMAVERA/IMG_3735.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <BoxDes img8= 'PRIMAVERA/IMG_4102.webp' AltImg1= 'Portafolio Arena img1'></BoxDes>
                <Boximg img8= 'PRIMAVERA/IMG_4106.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'PRIMAVERA/IMG_4117.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'PRIMAVERA/IMG_4118.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'PRIMAVERA/IMG_4144.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'PRIMAVERA/IMG_4111.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'PRIMAVERA/IMG_4112.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
            </>
        )}
        
        {selectedOption === 'opcion8' && (
            <>
                <SliderV nombre="RIVER"></SliderV>
                <Boximg img8= 'RIVER/IMG_3785.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'RIVER/IMG_3787.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <BoxDes img8= 'RIVER/IMG_3788.webp' AltImg1= 'Portafolio Arena img1'></BoxDes>
                <Boximg img8= 'RIVER/IMG_3789.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'RIVER/IMG_3793.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'RIVER/IMG_3796.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'RIVER/IMG_3802.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'RIVER/IMG_3819.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'RIVER/IMG_3785.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
            </>
        )}
          
        {selectedOption === 'opcion9' && (
            <>
                <SliderV nombre="PALMA"></SliderV>
                <Boximg img8= 'PALMA/IMG_1962.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'PALMA/IMG_1959.webp' AltImg8= 'Portafolio Arena img1'></Boximg>
                <BoxDes img8= 'PALMA/IMG_1965.webp' AltImg1= 'Portafolio Arena img1'></BoxDes>
                <Boximg img8= 'PALMA/IMG_1972.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'PALMA/IMG_1987.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'PALMA/IMG_2024.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'PALMA/IMG_1997.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'PALMA/IMG_1990.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
                <Boximg img8= 'PALMA/IMG_1977.webp' AltImg1= 'Portafolio Arena img1'></Boximg>
            </>
        )}
        <div className="btnsGalery">
            <div className="containerBtn">
                <select className='menu-options' onChange={handleSelectChange} value={selectedOption}>
                    <option value="" disabled> Ver más proyectos</option>
                    <option value="opcion1">Arena</option>
                    <option value="opcion2">Artico</option>
                    <option value="opcion3">Attico</option>
                    <option value="opcion4">Faro</option>
                    <option value="opcion5">Mar</option>
                    <option value="opcion6">Luana</option>
                    <option value="opcion7">Primavera</option>
                    <option value="opcion8">River</option>
                    <option value="opcion9">Palma</option>
                </select>

                <button className='BoxPortafolio' onClick={() => navigate("/Portafolio")}> Volver al portafolio </button>
                
            </div>
        </div>
    </>
);
};
export default Menu;