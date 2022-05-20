import software_dev from '../assets/software_dev.png'

const Body_sent_email = () => {
    return ( 
        <div>
            <div className="hero">
                <div className="hero-content">
                    <div className="left">
                        <h1>Excelente! correo enviado</h1>
                        <p>Pronto se verificara tu correo y se respodera dentro de poco</p>
                    </div>
                    <div className="rigth">
                        <img src={software_dev} width="600px"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Body_sent_email;