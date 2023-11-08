
import BeneficiosHome from "../components/BeneficiosHome/BeneficiosHome";
import GaleriaHover from "../components/GaleriaHover/GaleriaHover";
import Mvn from "../components/MVN/Mvn";
import SliderHome from "../components/SliderHome/SliderHome.jsx";
import Titulos from "../components/Titulos/Titulo.jsx";


function Home() {
    window.scrollTo(0, 0);
    return (
        <>
        <SliderHome></SliderHome>
        <Titulos titulo1="Proyectos Destacados"></Titulos>
        <GaleriaHover></GaleriaHover>
        <Mvn numero="1" Titulo="QUIÉNES SOMOS" 
        sub="Una experiencia 100% integral"
        p1="Lo simplificamos en una frase, “ el espacio es tuyo, el diseño interior es nuestro”. Por eso nos encanta ayudar a buscar la mejor solución que permita mejorar la calidad de vida de nuestro clientes a través de la creación de espacios armónicos y funcionales."
        p2="Idealo ofrece un soporte personalizado y junto a ellos, comercializamos productos que nos lleven a concretar y hacer realidad una idea, A esto nos dedicamos y es lo que hacemos ya que es nuestra pasión y razón de ser."
        imagen="ARENA/0.webp "></Mvn>
        <Titulos titulo1=" Nuestros Valores"></Titulos>
        <BeneficiosHome></BeneficiosHome>
        </>
    );
}
export default Home;