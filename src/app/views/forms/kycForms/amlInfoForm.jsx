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
let AMLInfoForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div>

            <div className="container-fluid main-container">
                <SideNavPage />
                <div className="col-md-10 content">

                    <div className="row">
                        <div><h2>AML information<small>&nbsp;(please fill the AML information)</small></h2></div>
                        <form onSubmit={handleSubmit}>
                            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                                <label className="control-label col-md-4 col-sm-4 col-xs-4">Recommendation</label>

                                <Field name='recommendation' component="select">
                                    <option />
                                    <option value="">proceed High risk</option>
                                    <option value="">proceed High risk</option>

                                </Field>
                            </div>
                            <Field
                                name='previous_action'
                                label="Previous action"
                                component={renderField}
                                type="text"
                                input={{
                                    disabled:'true'
                                }}
                            />
                            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                                <label className="control-label col-md-4 col-sm-4 col-xs-4">Risk Categorization</label>

                                <Field name='risk_categorization' component="select">
                                    <option />
                                    <option value="">Low Risk Customer</option>
                                    <option value="">High Risk Customer</option>

                                </Field>
                            </div>
                            <Field
                                name='previous_notes'
                                label="Previous notes"
                                component={renderField}
                                type="text"
                                input={{
                                    disabled:'true'
                                }}
                            />
                           
                            <Field
                                name='US'
                                label="US"
                                component={renderField}
                                type="checkbox"
                            />
                            <Field
                                name='FATCA_country'
                                label="FATCA country"
                                component={renderField}
                                type="checkbox"
                            />
                            <Field
                                name='aml_check'
                                label="AML check"
                                component={renderField}
                                type="checkbox"
                            />
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
    form: 'amlInfoForm'  // a unique identifier for this form
})(AMLInfoForm)

// // Decorate with connect to read form values
// const selector = formValueSelector('amlInfoForm') // <-- same as form name
// AMLInfoForm = connect(
//   state => {

//     const values=getFormValues("amlInfoForm")(state)
//     console.log(values);
//     if(values!==null){
//       //  alert(JSON.stringify(values))
//       console.log(JSON.stringify(values));
//     }
//     return {

//     }

//   }
// )(AMLInfoForm)

//export default AMLInfoForm