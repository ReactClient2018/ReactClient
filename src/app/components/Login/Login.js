import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { LoginActionCreators } from "actions";
import { Auth, History } from "utils"
import AppHeader, { Footer } from '../../commons/AppHeader';
import { Form, Input, Button, Icon, notification } from 'antd';
import { FormControl, ControlLabel, HelpBlock, FormGroup, ButtonToolbar } from 'react-bootstrap';
import './Login.css';

const FormItem = Form.Item;


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            tenant: ''
        };
    }


    getValidationState() {
        const length = this.state.password.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    componentDidMount() {
        if (Auth.isAuthenticated()) {
            History.push("/dashboard");
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("tenant",this.state.tenant);
        this.props.onSubmitLogin(this.state.username + "!@#" + this.state.tenant, this.state.password);
        console.log(this.props.onSubmitLogin(this.state.username + "!@#" + this.state.tenant, this.state.password));
    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    render() {

        return (
            <div>
                <AppHeader />

                <div style={{backgroundColor:'white'}}>

                    {/* <!-- page content --> */}
                    <div className="right_col login_col" role="main">
                        <div className="clearfix"></div>
                       

                        <div className="login-container">
                            <h1 className="page-title">Login</h1>
                            <div className="login-content">

                                <form onSubmit={this.handleSubmit}>
                                    <FormGroup
                                        controlId="formUsername"
                                        validationState={this.getValidationState()}
                                    >
                                        <ControlLabel style={{color:'black'}}>Username</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name='username'
                                            value={this.state.username}
                                            placeholder="Username"
                                            onChange={this.handleChange}

                                        />
                                        <FormControl.Feedback />
                                        {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
                                    </FormGroup>
                                    <FormGroup
                                        controlId="formTenant"
                                        validationState={this.getValidationState()}
                                    >
                                        <ControlLabel style={{color:'black'}}>Tenant</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name='tenant'
                                            value={this.state.tenant}
                                            placeholder="Enter tenant ID"
                                            onChange={this.handleChange}
                                        />
                                        <FormControl.Feedback />
                                        {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
                                    </FormGroup>
                                    <FormGroup
                                        controlId="formPassword"
                                        validationState={this.getValidationState()}
                                    >
                                        <ControlLabel style={{color:'black'}}>password</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name='password'
                                            value={this.state.password}
                                            placeholder="password"
                                            onChange={this.handleChange}
                                        />
                                        <FormControl.Feedback />
                                        {/* <HelpBlock></HelpBlock> */}
                                    </FormGroup>

                                    <button type='submit' style={{ backgroundColor: 'lightblue' }}>Login</button>


                                </form>

                            </div>

                            <Footer />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

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

