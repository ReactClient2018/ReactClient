import UserAPI from "../api/UserAPI";
import {AlertActionCreators} from "actions";

import constants from "../constants/user-constants"

let UserActionCreators = {

    addUser(values) {
        return (dispatch) => {

            dispatch({type: constants.ADD_USER_REQUEST});
            UserAPI
                .addUser(values)
                .then((response) => {
                    alert(JSON.stringify(response["message"]));
                    dispatch({type: constants.ADD_USER_SUCCESS, success: true, response});
                }, (error) => {
                    console.log(error);
                    dispatch({type: constants.ADD_USER_FAILURE, success: false});
                });
        }
    },
    createTenant(values) {
        return (dispatch) => {
            dispatch({type: constants.CREATE_TENANT_REQUEST});
            UserAPI
                .createTenant(values)
                .then((response) => {
                    alert(JSON.stringify(response["message"]));
                    dispatch({type: constants.CREATE_TENANT_SUCCESS, success: true, response});
                }, (error) => {
                    console.log(error);
                    dispatch({type: constants.CREATE_TENANT_FAILURE, success: false});
                });
        }
    },

    
    updateUser(response) {
        return (dispatch) => {
            dispatch({type: constants.UPDATE_SCREENING_SUCCESS, response});
        }
    },
    fetchUsers(){
        return (dispatch) =>{
            dispatch({type: constants.FETCH_USER_REQUEST});
            UserAPI.fetchUsers()
                .then((response) => {
                    // alert(JSON.stringify(response["userList"]));
                    localStorage.removeItem("tenantUsers");
                    localStorage.setItem("tenantUsers",JSON.stringify(response["userList"]));
                    window.location.reload(true);
                    dispatch({type: constants.FETCH_USER_SUCCESS, success: true, response});
                }, (error) => {
                    console.log(error);
                    dispatch({type: constants.FETCH_USER_FAILURE, success: false});
                });

        }
    },
    fetchTenants(){
        return (dispatch) =>{
            dispatch({type: constants.FETCH_USER_REQUEST});
            UserAPI.fetchTenants()
                .then((response) => {
                    // alert(JSON.stringify(response["userList"]));
                    localStorage.removeItem("tenants");
                    localStorage.setItem("tenants",JSON.stringify(response["tenantList"]));
                    window.location.reload(true);
                    dispatch({type: constants.FETCH_USER_SUCCESS, success: true, response});
                }, (error) => {
                    console.log(error);
                    dispatch({type: constants.FETCH_USER_FAILURE, success: false});
                });

        }
    },
   
    close() {
        return {type: constants.USER_MESSAGE_CLOSE, show: false};
    }

}

export default UserActionCreators;