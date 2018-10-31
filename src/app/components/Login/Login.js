// import React from "react";
import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { LoginActionCreators } from "actions";
import { Auth, History } from "utils"
import AppHeader, { Footer } from '../../commons/AppHeader';
import { Form, Input, Button, Icon, notification } from 'antd';
import { FormControl, ControlLabel, HelpBlock, FormGroup, ButtonToolbar } from 'react-bootstrap';
import './Login.css';
import Field from "./FieldLogin";

class Login extends React.Component {


    state = {
        fields: {
            username: '',
            password: '',
            tenant: ''
        },
        fieldErrors: {},

    };

    componentDidMount() {
        if (Auth.isAuthenticated()) {
            if (localStorage.getItem())
                History.push("/dashboard");
        }
    }
    onFormSubmit = evt => {

        const person = this.state.fields;
        evt.preventDefault();
        if(this.validate()) return ;
        localStorage.setItem("tenant", this.state.fields.tenant);
        localStorage.setItem("user", this.state.fields.username);
        this.props.onSubmitLogin(this.state.fields.username + "!@#" + this.state.fields.tenant, this.state.fields.password);
        evt.preventDefault();
    };

    handleChange = (name,value,error) => {
        const fields = Object.assign({}, this.state.fields);
        fields[name] = value;
        const fieldErrors=Object.assign({}, this.state.fieldErrors);
        fieldErrors[name]=error;
        this.setState({ fields, fieldErrors });
    };

    validate = () => {
        const person=this.state.fields;
        const fieldErrors=this.state.fieldErrors;
        //const errMessage=Object.keys(fieldErrors).filter((k)=>fieldErrors[K]);
        if (!person.username) return true;
        if (!person.password) return true;
        if (!person.tenant) return true;
        //if(errMessage.length) return true;
        return false;
    };
    

    render() {

        return (
            <div>
                <AppHeader />
                <div style={{ backgroundColor: 'white' }}>

                    {/* <!-- page content --> */}
                    <div className="right_col login_col" role="main">
                        <div className="clearfix"></div>


                        <div className="login-container">
                            <h1 className="page-title">Login</h1>
                            <div className="login-content">

                                <form onSubmit={this.onFormSubmit}>
                                        <Field
                                            placeholder="username"
                                            name="username"
                                            value={this.state.fields.username}
                                            onChange={this.handleChange}
                                            validate={val=>(val?false:'username required')}
                                        />
                                         <Field
                                            placeholder="tenant"
                                            name="tenant"
                                            value={this.state.fields.tenant}
                                            onChange={this.handleChange}
                                            validate={val=>(val?false:'tenant required')}
                                        />
                                        <Field
                                            placeholder="password"
                                            name="password"
                                            value={this.state.fields.password}
                                            onChange={this.handleChange}
                                            validate={val=>(val?false:"password required")}
                                        />
                                    <input type="submit" disabled={this.validate()} />
                                </form>



                                <br />

                            </div>
                        </div>
                        {/* <div>{this.props.onSubmitLogin(this.state.fields.username + "!@#" + this.state.fields.tenant, this.state.fields.password)}</div> */}
                        <div style={{ marginTop: '200px', position: 'relative' }}>
                            <Footer />
                        </div>
                    </div>
                </div>

            </div >

        );
    }
};
Login.propTypes = {
    alert: PropTypes.shape({
        type: PropTypes.string,
        message: PropTypes.string
    }),
    onSubmitLogin: PropTypes.func.isRequired
}
const mapStateToProps = (state) => (
    {
        alert: state.alert
        // there is no state in the store so no need of any props 
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        onSubmitLogin: (username, password) => dispatch(
            LoginActionCreators.login(username, password)
        )
    }
);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
