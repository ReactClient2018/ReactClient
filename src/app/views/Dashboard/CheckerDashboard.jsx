import React from "react";
import {withStyles} from "material-ui";
import PropTypes from "prop-types";

import {Router, Route} from "react-router-dom";

import {connect} from "react-redux";
import {Auth, History} from "utils";
import NavBar from "../../components/Screening/CheckerNavBar.jsx";
import ScreeningNaturalRequest from "../screeningnatural/ScreeningNaturalRequest.jsx";

class CheckerDashboard extends React.Component {
    constructor() {
        super();
    }
    handleSubmit(event) {}
    componentDidMount() {}

    render() {
        return (
            <div>
                <NavBar/>
                <GreetingAndDateNavBar/>
                {/* <ScreeningRequestState/> */}
            </div>
        );
    }
}

class GreetingAndDateNavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="x_title">
                        {/* <h2>Greetings, ${user.username}!</h2> */}
                        <div className="clearfix"/>
                        <div id="date-display"/>
                    </div>
                    Greetings, Checker1!
                    <br/>
                    Date:
                </div>
            </nav>
        );
    }
}

class ScreeningRequestState extends React.Component {
    render() {
        return (
            <div className="right_col" id="right-col" role="main">
                <div className="">
                    <div className="row" id="page-content">
                        <div className="col-md-12 col-sm-12 col-xs-12" id="user-activity-base-div">
                            <div className="x_panel">
                                {/* <!-- DASHBOARD CONTENT --> */}
                                <div className="x_content">
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="x_panel">
                                            <div className="x_title">
                                                <h2>Natural Screening Request Statistics</h2>
                                                <div className="clearfix"/>
                                            </div>
                                            <div className="x_content">
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <div
                                                        className="chart-container"
                                                        style={{
                                                        width: "30vw"
                                                    }}>
                                                        <canvas id="myPieChart2"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <div
                                                        className="chart-container"
                                                        style={{
                                                        position: "relative",
                                                        height: "25vh",
                                                        width: "25vw"
                                                    }}>
                                                        <div
                                                            className="legend"
                                                            id="myPieChart2Legend"
                                                            style={{
                                                            float: "left",
                                                            paddingTop: "30px"
                                                        }}/>
                                                        <div
                                                            style={{
                                                            clear: "both"
                                                        }}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="x_panel">
                                            <div className="x_title">
                                                <h2>Legal Screening Request Statistics</h2>
                                                <div className="clearfix"/>
                                            </div>
                                            <div className="x_content">
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <div
                                                        className="chart-container"
                                                        style={{
                                                        position: "relative",
                                                        width: "30vw"
                                                    }}>
                                                        <canvas id="myPieChart1"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <div
                                                        className="chart-container"
                                                        style={{
                                                        position: "relative",
                                                        height: "25vh",
                                                        width: "25vw"
                                                    }}>
                                                        <div
                                                            className="legend"
                                                            id="myPieChart1Legend"
                                                            style={{
                                                            float: "left",
                                                            paddingTop: "30px"
                                                        }}/>
                                                        <div
                                                            style={{
                                                            clear: "both"
                                                        }}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- /CONTENT --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

CheckerDashboard.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(CheckerDashboard);
