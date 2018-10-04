import constants from "../constants/alert-constants";
import update from "immutability-helper";

const initialState = {
    type:'',
    message:''
};

const alert = (state=initialState,action) => {

    switch(action.type){
        case constants.SUCCESS:
            return update(state, {type: {$set: 'alert-success'},message:{$set: action.message}});
        case constants.ERROR:
            return update(state, {type: {$set: 'alert-danger'},message:{$set: action.message}});
        default:
            return state;
    }
}

export default alert;
