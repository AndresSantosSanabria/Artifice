import "./Footer.css"
import { Link } from 'react-router-dom';
import { TiSocialInstagram,TiSocialFacebookCircular,TiSocialLinkedin } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () =>{

    return <>
    <footer className="Footer">
            <div className="CajaFooter1">
                <div  className="CajaFooter2">
                    <img className="LogoFooter" src="img/ImgArtifice/Iconos/Captura de pantalla 2023-10-05 120636-PhotoRoom.png-PhotoRoom.png" alt=""></img>
                </div>
                    <div className="LinkSFooter">
                        <div className="LinkFooter">
                            <Link className="EnlaceFooter"to="/">Inicio</Link>
                        </div><hr></hr>
                        <div className="LinkFooter">
                            <Link className="EnlaceFooter" to="/Nosotros">Nosotros</Link>
                        </div><hr></hr>
                        <div className="LinkFooter">
                            <Link className="EnlaceFooter" to="/Contacto">Contacto</Link>
                        </div><hr></hr>
                        <div className="LinkFooter">
                            <Link className="EnlaceFooter"to="/Portafolio">Portafolio</Link>
                        </div><hr></hr>
                    </div>
                    <div className="RedesSociales">
                        <ul className="RedesSocialesDiseño">
                            <li className="RedesSocialesLi">
                                <a  href="https://www.instagram.com/arq.danielasilvag/?next=%2F" target="_blank" rel="noreferrer"><TiSocialInstagram></TiSocialInstagram></a>
                            </li>
                            <li className="RedesSocialesLi">
                            <a  href="https://web.facebook.com/Idealoespacios?mibextid=LQQJ4d&_rdc=1&_rdr" target="_blank" rel="noreferrer"><TiSocialFacebookCircular></TiSocialFacebookCircular></a>
                            </li>
                            <li className="RedesSocialesLi">
                                <a href="https://www.linkedin.com/company/art%C3%ADficeinteriordesign/about/" target="_blank" rel="noreferrer"><TiSocialLinkedin></TiSocialLinkedin></a>
                            </li>
                            <li className="RedesSocialesLi">
                                <a href="https://api.whatsapp.com/send?phone=573238034969&text=Buen+día.👋%0AMe+gustaría+saber+un+poco+más+acerca+de+los+servicios+que+ofrece+artífice.🏡" target="_blank" rel="noreferrer"><FaWhatsapp></FaWhatsapp></a>
                            </li>
                        </ul> 
                    </div>
                    <div>
                        <p className="copyright">copyright  &copy;​ 2023 artifice</p>
                    </div>
            </div>
    </footer>
    </>
}

export default Footer;