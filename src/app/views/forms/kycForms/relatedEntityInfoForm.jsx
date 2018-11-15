

import React from "react";
import { Field, FieldArray, reduxForm } from 'redux-form'

import SideNavPage from "../viewKYCRequests.jsx";
import { connect } from 'react-redux'
const renderField = ({ input, label, type, meta: { touched, error } }) =>
    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
        <label className="control-label col-md-4 col-sm-4 col-xs-4">{label}</label>
        <div>
            <input {...input} type={type} placeholder={label} />
            {touched &&
                error &&
                <span>
                    {error}
                </span>}
        </div>
    </div>


const renderMembers = ({ fields, meta: { error, submitFailed } }) =>
    <div>


        <button type="button" onClick={() => fields.push({})}>
            Add Related Entity Info
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
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4">Related Entity Type</label>

                        <Field name={member + '.related_person_type'} component="select">
                            <option />
                            <option value="Nominee">Nominee</option>
                            <option value="Guardian">Guardian</option>
                            <option value="Signatory">Signatory</option>
                        </Field>
                    </div>

                    <Field
                        name={member + '.related_entity_cust_id'}
                        type="text"
                        component={renderField}
                        label="Related Entity Customer ID"
                    />

                    <Field
                        name={member + '.related_entity_kyc_id'}
                        type="text"
                        component={renderField}
                        label="Related Entity KYC ID"
                    />
                    <div className="clearfix"></div>

                    <div className="clearfix"></div>
                    <Field
                        name={member + '.name'}
                        type="text"
                        component={renderField}
                        label="Name"
                    />


                    <div className="clearfix"></div>
                    <Field
                        name={member + ".naam"}
                        type="text"
                        component={renderField}
                        label="नाम"

                    />


                    <div className="clearfix"></div>
                    <Field
                        name={member + ".called_by_name"}
                        type="text"
                        component={renderField}
                        label="Called by Name"

                    />
                    <div className="clearfix"></div>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4">Relation Type</label>

                        <Field name={member + '.primary_id_document_type'} component="select">
                            <option />
                            <option value="aadhar card">aadhar card</option>
                            <option value="citizenship">citizenship</option>
                            <option value="Driving License">Driving License</option>
                        </Field>
                    </div>
                    <div className="clearfix"></div>
                    <Field
                        name={member + "registration_no"}
                        type="text"
                        component={renderField}
                        label="Registration no."

                    />
                    <div className="clearfix"></div>

                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4">Relation Type</label>

                        <Field name={member + '.country_of_issue'} component="select">
                            <option />
                            <option value="Nepal">Nepal</option>
                            <option value="India">India</option>
                            <option value="China">China</option>
                        </Field>
                    </div>
                    <div className="clearfix"></div>
                    <Field
                        name={member + ".province"}
                        type="text"
                        component={renderField}
                        label="Province"

                    />
                    <div className="clearfix"></div>
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
                    <div className="clearfix"></div>
                    <Field
                        name={member + "mn_vdc_city"}
                        type="text"
                        component={renderField}
                        label="MN/VDC/city"

                    />
                    <div className="clearfix"></div>
                    <Field
                        name={member + ".pin_zip"}
                        type="text"
                        component={renderField}
                        label="PIN/ZIP"

                    />
                    <div className="clearfix"></div>
                    <Field
                        name={member + ".ward_no"}
                        type="text"
                        component={renderField}
                        label="Ward no."

                    />

                    <div className="clearfix"></div>
                    <Field
                        name={member + ".tole_area"}
                        type="text"
                        component={renderField}
                        label="Tole/Area"

                    />


                    <div className="clearfix"></div>
                    <Field
                        name={member + ".street"}
                        type="text"
                        component={renderField}
                        label="Street"

                    />
                    <div className="clearfix"></div>
                    <Field
                        name={member + ".house_no"}
                        type="text"
                        component={renderField}
                        label="House No."

                    />
                    <div className="clearfix"></div>
                    <Field
                        name={member + ".unit_no"}
                        type="text"
                        component={renderField}
                        label="Unit No."

                    />
                    <div className="clearfix"></div>
                    <Field
                        name={member + ".nearest_landmark"}
                        type="text"
                        component={renderField}
                        label="Nearest Landmark"

                    />
                    <div className="clearfix"></div>
                    <Field
                        name={member + ".latitude"}
                        type="text"
                        component={renderField}
                        label="Latitude"

                    />
                    <div className="clearfix"></div>
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
                        <label className="control-label col-md-4 col-sm-4 col-xs-4"><h5>Land Line</h5></label>
                        <div className="clearfix"></div>

                        <div>
                            <Field

                                name={member + ".land_line_country_code"}
                                label="Country code"
                                type="text"
                                component={renderField}
                            />
                            <Field
                                name={member + ".land_line_area_code"}
                                label="Area code"
                                type="text"
                                component={renderField}
                            />
                            <Field
                                name={member + ".land_line_no"}
                                label="Land line no."
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
                    <div className="clearfix"></div>
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
const RelatedEntityInfoForm = props => {
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
    form: 'relatedEntityInfoForm', // a unique identifier for this form
    //   validate
})(RelatedEntityInfoForm)
// export default RelationInfoForm

