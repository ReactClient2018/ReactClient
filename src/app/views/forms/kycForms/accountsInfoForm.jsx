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
            Add Accounts Info
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
                        Related Entity Information #{index + 1}
                        <span>&nbsp;&nbsp;<button
                            type="button"
                            title="Remove "
                            onClick={() => fields.remove(index)}
                            style={{ color: 'red' }}
                        >Remove </button></span>
                    </h4>
                    {/* <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4">Qualification</label>

                        <Field name={member + '.qualification'} component="select">
                            <option />
                            <option value="">High School</option>
                            <option value="">Undergraduate</option>
                            <option value="">Graduate</option>
                        </Field>
                    </div> */}

                    <Field
                        name={member + ".pan_gir_of_customer"}
                        component={renderField}
                        type="text"
                        label="PAN/GIR of Customer"
                    />
                    <Field
                        name={member + ".pan_gir_of_customer"}
                        component={renderField}
                        type="text"
                        label="PAN/GIR of Customer"
                        input={{
                            disabled: 'true'
                        }}
                    />
                    <Field
                        name={member + ".currency_of_customer"}
                        component={renderField}
                        type="text"
                        label="Currency of Customer"
                    />
                    <Field
                        name={member + ".currency_of_customer"}
                        component={renderField}
                        type="text"
                        label="Currency of Customer"
                        input={{
                            disabled: 'true'
                        }}
                    />
                    <Field
                        name={member + ".currency_of_customer"}
                        component={renderField}
                        type="text"
                        label="Currency of Customer"
                    />

                    <div className="clearfix"></div>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4"><b>Service Subscribed by Individual</b></label>
                        <div className="clearfix"></div>

                        <div>
                            <Field

                                name={member + ".service_subscrived_by_individual"}
                                label="Utility Payment"
                                type="checkbox"
                                component={renderField}
                            />
                            <Field

                                name={member + ".service_subscrived_by_individual"}
                                label="Salary management"
                                type="checkbox"
                                component={renderField}
                            />
                            <Field

                                name={member + ".service_subscrived_by_individual"}
                                label="Gift Cheque"
                                type="checkbox"
                                component={renderField}
                            />
                            <Field

                                name={member + ".service_subscrived_by_individual"}
                                label="Convenience Banking"
                                type="checkbox"
                                component={renderField}
                            />
                            <Field

                                name={member + ".service_subscrived_by_individual"}
                                label="Cheque"
                                type="checkbox"
                                component={renderField}
                            />
                            <Field

                                name={member + ".service_subscrived_by_individual"}
                                label="Draft"
                                type="checkbox"
                                component={renderField}
                            />
                            <Field

                                name={member + ".service_subscrived_by_individual"}
                                label="Manager's Cheque"
                                type="checkbox"
                                component={renderField}
                            />
                            <Field

                                name={member + ".service_subscrived_by_individual"}
                                label="wire Transfer"
                                type="checkbox"
                                component={renderField}
                            />
                            <Field

                                name={member + ".service_subscrived_by_individual"}
                                label="internet Banking"
                                type="checkbox"
                                component={renderField}
                            />
                        </div>
                    </div>
                   
                    <div className="clearfix"></div>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4"><b>Cards Subscribed by Individual</b></label>
                        <div className="clearfix"></div>

                        <div>
                            <Field

                                name={member + ".cards_subscrived_by_individual"}
                                label="Promotion card"
                                type="checkbox"
                                component={renderField}
                            />
                            <Field

                                name={member + ".cards_subscrived_by_individual"}
                                label="master card international"
                                type="checkbox"
                                component={renderField}
                            />
                            <Field

                                name={member + ".cards_subscrived_by_individual"}
                                label="VISA Domestic"
                                type="checkbox"
                                component={renderField}
                            />
                            <Field

                                name={member + ".cards_subscrived_by_individual"}
                                label="SCT"
                                type="checkbox"
                                component={renderField}
                            />
                            <Field

                                name={member + ".cards_subscrived_by_individual"}
                                label="American Express card"
                                type="checkbox"
                                component={renderField}
                            />
                            <Field

                                name={member + ".cards_subscrived_by_individual"}
                                label="Prepaid card"
                                type="checkbox"
                                component={renderField}
                            />
                          
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </li>
            )}
        </ul>
    </div>

const handleProceed = () => {
    alert("hi");
}
const AccountsInfoForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div className="container-fluid main-container">
            <SideNavPage />
            <div className="col-md-10 content">

                <div className="row">
                    <div><h2>Relation information</h2></div>
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
    form: 'accountsInfoForm', // a unique identifier for this form
    //   validate
})(AccountsInfoForm)

