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
    addScreeningLegal(values) {
        return (dispatch) => {

            dispatch({type: constants.ADD_SCREENING_REQUEST});
            UserAPI
                .addScreeningLegal(values)
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
    updateScreeningNatural(values, id) {
        // alert(id);
        return (dispatch) => {
            dispatch({type: constants.ADD_SCREENING_REQUEST});
            UserAPI
                .updateScreeningNatural(values, id)
                .then((response) => {
                    var data = localStorage.getItem("screeningNRequestList");
                        data = data? JSON.parse(data): [];
                        var index = localStorage.getItem('screening_n_notification_index');
                        if (data.length != 0) {
                            data.splice(index, 1);
                            localStorage.setItem("screeningNRequestList", JSON.stringify(data));
                            window
                                .location
                                .reload(true);
                        }
                        alert(JSON.stringify(response["message"]));
                        dispatch({type: constants.ADD_SCREENING_SUCCESS, success: true, response});
                    },
                    (error) => {
                        console.log(error);
                        dispatch({type: constants.ADD_SCREENING_FAILURE, success: false});
                    });}
        },
        fetchScreening() {
            return (dispatch) => {
                dispatch({type: constants.FETCH_USER_REQUEST});
                UserAPI
                    .fetchScreenings()
                    .then((response) => {
                        // alert(JSON.stringify(response["screeningNRequestList"]));
                        localStorage.removeItem("screeningNRequestList");
                        localStorage.setItem("screeningNRequestList", JSON.stringify(response["screeningNRequestList"]));
                        window.location.reload(true); var json =
                        dispatch({type: constants.FETCH_USER_SUCCESS, success: true, response});
                    }, (error) => {
                        console.log(error);
                        dispatch({type: constants.FETCH_USER_FAILURE, success: false});
                    });
            }
        },
        fetchScreeningLegal() {
            return (dispatch) => {
                dispatch({type: constants.FETCH_USER_REQUEST});
                UserAPI
                    .fetchScreeningsLegal()
                    .then((response) => {
                        alert(JSON.stringify(response["screeningLRequestList"]));
                        localStorage.removeItem("screeningLRequestList");
                        localStorage.setItem("screeningLRequestList", JSON.stringify(response["screeningLRequestList"]));
                        window.location.reload(true); var json =
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