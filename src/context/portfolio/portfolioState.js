import React,{useReducer} from "react";
import portfolioReducer from "./portfolioReducer";
import portfolioContext from "./portfolioContext";

import { MAIL_SEND } from "../../types";

const PortfolioState = props => {
    const initialState = {
        email_send: false
    }

    const [state,dispatch] = useReducer(portfolioReducer,initialState);

    //Funciones 
    const sendEmailAction = () => {
        dispatch({
            type: MAIL_SEND,
            payload: true
        });
    }

    return(
        <portfolioContext.Provider
            value={{
                email_send: state.email_send,
                sendEmailAction
            }}
        >
            {props.children}
        </portfolioContext.Provider>
    )
}

export default PortfolioState;