import React, { Component } from "react";
import { reduxForm, Field, FieldArray } from "redux-form";
import SideNavPage from "../viewKYCRequests.jsx";
import { connect } from "react-redux";
const renderField = ({ input, label, type, meta: { touched, error } }) =>
    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
        <label className=" control-label col-md-4 col-sm-4 cols-xs-4">{label}</label>
        <div>
            <input {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>

const renderMembers = ({ fields, meta: { error, submitFailed } }) =>
    <div>
        <button type="button" onClick={() => fields.push({})}>
            Add Education Info
        </button>
        {submitFailed &&
            error &&
            <span>
                {error}
            </span>}
        <ul>
            {fields.map((member, index) =>

                <li key={index}>

                    <h4>
                        Education Information #{index + 1}
                        <span>&nbsp;&nbsp;<button
                            type="button"
                            title="Remove "
                            onClick={() => fields.remove(index)}
                            style={{ color: 'red' }}
                        >Remove </button></span>
                    </h4>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4">Qualification</label>

                        <Field name={member + '.qualification'} component="select">
                            <option />
                            <option value="">High School</option>
                            <option value="">Undergraduate</option>
                            <option value="">Graduate</option>
                        </Field>
                    </div>
                   
                    <Field
                        name={member + ".name_of_institution"}
                        component={renderField}
                        type="text"
                        label="Name of institution"
                    />
                     <Field
                        name={member + ".field_of_study"}
                        component={renderField}
                        type="text"
                        label="Field of Study"
                    />
                     <Field
                        name={member + ".year_of_graduation"}
                        component={renderField}
                        type="text"
                        label="Year of Graduation"
                    />
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4">Notes</label>
                     <Field
                        name={member + ".notes"}
                        component="textarea"
                       
                    />
                    </div>
                    <div className="clearfix"></div>
                </li>
            )}
        </ul>
    </div>

const handleProceed = () => {
    alert("hi");
  }
  const EducationInfoForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
      <div className="container-fluid main-container">
        <SideNavPage />
        <div className="col-md-10 content">
  
          <div className="row">
            <div><h2>Education information</h2></div>
            <form onSubmit={handleSubmit}>
  
              <FieldArray name="members" component={renderMembers} />
  
              <div>
                <button type="submit" disabled={submitting}>
                  Submit
          </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                  Clear Values
          </button>
                <div>
                  <button onClick={handleProceed}>Proceed</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  
    )
  }
  
  export default reduxForm({
    form: 'educationInfoForm', // a unique identifier for this form
    //   validate
  })(EducationInfoForm)
  // export default RelationInfoForm
  
  