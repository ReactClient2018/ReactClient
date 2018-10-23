import React from 'react';
import {Auth, History} from "utils";
import {Router, Switch, Route} from "react-router-dom";
import {MenuItem, Nav, Navbar, NavItem, NavDropdown} from "react-bootstrap";
import { UserActionCreators } from "actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class MainNavBar extends React.Component {

    handleLogout() {
        Auth.logout();
        History.push("/login");
    }
    handleScreeningClick() {
        History.push("/screeningPrimaryRequest");
    }
    handleNotificationClick=(event) =>{
        this.props.onNotification();
        History.push("/screeningNotification");
    }

    render() {

        return (
            <div>
                <Navbar>
                    <Nav pullLeft>
                        <NavDropdown eventKey={1} title="Screening" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>
                                <button className="content-links" onClick={this.handleScreeningClick}>
                                    <b>Send Request (Natural person)</b>
                                </button>
                            </MenuItem>
                            <MenuItem eventKey={1.2}>
                                {" "}
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/screeningl/requestForm">
                                    <b>Send Request (Legal person)</b>
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
                                    <b>Screen Migrated KYC</b>
                                </button>
                            </MenuItem>

                            <hr
                                style={{
                                margin: "4px"
                            }}/>

                            <MenuItem eventKey={1.4}>
                                {" "}
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/screening/replyListForm">
                                    <b>View Replies - Natural</b>
                                </button>
                            </MenuItem>
                            <MenuItem eventKey={1.5}>
                                {" "}
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/screeningl/replyListForm">
                                    <b>View Replies - Legal</b>
                                </button>
                            </MenuItem>

                            <hr
                                style={{
                                margin: "4px"
                            }}/>

                            <MenuItem eventKey={1.6}>
                                {" "}
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/upload/mt103prt">
                                    <b>Upload SWIFT Print File(.prt)</b>
                                </button>
                            </MenuItem>
                            <MenuItem eventKey={1.7}>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/upload/virtual-account">
                                    <b>Upload Virtual Account (excel)</b>
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
                                disabled
                                style={{
                                color: "#f3f2f3"
                            }}>
                                Maker user logged in:Maker1 {/* ${user.username}@${user.solId} */}
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
MainNavBar.propTypes = {
    added: PropTypes.bool,
    onNotification: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ notification: state.notification });

const mapDispatchToProps = dispatch => ({
    onNotification: values => dispatch(UserActionCreators.fetchScreening()),
    onClose: () => dispatch(UserActionCreators.close())
});
export default connect(mapStateToProps, mapDispatchToProps)(MainNavBar);
