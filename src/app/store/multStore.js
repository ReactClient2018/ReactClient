import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers"

const logger = (store) => (next) => (action) => {
    if(typeof action !== "function"){
        console.log('dispatching:' + action.type);
    }

    return next(action);
}

const multStore = createStore(reducers, applyMiddleware(logger, thunk));

export default multStore;