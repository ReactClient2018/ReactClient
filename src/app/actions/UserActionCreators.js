import UserAPI from "../api/UserAPI";
import {AlertActionCreators} from "actions";

import constants from "../constants/user-constants"

let UserActionCreators = {

    addUser(values){
        return (dispatch) => {

            dispatch({ type: constants.ADD_USER_REQUEST });
            UserAPI.addUser(values).then(
                (response) => {
                    dispatch({type: constants.ADD_USER_SUCCESS, success:true, response});
                },
                (error) => {
                    console.log(error);
                    dispatch({ type: constants.ADD_USER_FAILURE, success:false });
                });
        }
    },
    updateUser(response){
        return (dispatch) => {
            dispatch({ type: constants.UPDATE_USER_SUCCESS,response});
        }
    },
    fetchUser(){
        return (dispatch) => {
            dispatch({ type: constants.FETCH_USER_REQUEST });
            UserAPI.fetchUsers().then(
                (response) => {
                    dispatch({type: constants.FETCH_USER_SUCCESS, success:true, response});
                },
                (error) => {
                    console.log(error);
                    dispatch({ type: constants.FETCH_USER_FAILURE, success:false });
                });
        }
    },
    close() {
        return {
            type: constants.USER_MESSAGE_CLOSE,
            show: false
        };
    }

}

export default UserActionCreators;