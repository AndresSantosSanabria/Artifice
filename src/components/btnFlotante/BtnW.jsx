import React from 'react'
import "./BtnW.css"
import { BiLogoWhatsapp } from "react-icons/bi";


function BtnW() {
    return (
        <>
            <a href="https://api.whatsapp.com/send?phone=573238034969&text=Buen+día.👋%0AMe+gustaría+saber+un+poco+más+acerca+de+los+servicios+que+ofrece+artífice.🏡" className='btn-wsp' target='blank'>
                <BiLogoWhatsapp className='icon-whatsapp'></BiLogoWhatsapp>
            </a>
        </>
    )
}

export default BtnW
