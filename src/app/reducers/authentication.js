import constants from "../constants/user-constants"
import update from "immutability-helper";


const initialState= {
    loggingIn:false,
    user:''
}

const authentication = (state=initialState,action) => {

    switch(action.type){
        case constants.LOGIN_REQUEST:
            return update(state, {loggingIn: {$set: true},user:{$set: action.user}});
        case constants.LOGIN_SUCCESS:
            return update(state, {loggingIn: {$set: true},user:{$set: action.user}});
        case constants.LOGIN_FAILURE:
            return update(state, {loggingIn: {$set: false},user:{$set: ''}});
        default:
            return state;
    }
}

export default authentication;