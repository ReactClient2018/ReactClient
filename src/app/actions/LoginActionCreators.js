
import constants from "../constants/user-constants"
import UserAPI from "../api/UserAPI";
import {Auth,History} from "utils";
import AlertActionCreators from "./AlertActionCreators";


let LoginActionCreators = {

    login(username, password) {
        return (dispatch) => {
            console.log(username);
            dispatch({ type: constants.LOGIN_REQUEST });
            UserAPI.login(username,password).then(
                (user) => {
                        dispatch({type: constants.LOGIN_SUCCESS, success:true, user});
                        Auth.setSession(user);
                        History.push('/dashboard')
                },
                (error) => {
                    
                    console.log(error);
                    dispatch({ type: constants.LOGIN_FAILURE, success:false });
                    dispatch(AlertActionCreators.error(error))
                }
            );
        }
    }

}

export default LoginActionCreators;