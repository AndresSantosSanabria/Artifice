import SliderV from "./../components/SliderPags/SliderV";
import Equipo from "./../components/Equipo/Equipo.jsx";
import Mvn from "../components/MVN/Mvn";
function Nosotros() {
    window.scrollTo(0, 0);
    return (
        <>
        <SliderV nombre="Nosotros"></SliderV>
        <Mvn numero="2" Titulo="MISIÓN" p1="Transformar espacios en entornos inspiradores y funcionales, donde la belleza y la
funcionalidad son conceptos que trabajan de manera armoniosa. Nos
comprometemos a superar las expectativas de nuestros clientes a través de la
creatividad, la innovación y un servicio excepcional. Guiados por la pasión, por él
diseño y la excelencia en la ejecución y calidad, creamos soluciones
personalizadas que reflejan la visión única de cada cliente.
" imagen="RIVER/IMG_3796.webp " ></Mvn>
        <Mvn numero="1" Titulo="VISIÓN" p1="Ser reconocidos como líderes en el mundo del diseño interior, la remodelación de espacios y la arquitectura, marcando la pauta en la industria con nuestra creatividad y experiencia. Buscamos inspirar y mejorar la vida de las personas a través del diseño, dejando una huella positiva en cada proyecto que emprendemos. Trabajamos incansablemente para expandir nuestro alcance, construir relaciones sólidas y ser un referente en la transformación de espacios a nivel nacional e internacional." imagen="RIVER/IMG_3785.webp"></Mvn>
        <Equipo></Equipo>
        </>
    );
}

export default Nosotros;