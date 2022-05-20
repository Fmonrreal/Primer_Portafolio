// import software_dev from "assets/software_dev.png"
import software_dev from '../assets/software_dev.png'

const Panel_info = () => {
    return ( 
        <div className="hero">
            <div className="hero-content">
                <div className="left">
                    <h1>Soy desarrollador</h1>
                    <h1>Fernando Monrreal</h1>
                    <p>Iniciando en el desarrollo web actualmente en aplicaciones en react</p>
                    <a href="#contacto" className="btn">Conctatame</a>
                </div>
            </div>
            <div className="right">
                <img src={software_dev} width="300"/>
                {/* <img src="images/software_dev"></img> */}
            </div>
        </div>
     );
}
 
export default Panel_info;