
import alert from "../constants/alert-constants"

let AlertActionCreators = {
    success(message){
        return { type: alert.SUCCESS, message};
    },
    error(message){
        return { type: alert.ERROR,message};
    },
    clear() {
        return { type: alert.CLEAR };
    }
}

export default AlertActionCreators;