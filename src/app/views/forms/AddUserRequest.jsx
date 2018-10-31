import React from "react";
import {UserActionCreators} from "actions";
import PropTypes from "prop-types";
import {History} from 'utils';
import {connect} from "react-redux";
import {reduxForm, Field} from 'redux-form';
import {ConnectedCreateUserForm} from "../forms/UserForm";
import Nav from "../../components/Screening/AdminNavBar.jsx";

class AddUserRequest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            enabled: "",
            username: "",
            password: "",
            first_name: "",
            middle_name: "",
            last_name: "",
            tenant: localStorage.getItem('tenant'),
            branch_sol_id: "",
            date_of_expiry: "",
            designation: "",
            employee_id: "",
            email: "",
            mobile_contact_no: "",
            office_contact_no: "",
            user_scope: "",
            roles:[]
            
        };
       
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleDateChange = (event) => {
        var dateFormat = event.target.value;
        console.log(dateFormat);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = event => {
        this.state.roles.push({'role':this.state.user_role});
        var data = JSON.stringify(this.state);
        this.props.onSubmitUser(data);
        // alert(data);
    };

    blackColor = {
        color: "black"
    };
  
    getValidationState = () => {}

    render() {
        // const { handleSubmit } = this.props;
        const divStyle = {
            backgroundColor: 'white',
            overflowY: 'auto',
            width: '100%',
            height: '600px',
            position: 'relative'
        };
        const {
            handleSubmit,
            pristine,
            reset,
            submitting,
            classes,
            screening
        } = this.props;
        return (
            <div style={divStyle}>
                <Nav/>
                <hr/>
                <div>
                    <h6>To add a new user, please enter following details and click Submit.</h6>
                </div>
                <hr/>

                <form
                    onSubmit={this
                    .handleSubmit
                    .bind(this)}>
                    <hr/>
                    <div
                        className='row'
                        style={{
                        padding: '5px'
                    }}>
                        <div className="col-md-4 col-sm-6 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-sm-4 col-xs-4"
                                style={this.blackColor}>
                                Branch Code*
                            </label>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                <select
                                    name="branch_sol_id"
                                    value={this.state.branch_sol_id}
                                    onChange={this.handleChange}>
                                    <option>select sol-id</option>
                                    <option value="Thapathali branch">Thapathali branch</option>
                                    <option value="koteshwor">Koteshowr branch</option>
                                    <option value="Lagakhel regional">Lagankhel regional</option>
                                    <option value="Naxal branch">Naxal branch</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-md-4 col-xs-4"
                                style={this.blackColor}>
                                User Scope*
                            </label>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                <select
                                    name="user_scope"
                                    value={this.state.user_scope}
                                    onChange={this.handleChange}>
                                    <option>select user scope</option>
                                    <option value="branch">Branch</option>
                                    <option value="regional">Regional</option>
                                    <option value="central">Central</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-md-4 col-xs-4"
                                style={this.blackColor}>
                                User Role*
                            </label>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                <select name="user_role" value={this.state.user_role} onChange={this.handleChange}>
                                    <option>select user role</option>
                                    <option value="ADMIN">Checker</option>
                                    <option value="USER">Maker</option>
                                    <option value="manager">Manager</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <div className="clearfix"/>
                    <div
                        className="row"
                        style={{
                        padding: '5px'
                    }}>

                        <div className="clearfix"/>
                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-sm-4 col-xs-4"
                                style={this.blackColor}>
                                First name
                            </label>
                            <input
                                type="text"
                                name="first_name"
                                value={this.state.first_name}
                                onChange={this.handleChange}/>
                        </div>
                        <div className="clearfix"/>
                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-sm-4 col-xs-4"
                                style={this.blackColor}>
                                Middle name
                            </label>
                            <input
                                type="text"
                                name="middle_name"
                                value={this.state.middle_name}
                                onChange={this.handleChange}/>
                        </div>
                        <div className="clearfix"/>
                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-sm-4 col-xs-4"
                                style={this.blackColor}>
                                Last name
                            </label>
                            <input
                                type="text"
                                name="last_name"
                                value={this.state.last_name}
                                onChange={this.handleChange}/>
                        </div>
                        <div className="clearfix"/>
                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-sm-4 col-xs-4"
                                style={this.blackColor}>
                                Employee Id
                            </label>
                            <input
                                type="text"
                                name="employee_id"
                                value={this.state.employee_id}
                                onChange={this.handleChange}/>
                        </div>
                        <div className="clearfix"/>
                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-sm-4 col-xs-4"
                                style={this.blackColor}>
                                Designation*
                            </label>
                            <input
                                type="text"
                                name="designation"
                                value={this.state.designation}
                                onChange={this.handleChange}/>
                        </div>
                        <div className="clearfix"/>
                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-sm-4 col-xs-4"
                                style={this.blackColor}>
                                Office contact no.
                            </label>
                            <input
                                type="text"
                                name="office_contact_no"
                                value={this.state.office_contact_no}
                                onChange={this.handleChange}/>
                        </div>
                        <div className="clearfix"/>
                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-sm-4 col-xs-4"
                                style={this.blackColor}>
                                Mobile contact no.
                            </label>
                            <input
                                type="text"
                                name="mobile_contact_no"
                                value={this.state.mobile_contact_no}
                                onChange={this.handleChange}/>
                        </div>
                        <div className="clearfix"/>

                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-sm-4 col-xs-4"
                                style={this.blackColor}>
                                Email ID
                            </label>
                            <input
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}/>
                        </div>
                       
                    </div>
                    <hr/>
                    <div className="clearfix"/>
                    <div
                        className="row"
                        style={{
                        padding: '5px'
                    }}>

                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-sm-4 col-xs-4"
                                style={this.blackColor}>
                                Username:
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}/>
                        </div>
                        <div className="clearfix"/>
                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-sm-4 col-xs-4"
                                style={this.blackColor}>
                                Password:
                            </label>
                            <input
                                type="text"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}/>
                        </div>
                        <div className="clearfix"/>
                        

                    </div>
                    <hr/>

                    <div className="clearfix"/>
                    <div className="col-md-12 col-sm-12 col-xs-12 item form-group">
                        <label
                            className="control-label col-md-2 col-sm-2 col-xs-2"
                            style={this.blackColor}>User status</label>
                        <div className="col-md-10 col-sm-10 col-xs-10">
                            <select name="user_status" value={this.state.user_status} onChange={this.handleChange}>
                                <option>select user status</option>
                                <option value="checker">Enabled</option>
                                <option value="maker">Disabled</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-sm-4 col-xs-4"
                                style={this.blackColor}>
                                Date of Expiry:
                            </label>
                            <input
                                type="date"
                                name="date_of_expiry"
                                value={this.state.date_of_expiry}
                                onChange={this.handleDateChange}/>
                        </div>

                    <div className="clearfix"></div>
                    <hr/>

                    <button className="btn btn-primary" type="submit" color="primary">
                        Submit.
                    </button>
                </form>
            </div>
        );
    }
}

AddUserRequest.propTypes = {
    added: PropTypes.bool,
    onSubmitUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({user: state.user});

const mapDispatchToProps = dispatch => ({
    onSubmitUser: values => dispatch(UserActionCreators.addUser(values)),
    onClose: () => dispatch(UserActionCreators.close())
});
export default connect(mapStateToProps, mapDispatchToProps)(AddUserRequest);
