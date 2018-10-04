import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux"
import {LoginActionCreators} from "actions";
import {Auth,History} from "utils"
import { appStyle } from 'variables';
import {
    withStyles,
} from 'material-ui';
import {
    RegularCard, Button, CustomInput, ItemGrid
} from 'components';
import {
    Grid
} from 'material-ui';
class Login extends React.Component{

    componentDidMount(){
        if(Auth.isAuthenticated()){
            History.push("/dashboard");
        }
    }
    errorMessage() {
        if (this.props.alert) {
            return (
                <div className={this.props.alert.type}>
                    {this.props.alert.message}
                </div>
            );
        }
    }

    handleSubmit(event) {
        event.preventDefault();
       this.props.onSubmitLogin(this.username.value+"!@#"+this.tenant.value, this.password.value);
       localStorage.setItem("tenant",this.tenant.value)
    }

    render(){
        const { classes, ...rest } = this.props;
        return(
                <div className={classes.wrapper}>
                    <div className={classes.mainPanel} ref="mainPanel">
                        <div className={classes.content}>
                            <div className={classes.container}>
                                <Grid container>
                                    <ItemGrid xs={12} sm={12} md={2}>
                                    </ItemGrid>
                                    <ItemGrid xs={12} sm={12} md={6}>
                                        <form onSubmit={this.handleSubmit.bind(this)}>
                                        <RegularCard
                                            cardTitle="Login"
                                            cardSubtitle="Provide username and password"
                                            content={
                                                <div>
                                                    <Grid container>
                                                        <ItemGrid xs={12} sm={12} md={12}>
                                                            <CustomInput
                                                                labelText="User Name"
                                                                id="username"
                                                                inputRef={(input) => {this.username = input}}
                                                                formControlProps={{
                                                                    fullWidth: true
                                                                }}
                                                                inputProps ={{
                                                                    type:"text",
                                                                }}
                                                            />
                                                            </ItemGrid>
                                                    </Grid>

                                                    <Grid container>
                                                        <ItemGrid xs={12} sm={12} md={12}>
                                                            <CustomInput
                                                                labelText="Tenant"
                                                                id="tenant"
                                                                inputRef={(input) => {this.tenant = input}}
                                                                formControlProps={{
                                                                    fullWidth: true
                                                                }}
                                                                inputProps ={{
                                                                    type:"tenant",
                                                                }}
                                                            />
                                                            </ItemGrid>
                                                    </Grid>
                                                    <Grid container>
                                                        <ItemGrid xs={12} sm={12} md={12}>
                                                            <CustomInput
                                                                labelText="Password"
                                                                id="password"
                                                                inputRef={(input) => {this.password = input}}
                                                                formControlProps={{
                                                                    fullWidth: true
                                                                }}
                                                                inputProps ={{
                                                                    type:"password",
                                                                }}
                                                            />
                                                        </ItemGrid>
                                                    </Grid>

                                                </div>
                                            }
                                            footer={
                                                <Button type="submit" color="primary">Login</Button>
                                            }
                                        />
                                        </form>
                                    </ItemGrid>
                                    <ItemGrid xs={12} sm={12} md={4}>
                                    </ItemGrid>

                                </Grid>
                            </div>
                        </div>

                    </div>
                 </div>
        );
    }
}

Login.propTypes = {
    alert:PropTypes.shape({
        type:PropTypes.string,
        message:PropTypes.string
    }),
    onSubmitLogin:PropTypes.func.isRequired
}
const mapStateToProps = (state) => (
    {
       alert: state.alert
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        onSubmitLogin: (username, password) => dispatch(
            LoginActionCreators.login(username,password)
        )
    }
);

Login = withStyles(appStyle, { withTheme: true })(Login);

export default connect(mapStateToProps, mapDispatchToProps)(Login);