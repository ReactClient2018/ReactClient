import React, {Component} from 'react';
import {UserActionCreators} from "actions";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Nav from "../../components/Screening/MainAdminNavBar.jsx"
import {Field, reduxForm, formValueSelector} from 'redux-form';

const required = value => (value || typeof value === 'number'
    ? undefined
    : 'Required');
const maxLength = max => value => value && value.length > max
    ? 'Must be ' + max + ' characters or less'
    : undefined;

export const minLength = min => value => value && value.length < min
    ? 'must be ' + min + ' characters or more'
    : undefined;


const url = value => {
    const urlPat = new RegExp(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/);
    return value && !urlPat.test(value)
        ? 'Invalid url'
        : undefined
}
const passwordValid = value => {
    const passwordPat = new RegExp(/^[A-Z]{1,}[a-z!@#$%^&*]*[0-9]{1,}$/);
    return value && !passwordPat.test(value)
        ? 'Invalid password'
        : undefined
}
const renderField = ({
    input,
    label,
    type,
    meta: {
        touched,
        error
    }
}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/> {touched && error && <span style={{
                color: 'red'
            }}>{error}</span>
            }
        </div>
    </div>
)

class CreateNewTenant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            tenantId: '',
            url: "",
            driverClassName: "org.postgresql.Driver"
        }

    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
  
    handleSubmit = (e) => {
        var data = this.state;
        if (this.validate()) 
            return;
        alert(JSON.stringify(data));

        // this.props.onSubmitTenant(data);
    };
    validate = () => {
        const data = this.state;
        if (!data.username) 
            return true;
        if (!data.password) 
            return true;
        if (!data.tenantId) 
            return true;
        if (!data.url) 
            return true;
        return false;
    };
    render() {
        const divStyle = {
            backgroundColor: 'white',
            overflowY: 'auto',
            width: '100%',
            height: '600px',
            position: 'relative'
        };
        const {error, handleSubmit, pristine, reset, submitting} = this.props
        return (
            <div>
                <Nav/>
                <form
                    onSubmit={this
                    .handleSubmit
                    .bind(this)}>
                    <Field name="username" type="text" value={this.state.username} onChange={this.handleChange} component={renderField} label="Username" validate={[required]} />
                    <Field
                        name="password"
                        type="text"
                        value={this.state.password}
                        onChange={this.handleChange}
                        component={renderField}
                        label="Password"
                        validate={[required, passwordValid]}/>
                    <Field
                        name="tenantId"
                        type="text"
                        value={this.state.tenantId}
                        onChange={this.handleChange}
                        component={renderField}
                        label="TenantId"
                        validate={required}/>
                    <Field name="url" type="text" value={this.state.url} onChange={this.handleChange} component={renderField} label="URL" validate={required} /> {error && <strong>{error}</strong>}
                    <div>
                        <button type="submit" disabled={submitting}>
                            Submit
                        </button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
                        </button>
                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'submitTenantForm'})(CreateNewTenant));
