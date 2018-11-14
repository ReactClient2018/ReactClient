import ScreeningAPI from "../api/ScreeningAPI";

import {AlertActionCreators} from "actions";

import constants from "../constants/user-constants"

let ScreeningActionCreators = {

    
    addScreeningNatural(values) {
        return (dispatch) => {

            dispatch({type: constants.ADD_SCREENING_REQUEST});
            ScreeningAPI.addScreeningNatural(values)
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
            ScreeningAPI.addScreeningLegal(values)
                .then((response) => {
                    alert(JSON.stringify(response["message"]));
                    dispatch({type: constants.ADD_SCREENING_SUCCESS, success: true, response});
                }, (error) => {
                    console.log(error);
                    dispatch({type: constants.ADD_SCREENING_FAILURE, success: false});
                });
        }
    },
    updateScreeningNatural(values, id) {
        // alert(id);
        return (dispatch) => {
            dispatch({type: constants.UPDATE_SCREENING_REQUEST});
            ScreeningAPI.updateScreeningNatural(values, id)
                .then((response) => {
                    var data = localStorage.getItem("screeningNRequestList");
                    data = data? JSON.parse(data): [];
                    var index = localStorage.getItem('screening_n_notification_index');
                    if (data.length != 0) {
                        data.splice(index, 1);
                        localStorage.setItem("screeningNRequestList", JSON.stringify(data));
                        window.location.reload(true);
                    }
                    alert(JSON.stringify(response["message"]));
                    dispatch({type: constants.UPDATE_SCREENING_SUCCESS, success: true, response});
                }, (error) => {
                    console.log(error);
                    dispatch({type: constants.UPDATE_SCREENING_FAILURE, success: false});
                });
        }
    },
    updateScreeningNReply(values, id) {
        // alert(id);
        return (dispatch) => {
            dispatch({type: constants.UPDATE_SCREENING_REQUEST});
            ScreeningAPI.updateScreeningNReply(values, id)
                .then((response) => {
                    var data = localStorage.getItem("screeningNRequestList");
                    data = data? JSON.parse(data): [];
                    var index = localStorage.getItem('screening_n_notification_index');
                    if (data.length != 0) {
                        data.splice(index, 1);
                        localStorage.setItem("screeningNRequestList", JSON.stringify(data));
                        window.location.reload(true);
                    }
                    alert(JSON.stringify(response["message"]));
                    dispatch({type: constants.UPDATE_SCREENING_SUCCESS, success: true, response});
                }, (error) => {
                    console.log(error);
                    dispatch({type: constants.UPDATE_SCREENING_FAILURE, success: false});
                });
        }
    },
    updateScreeningLReply(values, id) {
        // alert(id);
        return (dispatch) => {
            dispatch({type: constants.UPDATE_SCREENING_REQUEST});
            ScreeningAPI.updateScreeningLReply(values, id)
                .then((response) => {
                    var data = localStorage.getItem("screeningLRequestList");
                    data = data? JSON.parse(data): [];
                    var index = localStorage.getItem('screening_l_notification_index');
                    if (data.length != 0) {
                        data.splice(index, 1);
                        localStorage.setItem("screeningLRequestList", JSON.stringify(data));
                        window.location.reload(true);
                    }
                    alert(JSON.stringify(response["message"]));
                    dispatch({type: constants.UPDATE_SCREENING_SUCCESS, success: true, response});
                }, (error) => {
                    console.log(error);
                    dispatch({type: constants.UPDATE_SCREENING_FAILURE, success: false});
                });
        }
    },
    updateScreeningLegal(values, id) {
        return (dispatch) => {
            dispatch({type: constants.UPDATE_SCREENING_REQUEST});
            ScreeningAPI.updateScreeningLegal(values, id)
                .then((response) => {
                    var data = localStorage.getItem("screeningLRequestList");
                    data = data? JSON.parse(data): [];
                    var index = localStorage.getItem('screening_l_notification_index');
                    if (data.length != 0) {
                        data.splice(index, 1);
                        localStorage.setItem("screeningLRequestList", JSON.stringify(data));
                        window
                            .location
                            .reload(true);
                    }
                    alert(JSON.stringify(response["message"]));
                    dispatch({type: constants.UPDATE_SCREENING_SUCCESS, success: true, response});
                }, (error) => {
                    console.log(error);
                    dispatch({type: constants.UPDATE_SCREENING_FAILURE, success: false});
                });
        }
    },
    
    fetchScreening() {
        return (dispatch) => {
            dispatch({type: constants.FETCH_USER_REQUEST});
            ScreeningAPI.fetchScreenings()
                .then((response) => {
                    // alert(JSON.stringify(response["screeningNRequestList"]));
                    localStorage.removeItem("screeningNRequestList");
                    localStorage.setItem("screeningNRequestList", JSON.stringify(response["screeningNRequestList"]));
                    window.location.reload(true);
                    var json = dispatch({type: constants.FETCH_USER_SUCCESS, success: true, response});
                }, (error) => {
                    console.log(error);
                    dispatch({type: constants.FETCH_USER_FAILURE, success: false});
                });
        }
    },
    fetchScreeningReplies() {
        return (dispatch) => {
            dispatch({type: constants.FETCH_USER_REQUEST});
            ScreeningAPI.fetchScreeningReplies()
                .then((response) => {
                    // alert(JSON.stringify(response["screeningNRequestList"]));
                    localStorage.removeItem("screeningNRequestList");
                    localStorage.setItem("screeningNRequestList", JSON.stringify(response["screeningNRequestList"]));
                    window.location.reload(true);
                    var json = dispatch({type: constants.FETCH_USER_SUCCESS, success: true, response});
                }, (error) => {
                    console.log(error);
                    dispatch({type: constants.FETCH_USER_FAILURE, success: false});
                });
        }
    },
    fetchScreeningLegalReplies() {
        return (dispatch) => {
            dispatch({type: constants.FETCH_USER_REQUEST});
            ScreeningAPI.fetchScreeningLegalReplies()
                .then((response) => {
                    // alert(JSON.stringify(response["screeningNRequestList"]));
                    localStorage.removeItem("screeningLRequestList");
                    localStorage.setItem("screeningLRequestList", JSON.stringify(response["screeningLRequestList"]));
                    window.location.reload(true);
                    var json = dispatch({type: constants.FETCH_USER_SUCCESS, success: true, response});
                }, (error) => {
                    console.log(error);
                    dispatch({type: constants.FETCH_USER_FAILURE, success: false});
                });
        }
    },
    fetchAllScreeningLegal() {
        return (dispatch) => {
            dispatch({type: constants.FETCH_USER_REQUEST});
            ScreeningAPI
                .fetchAllScreeningsLegal()
                .then((response) => {
                    // alert(JSON.stringify(response["screeningLRequestList"]));
                    localStorage.removeItem("screeningLRequestList");
                    localStorage.setItem("screeningLRequestList", JSON.stringify(response["screeningLRequestList"]));
                    // window.location.reload(true);
                    var json = dispatch({type: constants.FETCH_USER_SUCCESS, success: true, response});
                }, (error) => {
                    console.log(error);
                    dispatch({type: constants.FETCH_USER_FAILURE, success: false});
                });
        }
    },
    fetchScreeningLegal() {
        return (dispatch) => {
            dispatch({type: constants.FETCH_USER_REQUEST});
            ScreeningAPI
                .fetchScreeningsLegal()
                .then((response) => {
                    // alert(JSON.stringify(response["screeningLRequestList"]));
                    localStorage.removeItem("screeningLRequestList");
                    localStorage.setItem("screeningLRequestList", JSON.stringify(response["screeningLRequestList"]));
                    window
                        .location
                        .reload(true);
                    var json = dispatch({type: constants.FETCH_USER_SUCCESS, success: true, response});
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

export default ScreeningActionCreators;