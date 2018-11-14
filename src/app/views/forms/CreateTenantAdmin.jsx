import React from "react";
import {UserActionCreators} from "actions";
import PropTypes from "prop-types";
import {History} from 'utils';
import {connect} from "react-redux";
import {reduxForm, Field} from 'redux-form';
import {ConnectedCreateUserForm} from "../forms/UserForm";
import Nav from "../../components/Screening/MainAdminNavBar.jsx";

class CreateTenantAdmin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            first_name: "",
            middle_name: "",
            last_name: "",
            tenant: "",
            branch_sol_id: "",
            date_of_expiry: "",
            designation: "",
            employee_id: "",
            email: "",
            mobile_contact_no: "",
            office_contact_no: "",
            user_scope: "",
            user_role:"ROLE_ADMIN",
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
                    <h6>To create a new tenant admin, please enter following details and click Submit.</h6>
                </div>
                <hr/>

                <form
                    onSubmit={this
                    .handleSubmit
                    .bind(this)}>
                    <hr/>
                   
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
                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-sm-4 col-xs-4"
                                style={this.blackColor}>
                                Tenant Id:
                            </label>
                            <input
                                type="text"
                                name="tenant"
                                value={this.state.tenant}
                                onChange={this.handleChange}/>
                        </div>
                        <div className="clearfix"/>
                        

                    </div>
                    <hr/>

                    
                    
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

CreateTenantAdmin.propTypes = {
    added: PropTypes.bool,
    onSubmitUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({user: state.user});

const mapDispatchToProps = dispatch => ({
    onSubmitUser: values => dispatch(UserActionCreators.addUser(values)),
    onClose: () => dispatch(UserActionCreators.close())
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateTenantAdmin);
