import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Header_component = () => {

const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);


    return ( 
        <header className="headerposition">
            <div className="navbarp">
                <div className="logo">Fernando Monrreal</div>
                {/* <div> */}
                    <button className="buttonnav" onClick={() => setShowMessage(!showMessage)}><span>Menu</span></button>
                    <nav className="cien">
                        <ul>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="#contacto">Conctato</a></li>
                        </ul>
                    </nav>
                {/* </div> */}
            </div>
            <CSSTransition
                in={showMessage}
                timeout={300}
                classNames="alert"
                unmountOnExit
                onEnter={() => setShowButton(false)}
                onExited={() => setShowButton(true)}
            >
            <nav className="second">
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="#contacto">Conctato</a></li>
                </ul>
            </nav>
            </CSSTransition>
        </header>
     );
}
 
export default Header_component;