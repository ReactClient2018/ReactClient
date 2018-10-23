import UserAPI from "../api/UserAPI";
import {AlertActionCreators} from "actions";

import constants from "../constants/user-constants"

let UserActionCreators = {

    addScreeningNatural(values) {
        return (dispatch) => {

            dispatch({type: constants.ADD_SCREENING_REQUEST});
            UserAPI
                .addScreeningNatural(values)
                .then((response) => {
                    alert(JSON.stringify(response["message"]));
                    dispatch({type: constants.ADD_SCREENING_SUCCESS, success: true, response});
                }, (error) => {
                    console.log(error);
                    dispatch({type: constants.ADD_SCREENING_FAILURE, success: false});
                });
        }
    },
    updateUser(response) {
        return (dispatch) => {
            dispatch({type: constants.UPDATE_SCREENING_SUCCESS, response});
        }
    },
    fetchScreening() {
        return (dispatch) => {
            dispatch({type: constants.FETCH_USER_REQUEST});
            UserAPI
                .fetchScreenings()
                .then((response) => {
                    alert(JSON.stringify(response["screeningNRequestList"]))
                    localStorage.setItem("screeningNRequestList", JSON.stringify(response["screeningNRequestList"]));
                    // var json = JSON.parse(localStorage.getItem("screeningNRequestList"));
                    // alert(json[0].id);
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