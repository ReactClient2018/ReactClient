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

const content = document.createElement('div');
document.body.appendChild(content);

class Login extends React.Component {
    static displayName = '07-basic-validation';

    state = {
        fields: {
            username: '',
            password: '',
            tenant: ''
        },
        fieldErrors: {},
        people: []
        };
    

    handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("tenant",this.state.tenant);
        localStorage.setItem("user",this.state.username);
        this.props.onSubmitLogin(this.state.username + "!@#" + this.state.tenant, this.state.password);
        console.log(this.props.onSubmitLogin(this.state.username + "!@#" + this.state.tenant, this.state.password));
    };
    componentDidMount() {
        if (Auth.isAuthenticated()) {
            History.push("/dashboard");
        }
    }
    onFormSubmit = evt => {
        const people = [...this.state.people];
        const person = this.state.fields;
        const fieldErrors = this.validate(person);
        this.setState({ fieldErrors });
        evt.preventDefault();

        if (Object.keys(fieldErrors).length) return;

        this.setState({
            people: people.concat(person),
            fields: {
                username: '',
                password: '',
                tenant: '',
            }
        });
        evt.preventDefault();
        localStorage.setItem("tenant", this.state.fields.tenant);
        this.props.onSubmitLogin(this.state.fields.username + "!@#" + this.state.fields.tenant, this.state.fields.password);
        
        
    };

    onInputChange = evt => {
        const fields = Object.assign({}, this.state.fields);
        fields[evt.target.name] = evt.target.value;
        this.setState({ fields });
    };

    validate = person => {
        const errors = {};
        if (!person.username) errors.username = 'userame Required';
        if (!person.password) errors.password = 'password Required';
        if (!person.tenant) errors.tenant = 'tenant Required';
        return errors;
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
                                    <div>
                                        <input
                                            type='text'
                                            placeholder="userame"
                                            name="username"
                                            value={this.state.fields.username}
                                            onChange={this.onInputChange}
                                        />

                                        <span style={{ color: 'red' }}>{this.state.fieldErrors.username}</span>
                                    </div>
                                    <br />
                                    <div>
                                        <input
                                            type='text'
                                            placeholder="password"
                                            name="password"
                                            value={this.state.fields.password}
                                            onChange={this.onInputChange}
                                        />
                                        <span style={{ color: 'red' }}>{this.state.fieldErrors.password}</span>
                                    </div>
                                    <br />
                                    <div>
                                        <input
                                            type='text'
                                            placeholder="tenant"
                                            name="tenant"
                                            value={this.state.fields.tenant}
                                            onChange={this.onInputChange}
                                        />
                                        <span style={{ color: 'red' }}>{this.state.fieldErrors.tenant}</span>
                                    </div>
                                    <br />
                                    <input type="submit" />
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
