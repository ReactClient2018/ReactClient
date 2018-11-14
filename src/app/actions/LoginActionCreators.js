
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
                        switch(user["roles"][0].role){
                            case 'ADMIN':
                                 History.push("/checkerDashBoard");
                                 break;
                            case 'ROLE_ADMIN':
                                 History.push("/adminDashBoard");
                                 break;
                                 case 'MAIN_ADMIN':
                                 History.push("/mainAdminDashBoard");
                                 break;
                            default:
                                 History.push('/makerDashBoard');
                        }
                       
                },
                (error) => {
                
                  
                    dispatch({ type: constants.LOGIN_FAILURE, success:false });
                    dispatch(AlertActionCreators.error(error))
                }
            );
        }
    }

}

export default LoginActionCreators;