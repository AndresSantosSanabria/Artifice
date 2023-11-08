import "./Mvn.css"
import { FaCouch } from 'react-icons/fa';
import { BiSolidHomeHeart } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

function modo1(titulo,sub,p1,p2,imagen) {
    AOS.init();
    return <>
        <div className="MvnPadre Mvn1">
                
                <div className="MvnText">
                    <FaCouch className="icono"></FaCouch>
                    <h1>{titulo}</h1>
                    <h3>{sub}</h3>
                        <p>{p1}</p>
                        <p>{p2}</p> 
                </div>
                <div className="MvnImg NvnImg1" >
                    <img className="QuienesSomos" src={`img/ImgArtifice/${imagen}`} alt="" loading="lazy"/>
                </div>
            </div>
        </>
}
function modo2(titulo,sub,p1,p2,imagen) {
    return <>
        <section className="MvnPadre Mvn2" >
                <div className="MvnImg NvnImg2">
                    <img  src={`img/ImgArtifice/${imagen}`} alt="" loading="lazy"/>
                </div>
                <div className="MvnText">
                <BiSolidHomeHeart className="icono"></BiSolidHomeHeart>
                    <h1>{titulo}</h1>
                    <h3>{sub}</h3>
                        <p>{p1}</p>
                        <p>{p2}</p> 
                </div>
            </section>
        </>
}
function Mvn(props) {
        const validar=()=>{
            if (props.numero === "1") {
                let a =modo1(props.Titulo, props.sub, props.p1, props.p2,props.imagen);
                return a 
            }else{
                let a =modo2(props.Titulo, props.sub, props.p1, props.p2,props.imagen);
                return a
            }
        }
    return (
        <>
            {validar()}
        </>
    )
}
export default Mvn;