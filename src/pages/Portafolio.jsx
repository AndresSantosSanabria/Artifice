import React from 'react';
import { useNavigate } from 'react-router-dom';
import SliderV from "../components/SliderPags/SliderV";
import RecuadroLeft from "../components/Portafolio/RecuadroLeft";
import RecuadroRight from "../components/Portafolio/RecuadroRight";

function  Portafolio() {
    window.scrollTo(0, 0);
    const navigate = useNavigate();
    const ClickARENA = () => {  
        navigate('/galeria?opcion=opcion1');
    };
      
    const ClickARTICO = () => {
        navigate('/galeria?opcion=opcion2');
    };

    const ClickATTICO = () => {  
        navigate('/galeria?opcion=opcion3');
    };
      
    const ClickFARO = () => {
        navigate('/galeria?opcion=opcion4');
    };

    const ClickMAR = () => {  
        navigate('/galeria?opcion=opcion5');
    };
      
    const ClickLUANA = () => {
        navigate('/galeria?opcion=opcion6');
    };

    const ClickPRIMAVERA = () => {  
        navigate('/galeria?opcion=opcion7');
    };
      
    const ClickRIVER = () => {
        navigate('/galeria?opcion=opcion8');
    };
    
    const ClickPalma = () => {
        navigate('/galeria?opcion=opcion9')
    };


    return (
        <>
        <SliderV nombre="Portafolio"></SliderV>
        <RecuadroLeft
            Titulo = 'ARENA'
            img1= 'ARENA/4.webp' AltImg1= 'Portafolio Arena img1'
            img2= 'ARENA/1.webp' AltImg2= 'Portafolio Arena img2' 
            img3= 'ARENA/0.webp' AltImg3= 'Portafolio Arena img3' 
            img4= 'ARENA/3.webp' AltImg4= 'Portafolio Arena img4' 
            img5= 'ARENA/5.webp' AltImg5= 'Portafolio Arena img5' 
            onClick ={ClickARENA}> 
        </RecuadroLeft>
        
        <RecuadroRight
            Titulo= 'ARTICO'
            img1= 'ARTCO/c8b13e50-1fda-47b9-b7ce-48eac0d7dc53.webp' AltImg1= 'Portafolio Artico img1'
            img2= 'ARTCO/c6071fd0-31a2-4221-852d-62e8de6f341f.webp' AltImg2= 'Portafolio Artico img2'
            img3= 'ARTCO/39df2086-ac43-4be4-8dd8-30a903f2acc3.webp' AltImg3= 'Portafolio Artico img3'
            img4= 'ARTCO/1e1f5d76-65f1-4eb1-8574-1ba7a01a67cc.webp' AltImg4= 'Portafolio Artico img4'
            img5= 'ARTCO/7f22148b-f006-4126-8669-c710918c924a.webp' AltImg5= 'Portafolio Artico img5'
            onClick ={ClickARTICO}>
        </RecuadroRight>

        <RecuadroLeft 
            Titulo= 'ATTICO'
            img1= 'ATTICO/IMG_0352.webp' AltImg1= 'Portafolio Attico img1'
            img2= 'ATTICO/IMG_0347.webp' AltImg2= 'Portafolio Attico img2'
            img3= 'ATTICO/IMG_0341.webp' AltImg3= 'Portafolio Attico img3'
            img4= 'ATTICO/IMG_0452.webp' AltImg4= 'Portafolio Attico img4'
            img5= 'ATTICO/IMG_0355.webp' AltImg5= 'Portafolio Attico img5'
            onClick={ClickATTICO}>
        </RecuadroLeft>
        
        <RecuadroRight
            Titulo= 'FARO'
            img1= 'FARO/IMG_3952.webp' AltImg1= 'Portafolio Faro img1'
            img2= 'FARO/IMG_3949.webp' AltImg2= 'Portafolio Faro img2'
            img3= 'FARO/IMG_3951.webp' AltImg3= 'Portafolio Faro img3'
            img4= 'FARO/IMG_3996.webp' AltImg4= 'Portafolio Faro img4'
            img5= 'FARO/IMG_4006.webp' AltImg5= 'Portafolio Faro img5'
            onClick = {ClickFARO}>
        </RecuadroRight>
        
        <RecuadroLeft
            Titulo= 'MAR'
            img1 = 'MAR/IMG_0718.webp' AltImg1= 'Portafolio Mar img1'
            img2 = 'MAR/IMG_0826.webp' AltImg2= 'Portafolio Mar img2'
            img3 = 'MAR/IMG_0722.webp' AltImg3= 'Portafolio Mar img3'
            img4 = 'MAR/IMG_5991-1.webp' AltImg4= 'Portafolio Mar img4'
            img5 = 'MAR/IMG_0835.webp' AltImg5= 'Portafolio Mar img5'
            onClick ={ClickMAR}>
        </RecuadroLeft>

        <RecuadroRight
            Titulo= 'LUANA'
            img1= 'LUANA/IMG_3670.webp' AltImg1= 'Portafolio Luana img1'
            img2= 'LUANA/IMG_4073.webp' AltImg2= 'Portafolio Luana img2'
            img3= 'LUANA/IMG_4078.webp' AltImg3= 'Portafolio Luana img3'
            img4= 'LUANA/IMG_3665(1).webp' AltImg4= 'Portafolio Luana img4'
            img5= 'LUANA/IMG_4049.webp' AltImg5= 'Portafolio Luana img5'
            onClick = {ClickLUANA}>
        </RecuadroRight>

        <RecuadroLeft
            Titulo= 'PRIMAVERA'
            img1= 'PRIMAVERA/IMG_4144.webp' AltImg1= 'Portafolio Primavera img1'
            img2= 'PRIMAVERA/IMG_4117.webp' AltImg2= 'Portafolio Primavera img2'
            img3= 'PRIMAVERA/IMG_4111.webp' AltImg3= 'Portafolio Primavera img3'
            img4= 'PRIMAVERA/IMG_4104.webp' AltImg4= 'Portafolio Primavera img4'
            img5= 'PRIMAVERA/IMG_3736.webp' AltImg5= 'Portafolio Primavera img5'
            onClick = {ClickPRIMAVERA}>
        </RecuadroLeft>

        <RecuadroRight
            Titulo= 'RIVER'
            img1= 'RIVER/IMG_3789.webp' AltImg1= 'Portafolio River img1'
            img2= 'RIVER/IMG_3788.webp' AltImg2= 'Portafolio River img2'
            img3= 'RIVER/IMG_3819.webp' AltImg3= 'Portafolio River img3'
            img4= 'RIVER/IMG_3793.webp' AltImg4= 'Portafolio River img4'
            img5= 'RIVER/IMG_3796.webp' AltImg5= 'Portafolio River img5'
            onClick ={ClickRIVER}>
        </RecuadroRight>

        <RecuadroLeft
            Titulo= 'PALMA'
            img1= 'PALMA/IMG_1971.webp' AltImg1= 'Portafolio Palma img1' 
            img2= 'PALMA/IMG_1963.webp' AltImg2= 'Portafolio Palma img2'
            img3= 'PALMA/IMG_1974.webp' AltImg3= 'Portafolio Palma img3'
            img4= 'PALMA/IMG_2024.webp' AltImg4= 'Portafolio Palma img4'
            img5= 'PALMA/IMG_2040.webp' AltImg5= 'Portafolio Palma img5'
            onClick = {ClickPalma}>
    </RecuadroLeft>
        
        </>
    );
}

export default Portafolio; 