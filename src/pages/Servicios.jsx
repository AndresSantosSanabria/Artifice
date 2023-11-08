import Empresa from "../components/NuestraEmpresa/Empresa";
import ServiciosArtifice from "../components/ServiciosArtifice/ServiciosArtifice";
import SliderV from "./../components/SliderPags/SliderV";
import Titulos from "./../components/Titulos/Titulo.jsx";

function Servicios() {
    window.scrollTo(0, 0);
    return (
        <>
        <SliderV nombre="Servicios"></SliderV>
        <ServiciosArtifice></ServiciosArtifice>
        <Titulos titulo1="Nuestra Empresa"></Titulos>
        <Empresa> </Empresa>
        </>
    );
} 

export default Servicios;