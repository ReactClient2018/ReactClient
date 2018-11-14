import React from 'react';
import {Auth, History} from "utils";
import {Router, Switch, Route} from "react-router-dom";
import {MenuItem, Nav, Navbar, NavItem, NavDropdown} from "react-bootstrap";
import { ScreeningActionCreators } from "actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../Header/CheckerHeader.jsx"


class CheckerNavBar extends React.Component {

    handleLogout() {
        // Auth.logout();
        localStorage.clear();
        History.push("/login");
    }
    handleScreeningClick() {
        // History.push("/screeningPrimaryRequest");
    }
    handleNotificationClick=(event) =>{
        this.props.onFetchLegal();
        this.props.onNotification();
        History.push("/screeningNotification");
    }

    render() {

        return (
            <div>
                <Header/>
                <Navbar>
                    <Nav pullLeft>
                        <NavDropdown eventKey={1} title="Screening" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>
                                <button className="content-links" onClick={this.handleScreeningClick}>
                                    <b>View Open Account Request Reviews</b>
                                </button>
                            </MenuItem>
                            <MenuItem eventKey={1.2}>
                                {" "}
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/screeningl/requestForm">
                                    <b>View Remitance and Other Reviews</b>
                                </button>
                            </MenuItem>

                            <hr
                                style={{
                                margin: "4px"
                            }}/>

                            <MenuItem eventKey={1.3}>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/screening/migratedKYCListForm">
                                    <b>View Rejected Request Reviews</b>
                                </button>
                            </MenuItem>
                            <MenuItem eventKey={1.3}>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/screening/migratedKYCListForm">
                                    <b>View Completed Request Reviews</b>
                                </button>
                            </MenuItem>

                         
                        </NavDropdown>

                        <NavDropdown eventKey={2} title="KYC" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1}>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/kyc/requestListForm">
                                    <b>View KYC Requests</b>
                                </button>
                            </MenuItem>
                            <MenuItem eventKey={2.2}>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/kyc/refreshListForm">
                                    <b>KYC Refresh</b>
                                </button>
                            </MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Lists" id="basic-nav-dropdown">
                            <MenuItem>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/lists/hrpSearchForm">
                                    <b>PEP Search</b>
                                </button>
                            </MenuItem>

                            <hr
                                style={{
                                margin: "4px"
                            }}/>

                            <MenuItem>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/kycSearchForm">
                                    <b>KYC Search - Natural</b>
                                </button>
                            </MenuItem>
                            <MenuItem>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/kyclSearchForm">
                                    <b>KYC Search - Legal</b>
                                </button>
                            </MenuItem>
                            <hr
                                style={{
                                margin: "4px"
                            }}/>

                            <MenuItem>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/sanctionLists/un/individualSearchForm">
                                    <b>UN Designated Individual Search</b>
                                </button>
                            </MenuItem>

                            <MenuItem>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/sanctionLists/un/entitySearchForm">
                                    <b>UN Designated Entity Search</b>
                                </button>
                            </MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={4} title="Report" id="basic-nav-dropdown">
                            <MenuItem>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/report/kycGap/status-form">
                                    <b>KYC Status</b>
                                </button>
                            </MenuItem>
                            <MenuItem>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/report/str/cust-form">
                                    <b>Suspicious Transaction</b>
                                </button>
                            </MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={5} title="Settings" id="basic-nav-dropdown">
                            <MenuItem>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/settings/changePassword">
                                    <b>Change Password</b>
                                </button>
                            </MenuItem>
                            <MenuItem>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/view/natclientcode">
                                    <b>Update Client Code Before KYC</b>
                                </button>
                            </MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={6} title="Notifications" id="basic-nav-dropdown">
                        <MenuItem>
                                <button
                                    className="content-links"
                                    onClick={this.handleNotificationClick}>
                                    <b>Review screening list.</b>
                                </button>
                            </MenuItem>
                            <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
                                <li>
                                    <div className="text-center">
                                        <button>
                                            {" "}
                                            <strong>Close</strong>
                                            <i className="fa fa-angle-right"/>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={7}>
                            <button
                                className="btn btn-primary pull-right"
                                href="#"
                                style={{
                                color: "#f3f2f3"
                            }}>
                                Checker user logged in: <span>{localStorage.getItem('user')}</span> 
                              
                            </button>
                        </NavItem>
                        <NavItem eventKey={8}>
                            <button
                                className="btn btn-danger pull-right clear-active"
                                onClick={this.handleLogout}>
                                <i className="fa fa-sing-out" aria-hidden="true"/>
                                Logout
                            </button>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
CheckerNavBar.propTypes = {
    added: PropTypes.bool,
    onNotification: PropTypes.func.isRequired,
    onFetchLegal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ notification: state.notification });

const mapDispatchToProps = dispatch => ({
    onNotification: values => dispatch(ScreeningActionCreators.fetchScreening()),
    onFetchLegal: values => dispatch(ScreeningActionCreators.fetchScreeningLegal()),
    onClose: () => dispatch(ScreeningActionCreators.close())
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckerNavBar);
