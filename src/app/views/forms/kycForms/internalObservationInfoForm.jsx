import React, { Component } from "react";
import { Field, reduxForm, formValueSelector, getFormValues } from 'redux-form'
import NavBar from "../../../components/Screening/MainNavBar.jsx";
import SideNavPage from "../viewKYCRequests.jsx";
import { connect } from 'react-redux'
const renderField = ({ input, label, type, meta: { touched, error } }) =>
    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
        <label className=" control-label col-md-4 col-sm-4 cols-xs-4">{label}</label>
        <div>
            <input {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
const handleSubmitClick = () => {
    alert("Hi");
}
let InternalObservationInfoForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div>

            <div className="container-fluid main-container">
                <SideNavPage />
                <div className="col-md-10 content">

                    <div className="row">
                        <div><h2>Internal Observation information<small>&nbsp;(please fill the internal observation information)</small></h2></div>
                        <form onSubmit={handleSubmit}>
                            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                                <label className="control-label col-md-4 col-sm-4 col-xs-4">Observation type</label>

                                <Field name='observation_type' component="select">
                                    <option />
                                    <option value="">face to face</option>
                                    <option value="">non face to face</option>

                                </Field>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                                <label className="control-label col-md-4 col-sm-4 col-xs-4">Physical Observation</label>

                                <Field name='physical_observation' component="select">
                                    <option />
                                    <option value=""></option>
                                    <option value=""></option>

                                </Field>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                                <label className="control-label col-md-4 col-sm-4 col-xs-4">Physical Observation</label>

                                <Field name='physical_observation' component="select">
                                    <option />
                                    <option value="long hair"></option>
                                    <option value=""></option>

                                </Field>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                                <label className="control-label col-md-4 col-sm-4 col-xs-4">Physical Observation</label>

                                <Field name='physical_observation' component="select">
                                    <option />
                                    <option value=""></option>
                                    <option value=""></option>

                                </Field>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                                <label className="control-label col-md-4 col-sm-4 col-xs-4">Financial Observation</label>

                                <Field name='financial_observation' component="select">
                                    <option />
                                    <option value=""></option>
                                    <option value=""></option>

                                </Field>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                                <label className="control-label col-md-4 col-sm-4 col-xs-4">Behavioural Observation</label>

                                <Field name='behavioural_observation' component="select">
                                    <option />
                                    <option value=""></option>
                                    <option value=""></option>

                                </Field>
                            </div>
                            <Field
                                name='connected_person'
                                label="Connected Person"
                                component={renderField}
                                type="text"
                            />
                            <Field
                                name='connected_id'
                                label="Connected Id"
                                component={renderField}
                                type="text"
                            />
                            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                                <label className="control-label col-md-4 col-sm-4 col-xs-4">Intended Object of Business Relation</label>

                                <Field name='intended_objective_of_business_relation' component="select">
                                    <option />
                                    <option value=""></option>
                                    <option value=""></option>

                                </Field>
                            </div>
                            <Field
                                name='observation_media_source'
                                label="Observation media source"
                                component={renderField}
                                type="text"
                            />
                            <Field
                                name='observation_date'
                                label="Observation Date"
                                component={renderField}
                                type="date"
                            />
                            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                                <label className="control-label col-md-4 col-sm-4 col-xs-4">Observation time</label>

                                <Field name='intended_objective_of_business_relation' component="select">
                                
													<option value="">Select hour of day</option>
													<option disabled="" ></option>
												<option value="10:00:00 AM">10:00:00 AM</option> 
                                                <option value="11:00:00 AM">11:00:00 AM</option>
                                                <option value="12:00:00 PM">12:00:00 PM</option>
                                                <option value="01:00:00 PM">01:00:00 PM</option>

                                </Field>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                                <label className="control-label col-md-4 col-sm-4 col-xs-4">Notes</label>

                                <Field
                                    name='notes'
                                    component="textarea"
                                    label="Notes"

                                />
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                                <button className="control-label col-md-4 col-sm-4 col-xs-4" style={{ backgroundColor: 'lightblue' }} type="submit">Proceed</button>
                            </div>
                        </form>
                    
                    </div>
                </div>
            </div>
        </div>

    )
}



export default reduxForm({
    form: 'internalObservationInfoForm'  // a unique identifier for this form
})(InternalObservationInfoForm)

// // Decorate with connect to read form values
// const selector = formValueSelector('internalObservationInfoForm') // <-- same as form name
// InternalObservationInfoForm = connect(
//   state => {

//     const values=getFormValues("internalObservationInfoForm")(state)
//     console.log(values);
//     if(values!==null){
//       //  alert(JSON.stringify(values))
//       console.log(JSON.stringify(values));
//     }
//     return {

//     }

//   }
// )(InternalObservationInfoForm)

//export default InternalObservationInfoForm