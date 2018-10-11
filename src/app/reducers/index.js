import {combineReducers} from "redux";
import authentication from "./authentication"
import alert from "./alert"
import { reducer as formReducer } from 'redux-form';
const rootReducers = combineReducers({
    authentication,
    alert,
    form: formReducer
});

export default rootReducers;