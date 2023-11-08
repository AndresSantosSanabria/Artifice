import React from 'react'
import "./Servicios.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
function ServiciosArtifice() {
    AOS.init();
    return (
        <>
            <div className="containerServicios" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className="ServicioInteriores">
                    <p className='ServiciosTexto'>Diseño de interiores</p>
                </div>
                <div className="ServicioRemodelacion">
                <p className='ServiciosTexto'>Remodelacion de espacios</p>
                </div>
                <div className="ServicioArquitectura">
                <p className='ServiciosTexto'>Ariqutectura</p>
                </div>
                <div className="ServicioDiseño">
                <p className='ServiciosTexto'>Asesoria de diseño</p>
                </div>
                <div className="ServicioGestion">
                <p className='ServiciosTexto'>Gestion de proyectos</p>
                </div>
                <div className="Servicio3D">
                <p className='ServiciosTexto'>Visualizacion 3D</p>
                </div>
                <div className="ServicioPersonalizado">
                <p className='ServiciosTextoG'>Fabricacion de moviliario personalizado</p>
                </div>
            </div>
        </>
    )
}

export default ServiciosArtifice;
