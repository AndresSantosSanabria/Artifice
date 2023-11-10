import SliderV from "./../components/SliderPags/SliderV"; 
import Formulario from "./../components/Form/Formulario"; 
import Titulo from "../components/Titulos/Titulo";
import Map from "../components/Map/Map"

function Contacto() {
    window.scrollTo(0, 0);
    return (
        <>
        <SliderV nombre="Contacto"></SliderV>
        <Titulo titulo1="Formulario"></Titulo>
        <Formulario></Formulario>
        <Titulo titulo1="Nos encuentras en:" titulo2="Cll. 4F # 39B - 20 / Bogotá - Colombia"></Titulo>
        <Map></Map>
        </>
    );
}

export default Contacto;