import {combineReducers} from "redux";
import authentication from "./authentication"
import alert from "./alert"
import { reducer as reduxFormReducer } from 'redux-form';
const rootReducers = combineReducers({
    authentication,
    alert,
    form: reduxFormReducer
});

export default rootReducers;