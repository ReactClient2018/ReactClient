import React, {Component} from 'react';
import {UserActionCreators} from "actions";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Nav from "../../components/Screening/MainAdminNavBar.jsx"
class CreateNewTenant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                username: '',
                password: '',
                tenantId: '',
                url: "",
                driverClassName: "org.postgresql.Driver"
            },
            fieldErrors: {}
        }

    }
    handleChange = (name, value, error) => {
        console.log("i am writing");
        const fields = {
            ...this.state.fields
        }; //creating copy of object
        //or fields={...this.state.fields};
        const fieldErrors = this.state.fieldErrors;
        fields[name] = value;
        fieldErrors[name] = error;
        this.setState({fields, fieldErrors})
    };
    validate = () => {
        const person = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errMessage = Object
            .keys(fieldErrors)
            .filter((k) => fieldErrors[k]);
        if (!person.username) 
            return true;
        if (!person.password) 
            return true;
        if (!person.tenantId) 
            return true;
        if (!person.url) 
            return true;
        if (!person.driverClassName) 
            return true;
        if (errMessage.length) 
            return true;
        return false;
    }
    // isEmail = (email) => {     var emailPat =
    // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\
    // 
    //
    // .[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   if (email.match(emailPat) == null) {         return false;     } return
    // true; }
    handleSubmit = (e) => {
        const person = this.state.fields;
        e.preventDefault();
        if (this.validate())return;
            this.setState(() => {
                return {
                    fields: {
                        username: '',
                        password: '',
                        tenantId: '',
                        url: "",
                        driverClassName: "org.postgresql.Driver"
                    }
                }
            })
        var data = JSON.stringify(this.state.fields);
        alert(data);
      
        // this.props.onSubmitTenant(data);
    };
    render() {
        const divStyle = {
            backgroundColor: 'white',
            overflowY: 'auto',
            width: '100%',
            height: '600px',
            position: 'relative'
        };
        return (
            <div style={divStyle}>
                <Nav/>
                <hr/>
                <div>
                    <h6>To create new tenant, please enter following details and click Submit.</h6>
                </div>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <Field
                        placeholder='Datasource username'
                        name='username'
                        value={this.state.fields.username}
                        validate={val => (val
                        ? false
                        : 'username required')}
                        onChange={this.handleChange}/>

                    <Field
                        placeholder='Datasource password'
                        name='password'
                        value={this.state.fields.password}
                        validate={val => (val
                        ? false
                        : 'password required')}
                        onChange={this.handleChange}/>

                    <Field
                        placeholder='tenant'
                        name='tenantId'
                        value={this.state.fields.tenantId}
                        validate={val => (val
                        ? false
                        : 'tenant required')}
                        onChange={this.handleChange}/>

                    <Field
                        placeholder='url'
                        name='url'
                        value={this.state.fields.url}
                        validate={val => (val
                        ? false
                        : 'url required')}
                        onChange={this.handleChange}/>

                    <input type="submit" disabled={this.validate()}/>
                </form>
            </div>

        );
    }

}

CreateNewTenant.propTypes = {
    added: PropTypes.bool,
    onSubmitTenant: PropTypes.func.isRequired
};

const mapStateToProps = state => ({tenant: state.tenant});

const mapDispatchToProps = dispatch => ({
    onSubmitTenant: values => dispatch(UserActionCreators.createTenant(values)),
    onClose: () => dispatch(UserActionCreators.close())
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateNewTenant);

class Field extends React.Component {
    state = {
        value: this.props.value,
        error: false
    }

    static propTypes = {
        placeholder: PropTypes.string,
        value: PropTypes.string,
        name: PropTypes.string.isRequired,
        validate: PropTypes.func,
        onChange: PropTypes.func.isRequired
    }
    static getDerivedStateFromProps(nextProps) {
        return {value: nextProps.value}
    }

    onChange = (e) => {
        const name = this.props.name;
        const value = e.target.value;
        const error = this.props.validate
            ? this
                .props
                .validate(value)
            : false;
        this.setState({value, error});
        this
            .props
            .onChange(name, value, error);
    }
    render() {
        return (
            <div>
                <input
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.onChange}></input>
                <span style={{
                    color: 'red'
                }}>{this.state.error}</span>
            </div>
        );
    }
}
