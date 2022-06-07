import emailjs from '@emailjs/browser';
import {useState,useRef,useContext} from 'react';
import portfolioContext from '../context/portfolio/portfolioContext';
import {
    useNavigate
  } from "react-router-dom";

const Form_section = () => {

    const PortfolioContext = useContext(portfolioContext);
    const {sendEmailAction} = PortfolioContext;
    
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [mensaje, setMensaje] = useState("")

    let navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();
        const templateParams = {
            nombre,email,mensaje
        };

        console.log('process.env.SERVICE_ID',process.env.SERVICE_ID)
        emailjs.send('service_070hzle','template_d1ay10b', templateParams, 'IxIap6LMDbB20hkzk')
        // emailjs.send(process.env.SERVICE_ID,process.env.TEMPLATE_ID, templateParams, process.env.USER_ID)
        // emailjs.send(`${process.env.SERVICE_ID}`,`${process.env.TEMPLATE_ID}`, templateParams, `${process.env.USER_ID}`)
        .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
        console.log('FAILED...', err);
        });
        sendEmailAction()

        // this.props.history.push('sent_email')
        console.log('sent_email')
        navigate('/sent_email')
    };

    return ( 
        <div className="center padded">
            <div className="content">
                <div className="row vert-pad">
                    <div className="left padded">
                        <h1>Ahora o nunca! trabajemos juntos :)</h1>
                        <p>Dare mi mejor esfuerzo! para aprender, aportar valor y que tengamos 
                            un fructifera realcion a largo plazo
                        </p>
                    </div>
                    <div id="contacto" className="right padded">
                        <form className="contact-form" onSubmit={sendEmail}>
                            <input name="name" placeholder="Nombre" required value={nombre} onChange={e => setNombre(e.target.value)}/>
                            <input name="email" placeholder="Correo" required type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                            <textarea placeholder="mensaje" name="message" required minLength="10" value={mensaje} onChange={e => setMensaje(e.target.value)}/>
                            <button type="submit" className="btn full-width">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Form_section;