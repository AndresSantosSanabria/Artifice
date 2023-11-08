
import "./Form.css"
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdPersonPinCircle } from "react-icons/md";
import { SiGmail } from "react-icons/si";

function Formulario() {
    

    return (
        <>
        <div className="content">
            <div className='contact-wrapper'>
                <div className="contact-form">
                    <h3>Contactanos</h3>
                    <form action="https://formsubmit.co/andressantos1544@gmail.com" method="POST">
                        <p>
                            <label>Nombres</label>
                            <input type="text" name='nombre' id='nombre' required/>
                        </p>
                        <p>
                            <label>Apellidos</label>
                            <input type="text" name='apellido' id='apellido' required/>
                        </p>
                        <p>
                            <label>Correo</label>
                            <input type="email" name='email' id='email' required/>
                        </p>
                        <p>
                            <label>Numero</label>
                            <input type="number" name='tel' id='tel' required/>
                        </p>
                        <p className="block">
                            <label>Mensaje</label>
                            <textarea type="text" name='Mensaje' id='Mensaje' row="3" required></textarea>
                        </p>
                        <p className="block">
                            <button type="submit" id="open">Enviar</button>
                            <input type="hidden" name="_next" value="http://localhost:3000/Contacto"/>
                            <input type="hidden" name="_captcha" value="false" />
                        </p>
                    </form>
                </div>
                <div className="contact-info">
                    <h4>Mas informacion</h4>
                    <ul>
                        <li><MdPersonPinCircle></MdPersonPinCircle> Cll. 4F # 39B - 20 / Bogotá - Colombia</li>
                        <li><BsFillTelephoneFill></BsFillTelephoneFill> 3124528721</li>
                        <li><SiGmail></SiGmail>artificeinterioedesign@gmail.com</li>
                    </ul>
                    <p>entendemos que el tiempo y la inversión de las personas
                    son aspectos fundamentales, lo cual nos lleva a ofrecer productos de alta calidad para el diseño y ladecoración de espacios generales, todo con el fin de hacer que el proceso de diseño se convierta en una experiencia viva de lo que somos como marca.</p>
                    <p>Artifice.com</p>

                </div>
            </div>
        </div>
        </>
    )
}

export default Formulario;
