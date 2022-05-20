const First_section = () => {
    return ( 
        // <div className="center">
        //     <div className="content">
        //         <div className="row">
        //             <div className="left padded">
        //                 <h1>Desarrollo con pasion aplicaciones y sitios web para personas</h1>
        //                 <p>Constantemente me encuentro aprendiendo nuevas tecnologias y desarrollando
        //                     aplicaciones por interes propio.Esta web fue desarrollada en React!
        //                     Aun quiero aprender mas.
        //                 </p>
        //             </div>
        //             <div className="right padded mover">
        //                 <h1>Si gustas podemos conversar</h1>
        //                 <p>Solo enviame un correo <a className="orange" href='#contacto'>Presiona aqui</a></p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="FirstSectionFeatures">
            <section className="MainSection">
                <div className="MainImage">
                </div>
                <div className="hero2">
                    <div>
                        <div className="marginbtn2">
                            <span className="LettersMain">Soy desarrollador</span>
                        </div>
                        <div className="marginbtn2">
                            <span className="LettersMain">Fernando Monrreal</span>
                        </div>
                        {/* <p>Iniciando en el desarrollo web actualmente en aplicaciones en react</p> */}
                        <div className="marginbtn">
                            <a href="#contacto" className="btn">Conctatame</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default First_section;