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
            Add Involvement Info
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
                        Involvement Information #{index + 1}
                        <span>&nbsp;&nbsp;<button
                            type="button"
                            title="Remove "
                            onClick={() => fields.remove(index)}
                            style={{ color: 'red' }}
                        >Remove </button></span>
                    </h4>

                    <Field
                        name={member + ".involved_organisation_kyc_id"}
                        type="text"
                        component={renderField}
                        label="Involved organisation KYC ID"

                    />
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4">Nature of Involved Organization</label>
                        <Field name={member + '.nature_of_involved_organisation'} component="select">
                            <option />
                            <option value="">government office</option>
                            <option value="">government agencies</option>
                            <option value="">private company</option>
                        </Field>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4">Country</label>
                        <Field name={member + '.country'} component="select">
                            <option />
                            <option value="Nepal">Nepal</option>
                            <option value="India">India</option>
                            <option value="China">China</option>
                        </Field>
                    </div>
                   
                    <Field
                        name={member + ".province"}
                        type="text"
                        component={renderField}
                        label="Province"

                    />
                  
                    <Field
                        name={member + ".zone"}
                        type="text"
                        component={renderField}
                        label="Zone"

                    />
                    <div className="clearfix"></div>
                    <Field
                        name={member + ".district"}
                        type="text"
                        component={renderField}
                        label="District"

                    />
                 
                    <Field
                        name={member + "mn_vdc_city"}
                        type="text"
                        component={renderField}
                        label="MN/VDC/city"

                    />
                   
                    <Field
                        name={member + ".pin_zip"}
                        type="text"
                        component={renderField}
                        label="PIN/ZIP"

                    />
                  
                    <Field
                        name={member + ".ward_no"}
                        type="text"
                        component={renderField}
                        label="Ward no."

                    />

                  
                    <Field
                        name={member + ".tole_area"}
                        type="text"
                        component={renderField}
                        label="Tole/Area"

                    />


                   
                    <Field
                        name={member + ".street"}
                        type="text"
                        component={renderField}
                        label="Street"

                    />
                   
                    <Field
                        name={member + ".house_no"}
                        type="text"
                        component={renderField}
                        label="House No."

                    />
                   
                    <Field
                        name={member + ".unit_no"}
                        type="text"
                        component={renderField}
                        label="Unit No."

                    />
                  
                    <Field
                        name={member + ".nearest_landmark"}
                        type="text"
                        component={renderField}
                        label="Nearest Landmark"

                    />
                  
                    <Field
                        name={member + ".latitude"}
                        type="text"
                        component={renderField}
                        label="Latitude"

                    />
                   
                    <Field
                        name={member + ".longitude"}
                        type="text"
                        component={renderField}
                        label="Longitude"

                    />
                    <div className="clearfix"></div>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4"><h5>Phone Number(mobile)</h5></label>
                        <div className="clearfix"></div>

                        <div>
                            <Field

                                name={member + ".phone_no_country_code"}
                                label="Country code"
                                type="text"
                                component={renderField}
                            />
                            <Field
                                name={member + ".phone_no_area_code"}
                                label="Area code"
                                type="text"
                                component={renderField}
                            />
                            <Field
                                name={member + ".phone_no"}
                                label="Phone no."
                                type="text"
                                component={renderField}
                            />
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4"><h5>Fax No.</h5></label>
                        <div className="clearfix"></div>

                        <div>
                            <Field

                                name={member + ".fax_country_code"}
                                label="Country code"
                                type="text"
                                component={renderField}
                            />
                            <Field
                                name={member + ".fax_area_code"}
                                label="Area code"
                                type="text"
                                component={renderField}
                            />
                            <Field
                                name={member + ".fax_no"}
                                label="fax no."
                                type="text"
                                component={renderField}
                            />
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <Field
                        name={member + ".email_id"}
                        type='email'
                        component={renderField}
                        label="EmailID"
                    />
                  
                    <Field
                        name={member + ".website_url"}
                        type='text'
                        component={renderField}
                        label="Website URL"
                    />
                    <Field
                        name={member + ".pan_vat_reference"}
                        type='text'
                        component={renderField}
                        label="PAN/VAT reference"
                    />
                    <Field
                        name={member + ".pobox_no"}
                        type='text'
                        component={renderField}
                        label="PO Box no."
                    />
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4">Nature of Involvement</label>
                        <Field name={member + '.nature_of_involvement'} component="select">
                            <option />
                            <option value="">employee</option>
                            <option value="">member</option>
                            <option value="">investor</option>
                        </Field>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4">Occupation Type</label>
                        <Field name={member + '.occupation_type'} component="select">
                            <option />
                            <option value="">domestic pep</option>
                            <option value="">foreign pep</option>
                            <option value="">executive pep</option>
                        </Field>
                    </div>
                    <Field
                        name={member + ".designation"}
                        type='text'
                        component={renderField}
                        label="designation"
                    />
                    <Field
                        name={member + ".start_date"}
                        type='date'
                        component={renderField}
                        label="start date"
                    />
                    <Field
                        name={member + ".end_date"}
                        type='date'
                        component={renderField}
                        label="end date"
                    />
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4">Notes</label>
                        <Field
                            name={member + ".notes"}

                            component="textarea"
                            label="Notes"
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
const involvementInfoForm = props => {
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
    form: 'involvementInfoForm', // a unique identifier for this form
    //   validate
})(involvementInfoForm)
  // export default RelationInfoForm

