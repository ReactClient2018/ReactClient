import React from 'react';
import {Auth, History} from "utils";
import {Router, Switch, Route} from "react-router-dom";
import {MenuItem, Nav, Navbar, NavItem, NavDropdown} from "react-bootstrap";
import {UserActionCreators} from "actions";
import PropTypes from "prop-types";
import logo from '../../assets/img/logo.png';
import bankLogo from "../../assets/img/bfi-logo.png";
import {connect} from "react-redux";

class AdminHeader extends React.Component {

    render() {
        const {classes, color} = this.props;
        return (
            <div>
                <img src={logo} className=""></img>
                <span
                    style={{
                    height: '50px',
                    fontSize: '2em',
                    verticalAlign: 'middle'
                }}>
                    | Datum Administration Panel</span>
                <div
                    style={{
                    float: 'right',
                    padding: '0px 10px'
                }}>
                    Licensed to:
                    <span id="bfi-logo"></span>
                    <img
                        src={bankLogo}
                        style={{
                        height: '50px',
                        width: '60px'
                    }}></img>
                </div>
            </div>
        );
    }
}
class MainAdminNavBar extends React.Component {
    handleLogout() {
        localStorage.clear();
        History.push("/login");
    }
    handleAdminClick() {
        History.push("/createTenantRequest");
    }
    handleTenantsClick = () => {
        this.props.onClickAllTenant();
        History.push("/viewTenants");
    }
    createTenantAdmin() {
        History.push("/createTenantAdmin");
    }
    render() {
        return (
            <div>
                <AdminHeader/>
                <Navbar>
                    <Nav pullLeft>
                        <NavDropdown eventKey={1} title="Tenants" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>
                                <button className="content-links" onClick={this.handleAdminClick}>
                                    <b>Create New Tenant</b>
                                </button>
                            </MenuItem>
                            <MenuItem eventKey={1.2}>
                                {" "}
                                <button className="content-links" onClick={this.handleTenantsClick}>
                                    <b>All Tenants</b>
                                </button>
                            </MenuItem>
                            <MenuItem eventKey={1.3}>
                                {" "}
                                <button className="content-links" onClick={this.createTenantAdmin}>
                                    <b>Create admin for tenant</b>
                                </button>
                            </MenuItem>
                            <MenuItem eventKey={1.4}>
                                {" "}
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/screeningl/requestForm">
                                    <b>Online Tenants</b>
                                </button>
                            </MenuItem>

                        </NavDropdown>

                        <NavDropdown eventKey={2} title="Bank & Branch" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1}>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/kyc/requestListForm">
                                    <b>Insert Branch Information</b>
                                </button>
                            </MenuItem>
                            <MenuItem eventKey={2.2}>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/kyc/refreshListForm">
                                    <b>Update Branch Information</b>
                                </button>
                            </MenuItem>
                            <MenuItem eventKey={2.3}>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/kyc/refreshListForm">
                                    <b>Update Bank Information</b>
                                </button>
                            </MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Schedular" id="basic-nav-dropdown">
                            <MenuItem>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/lists/hrpSearchForm">
                                    <b>Manager Schedule</b>
                                </button>
                            </MenuItem>

                        </NavDropdown>
                        <NavDropdown eventKey={4} title="Mandatory" id="basic-nav-dropdown">
                            <MenuItem>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/report/kycGap/status-form">
                                    <b>Natural Field</b>
                                </button>
                            </MenuItem>
                            <MenuItem>
                                <button
                                    className="content-links"
                                    href="${pageContext.request.contextPath}/report/str/cust-form">
                                    <b>Legal Field</b>
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
                                Admin user logged in:
                                <span>{localStorage.getItem('user')}</span>
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
MainAdminNavBar.propTypes = {
    added: PropTypes.bool,
    onClickAllTenant: PropTypes.func.isRequired
};

const mapStateToProps = state => ({tenant: state.tenant});

const mapDispatchToProps = dispatch => ({
    onClickAllTenant: () => dispatch(UserActionCreators.fetchTenants()),
    onClose: () => dispatch(UserActionCreators.close())

});
export default connect(mapStateToProps, mapDispatchToProps)(MainAdminNavBar);
