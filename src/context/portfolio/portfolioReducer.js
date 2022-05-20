import { MAIL_SEND } from "../../types";

export default (state,action) => {
    switch(action.type){
        case MAIL_SEND:
            return {
                email_send: action.payload
            }
        // case OCULTAR_ALERTA:
        //     return{
        //         alerta:null
        //     }
        default:
            return state;
    }
}