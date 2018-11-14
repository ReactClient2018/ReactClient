

import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Nav from "../../components/Screening/MainAdminNavBar.jsx";
import { SubmissionError } from 'redux-form';


const required = value => (
  value || typeof value === 'number' ? undefined : 'Required'
);
const maxLength = max => value =>
  value && value.length > max ? 'Must be ' + max + ' characters or less' : undefined;
const maxLength15 = maxLength(15);
const maxLength30 = maxLength(30);
export const minLength = min => value =>
  value && value.length < min ? 'must be ' + min + ' characters or more' : undefined;
const minLength10 = minLength(10);
const url = value => {
  const urlPat = new RegExp(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/);
  return value && !urlPat.test(value) ? 'Invalid url' : undefined
}
const passwordValid = value => {
  const passwordPat = new RegExp(/^[A-Z]{1,}[a-z!@#$%^&*]*[0-9]{1,}$/);
  return value && !passwordPat.test(value) ? 'Invalid password' : undefined
}
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
{touched && error && <span style={{color:'red'}}>{error}</span>
// ||(warning &&<span>{warning}</span>))
      }
    </div>
  </div>
)

const CreateNewTenant = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  return (
    <div>
      <Nav />
      <form onSubmit={handleSubmit(submit)}>
        <Field
          name="username"
          type="text"
          component={renderField}
          label="Username"
          validate={[required,]}
          // warn={}

        />
        <Field
          name="password"
          type="text"
          component={renderField}
          label="Password"
          validate={[required, passwordValid]}
        />
        <Field
          name="tenantId"
          type="text"
          component={renderField}
          label="TenantId"
          validate={required}
        />
        <Field
          name="url"
          type="text"
          component={renderField}
          label="URL"
          validate={[required,url]}
          // warn={}
        />

        {error && <strong>{error}</strong>}
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
  )
}
// function mapStateToProps(state){
//     return {

//     }
// }

export default reduxForm({
  form: 'submitTenantForm' // a unique identifier for this form
})(CreateNewTenant)



const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
  return sleep(1).then(() => {
    values.driverName = "org.postgresql.Driver";
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)

  })
}

