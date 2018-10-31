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
    constructor(props) {
        super(props);
        this.state = {

            timer: {
                hr: 0,
                min: 0,
                sec: 0
            }

        }
    }
    tyme = setInterval(() => this.setState(() => {
        const timer = Object.assign({}, this.state.timer);
        // const time=this.state.time;
        if (timer.sec === 59) {
            timer.min = this.state.timer.min + 1;
            timer.hr = this.state.timer.hr;
            timer.sec = 0;

            return{
                    timer
                }
        }
        else if (timer.min === 59) {
            timer.min = 0;
            timer.hr = this.state.timer.hr + 1;
            timer.sec = 0;
            return {
                timer
            }
        }
        else {
            return {
                timer: {
                    hr: timer.hr,
                    min: timer.min,
                    sec: timer.sec + 1

                }
            }
        }
    }
    ), 1000);


    render() {
        var date = new Date(Date.now()).toLocaleDateString();
        var time = new Date(Date.now()).toLocaleTimeString();
        console.log(date);
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="x_title">
                        {/* <h2>Greetings, ${user.username}!</h2> */}
                        <div className="clearfix" />
                        <div id="date-display" />
                    </div>
                    Greetings, Checker1!
                      <br />
                    <div>Date:{date}</div>
                    <span> You are logged in for:{this.state.timer.hr + ":" + (this.state.timer.min) + ":" + (this.state.timer.sec)}</span>
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
