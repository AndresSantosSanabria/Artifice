import "./BeneficiosHome.css";
import "./Beneficios.js"
import React, { useState, useEffect } from "react";

const App = () => {
    const [ancho, setAncho] = useState();
useEffect(() => {
    setAncho(window.innerWidth);
    window.addEventListener("resize", () => {
        setAncho(window.innerWidth);
    });
    }, []);
    if (ancho > 767) {
    return (

<div className="Valores1">
            <div className=" caja1 ">
            <div className="hhh">
                            <div className="GG">
                            <img className="iconoCorazon" src="img/ImgArtifice/Iconos/amor.png"  alt=""></img>
                                <p className="TituloCompu" ><strong>CREATIVIDAD</strong></p>
                                <p className="TextoBeneficios1">
                                <strong>Fomentamos la creatividad en cada proyecto, buscando soluciones
                                innovadoras y únicas para transformar espacios.</strong></p>
                            </div>
                    </div>
                    <div className="hhh">
                            <div className="GG">
                            <img className="iconoCorazon" src="img/ImgArtifice/Iconos/amor.png"  alt="" ></img>
                                <p className="TituloCompu" ><strong>COMPROMISO CON EL CLIENTE</strong> </p>
                                <p className="TextoBeneficios1">
                                <strong>Nos enfocamos en superar las expectativas de nuestros clientes 
                                y satisfacer sus necesidades de manera excepcional.</strong></p>
                            </div>
                    </div>
                    <div className="hhh">
                        <div className="GG">
                        <img className="iconoCorazon" src="img/ImgArtifice/Iconos/amor.png"  alt="" ></img>
                            <p className="TituloCompu" ><strong>CALIDAD</strong> </p>
                            <p className="TextoBeneficios1">
                            <strong>Buscamos la excelencia en cada detalle y nos esforzamos por entregar resultados de alta 
                            calidad en todos nuestros proyectos.</strong></p>
                        </div>
                    </div>
                    <div className="hhh">
                        <div className="GG">
                        <img className="iconoCorazon" src="img/ImgArtifice/Iconos/amor.png" alt="" ></img>
                            <p className="TituloCompu" ><strong>INTEGRIDAD</strong> </p>
                            <p className="TextoBeneficios1">
                            <strong>Actuamos con honestidad y transparencia en todas nuestras interacciones, manteniendo la confianza de 
                            nuestros clientes y colaboradores.</strong></p>
                        </div>
                    </div>
                    <div className="hhh">
                        <div className="GG">
                        <img className="iconoCorazon" src="img/ImgArtifice/Iconos/amor.png"  alt=""  ></img>
                            <p className="TituloCompu" ><strong>PASION POR EL DISEÑO</strong> </p>
                            <p className="TextoBeneficios1">
                            <strong>Nuestra pasión por el diseño y la arquitectura impulsa nuestra dedicación y
                            entusiasmo por cada proyecto.</strong></p>
                        </div>
                    </div>
                    <div className="hhh">
                        <div className="GG">
                        <img className="iconoCorazon" src="img/ImgArtifice/Iconos/amor.png"  alt=""  ></img>
                            <p className="TituloCompu" ><strong>SOSTENIBILIDAD</strong> </p>
                            <p className="TextoBeneficios1">
                            <strong>Nuestra pasión por el diseño y la arquitectura impulsa nuestra dedicación y
                            entusiasmo por cada proyecto.</strong></p>
                        </div>
                </div>
                    <div className="hhh">
                        <div className="GG">
                        <img className="iconoCorazon" src="img/ImgArtifice/Iconos/amor.png" alt="" ></img>
                            <p className="TituloCompu" ><strong>INNOVACION</strong> </p>
                            <p className="TextoBeneficios1">
                            <strong>Nuestra pasión por el diseño y la arquitectura impulsa nuestra dedicación y
                            entusiasmo por cada proyecto.</strong></p>
                        </div>
                    </div>
                </div>
        </div>
    );
    }else{

    return (
        <div className="valoresPadre">
<div className="Valores">
            <div className=" caja ">
                    <div className="hh">
                            <div className="GG">
                            <img className="iconoCorazon" src="img/ImgArtifice/Iconos/amor.png"  alt="" ></img>
                                <p className="Titulo" ><strong>CREATIVIDAD</strong> </p>
                                <p className="TextoBeneficios">
                                <strong>Fomentamos la creatividad en cada proyecto,
                                buscando soluciones innovadoras y únicas para transformar espacios.</strong></p>
                            </div>
                    </div>
                    <div className="hh">
                            <div className="GG">
                            <img className="iconoCorazon" src="img/ImgArtifice/Iconos/amor.png"  alt="" ></img>
                                <p className="Titulo" ><strong>COMPROMISO CON EL CLIENTE</strong> </p>
                                <p className="TextoBeneficios">
                                <strong>Nos enfocamos en superar las expectativas de nuestros clientes 
                                y satisfacer sus necesidades de manera excepcional.</strong></p>
                            </div>
                    </div>
                    <div className="hh">
                        <div className="GG">
                        <img className="iconoCorazon" src="img/ImgArtifice/Iconos/amor.png"  alt="" ></img>
                            <p className="Titulo" ><strong>CALIDAD</strong> </p>
                            <p className="TextoBeneficios">
                            <strong>Buscamos la excelencia en cada detalle y nos esforzamos por entregar resultados de alta 
                            calidad en todos nuestros proyectos.</strong></p>
                        </div>
                    </div>
                    <div className="hh">
                        <div className="GG">
                        <img className="iconoCorazon" src="img/ImgArtifice/Iconos/amor.png"   alt="" ></img>
                            <p className="Titulo" ><strong>INTEGRIDAD</strong> </p>
                            <p className="TextoBeneficios">
                            <strong>Actuamos con honestidad y transparencia en todas nuestras interacciones, manteniendo la confianza de 
                            nuestros clientes y colaboradores.</strong></p>
                        </div>
                    </div>
                    <div className="hh">
                        <div className="GG">
                        <img className="iconoCorazon" src="img/ImgArtifice/Iconos/amor.png"  alt=""  ></img>
                            <p className="Titulo" ><strong>PASION POR EL DISEÑO</strong> </p>
                            <p className="TextoBeneficios">
                            <strong>Nuestra pasión por el diseño y la arquitectura impulsa nuestra dedicación y
                            entusiasmo por cada proyecto.</strong></p>
                        </div>
                    </div>
                    <div className="hh">
                        <div className="GG">
                        <img className="iconoCorazon" src="img/ImgArtifice/Iconos/amor.png"  alt=""  ></img>
                            <p className="Titulo" ><strong>SOSTENIBILIDAD</strong> </p>
                            <p className="TextoBeneficios">
                            <strong>Nuestra pasión por el diseño y la arquitectura impulsa nuestra dedicación y
                            entusiasmo por cada proyecto.</strong></p>
                        </div>
                </div>
                    <div className="hh">
                        <div className="GG">
                        <img className="iconoCorazon" src="img/ImgArtifice/Iconos/amor.png" alt="" ></img>
                            <p className="Titulo" ><strong>INNOVACION</strong> </p>
                            <p className="TextoBeneficios">
                            <strong>Nuestra pasión por el diseño y la arquitectura impulsa nuestra dedicación y
                            entusiasmo por cada proyecto.</strong></p>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        );
    }
}
const BeneficiosHome =() =>{

    return < >
    <section>
      <App></App>
    </section>
    </>
}
    
export default BeneficiosHome;