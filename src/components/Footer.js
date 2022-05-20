import linkedin from '../assets/linkedin.png'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="center full-width">
                <div className="row">
                    <h3>Conctatame!!</h3>
                </div>
            </div>
            <div className="center full-width">
                <div className="row">
                    <p>Tambien puedes seguirme en mis redes sociales</p>
                </div>
            </div>
            <div className="center full-width social-links">
                <div className="row">
                    <a href="#"><img className="social" src={linkedin} width="30"></img></a>
                </div>
            </div>
            <div>
                <div className='made-with'>
                    <div className='row'>
                        <p>Hecho con :smile: por Fernando Monrreal</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;