import React from 'react';
import {Auth, History} from "utils";
import {Router, Switch, Route} from "react-router-dom";
import {MenuItem, Nav, Navbar, NavItem, NavDropdown} from "react-bootstrap";
import {Provider} from "react-redux";

import ScreeningNaturalRequest from '../../views/screeningnatural/ScreeningNaturalRequest.jsx'

class MainNavBar extends React.Component {

    handleLogout() {
        Auth.logout();
        History.push("/login");
    }
    handleScreeningClick() {
        History.push("/screeningRequest");
    }

    render() {

        return (
            <div>
                <Navbar>
                    <Nav pullLeft>
                        <NavDropdown eventKey={1} title="Screening" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>
                                <a className="content-links" onClick={this.handleScreeningClick}>
                                    <b>Send Request (Natural person)</b>
                                </a>
                            </MenuItem>
                            <MenuItem eventKey={1.2}>
                                {" "}
                                <a
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/screeningl/requestForm">
                                    <b>Send Request (Legal person)</b>
                                </a>
                            </MenuItem>

                            <hr
                                style={{
                                margin: "4px"
                            }}/>

                            <MenuItem eventKey={1.3}>
                                <a
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/screening/migratedKYCListForm">
                                    <b>Screen Migrated KYC</b>
                                </a>
                            </MenuItem>

                            <hr
                                style={{
                                margin: "4px"
                            }}/>

                            <MenuItem eventKey={1.4}>
                                {" "}
                                <a
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/screening/replyListForm">
                                    <b>View Replies - Natural</b>
                                </a>
                            </MenuItem>
                            <MenuItem eventKey={1.5}>
                                {" "}
                                <a
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/screeningl/replyListForm">
                                    <b>View Replies - Legal</b>
                                </a>
                            </MenuItem>

                            <hr
                                style={{
                                margin: "4px"
                            }}/>

                            <MenuItem eventKey={1.6}>
                                {" "}
                                <a
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/upload/mt103prt">
                                    <b>Upload SWIFT Print File(.prt)</b>
                                </a>
                            </MenuItem>
                            <MenuItem eventKey={1.7}>
                                <a
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/upload/virtual-account">
                                    <b>Upload Virtual Account (excel)</b>
                                </a>
                            </MenuItem>
                        </NavDropdown>

                        <NavDropdown eventKey={2} title="KYC" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1}>
                                <a
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/kyc/requestListForm">
                                    <b>View KYC Requests</b>
                                </a>
                            </MenuItem>
                            <MenuItem eventKey={2.2}>
                                <a
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/kyc/refreshListForm">
                                    <b>KYC Refresh</b>
                                </a>
                            </MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Lists" id="basic-nav-dropdown">
                            <MenuItem>
                                <a
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/lists/hrpSearchForm">
                                    <b>PEP Search</b>
                                </a>
                            </MenuItem>

                            <hr
                                style={{
                                margin: "4px"
                            }}/>

                            <MenuItem>
                                <a
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/kycSearchForm">
                                    <b>KYC Search - Natural</b>
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/kyclSearchForm">
                                    <b>KYC Search - Legal</b>
                                </a>
                            </MenuItem>
                            <hr
                                style={{
                                margin: "4px"
                            }}/>

                            <MenuItem>
                                <a
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/sanctionLists/un/individualSearchForm">
                                    <b>UN Designated Individual Search</b>
                                </a>
                            </MenuItem>

                            <MenuItem>
                                <a
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/sanctionLists/un/entitySearchForm">
                                    <b>UN Designated Entity Search</b>
                                </a>
                            </MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={4} title="Report" id="basic-nav-dropdown">
                            <MenuItem>
                                <a
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/report/kycGap/status-form">
                                    <b>KYC Status</b>
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/report/str/cust-form">
                                    <b>Suspicious Transaction</b>
                                </a>
                            </MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={5} title="Settings" id="basic-nav-dropdown">
                            <MenuItem>
                                <a
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/settings/changePassword">
                                    <b>Change Password</b>
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/view/natclientcode">
                                    <b>Update Client Code Before KYC</b>
                                </a>
                            </MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={6} title="Notifications" id="basic-nav-dropdown">
                            <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
                                <li>
                                    <div className="text-center">
                                        <a>
                                            {" "}
                                            <strong>Close</strong>
                                            <i className="fa fa-angle-right"/>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={7}>
                            <a
                                className="btn btn-primary pull-right"
                                href="#"
                                disabled
                                style={{
                                color: "#f3f2f3"
                            }}>
                                Maker user logged in:Maker1 {/* ${user.username}@${user.solId} */}
                            </a>
                        </NavItem>
                        <NavItem eventKey={8}>
                            <a
                                className="btn btn-danger pull-right clear-active"
                                onClick={this.handleLogout}>
                                <i className="fa fa-sing-out" aria-hidden="true"/>
                                Logout
                            </a>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
export default MainNavBar;