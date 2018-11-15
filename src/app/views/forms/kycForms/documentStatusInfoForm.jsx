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
            Add Document Status Info
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
                        Document Status Information #{index + 1}
                        <span>&nbsp;&nbsp;<button
                            type="button"
                            title="Remove "
                            onClick={() => fields.remove(index)}
                            style={{ color: 'red' }}
                        >Remove </button></span>
                    </h4>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4">Document type</label>

                        <Field name={member + '.document_type'} component="select">
                            <option />
                            <option value="">Adhar card</option>
                            <option value="">Passport</option>
                            <option value="">Id card</option>
                        </Field>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4">Document status</label>

                        <Field name={member + '.document_status'} component="select">
                            <option />
                            <option value="">completed</option>
                            <option value="">Pending</option>

                        </Field>
                    </div>
                    <Field
                        name={member + ".document_submission_date"}
                        label="Document submission Date"
                        type="date"
                        component={renderField}
                    />
                     <Field
                        name={member + ".refresh_date"}
                        label="Refresh Date"
                        type="date"
                        component={renderField}
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
const DocumentStatusInfoForm = props => {
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
    form: 'documentStatusInfoForm', // a unique identifier for this form
    //   validate
})(DocumentStatusInfoForm)
  // export default RelationInfoForm

