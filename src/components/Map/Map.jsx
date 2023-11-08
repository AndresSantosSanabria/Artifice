import "./Map.css"

function Map() {
    return (
        <>
            <div className="content">
                <div className="containerMap">
                    <div className="videoResponsivo">
                        <iframe className="Map" title="Mi Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.4451977136448!2d-74.10922449617375!3d4.613630593000854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9940db0fe08b%3A0xb5692a23f0576542!2sCl.%204f%20%2339b-20%2C%20Puente%20Aranda%2C%20Bogot%C3%A1%2C%20Cundinamarca!5e0!3m2!1ses-419!2sco!4v1698175826419!5m2!1ses-419!2sco"  loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Map;
