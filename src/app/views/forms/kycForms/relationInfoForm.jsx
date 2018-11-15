

import React from "react";
import { Field, FieldArray, reduxForm } from 'redux-form'
import NavBar from "../../../components/Screening/MainNavBar.jsx";
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
      Add Relation Info
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
            Relation Info #{index + 1}
            <span>&nbsp;&nbsp;<button
              type="button"
              title="Remove Relation Information"
              onClick={() => fields.remove(index)}
              style={{ color: 'red' }}
            >Remove Relation Info</button></span>
          </h4>
          <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
            <label className="control-label col-md-4 col-sm-4 col-xs-4">Relation Type</label>

            <Field name={member + '.relation_type'} component="select">
              <option />
              <option value="Father">father</option>
              <option value="Mother">Mother</option>
              <option value="Daughter">Daughter</option>
            </Field>
          </div>
          <Field
            name={member + '.customer_relation_Code'}
            type="text"
            component={renderField}
            label="customer relation code"
            input={{
              disabled: 'true',
            }}
          />
          <Field
            name={member + '.relation_cust_id'}
            type="text"
            component={renderField}
            label="Relation Customer ID"
          />
          <Field
            name={member + '.person_relation_cust_id'}
            type="text"
            component={renderField}
            label="person Relation Customer ID"
            input={{
              disabled: 'true',
            }}
          />
          <Field
            name={member + '.relation_kyc_id'}
            type="text"
            component={renderField}
            label="Relation KYC ID"
          />
          <div className="clearfix"></div>
          <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
            <label className="control-label col-md-4 col-sm-4 col-xs-4">Salutation</label>

            <Field name={member + '.salutation'} component="select">
              <option />
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="other">other</option>
            </Field>
          </div>
          <div className="clearfix"></div>
          <Field
            name={member + '.first_name'}
            type="text"
            component={renderField}
            label="First Name"
          />
          <Field
            name={member + '.person_relation_name'}
            type="text"
            component={renderField}
            label="Person relation name"
            input={{
              disabled: 'true',
            }}
          />
          <Field
            name={member + '.middle_name'}
            type="text"
            component={renderField}
            label="Middle Name"
          />
          <div className="clearfix"></div>
          <Field
            name={member + '.last_name'}
            type="text"
            component={renderField}
            label="last Name"
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
            name={member + ".bichkonaam"}
            type="text"
            component={renderField}
            label="बीचको नाम"

          />
          <div className="clearfix"></div>
          <Field
            name={member + ".lastkonamm"}
            type="text"
            component={renderField}
            label="थर"

          />
          <div className="clearfix"></div>
          <Field
            name={member + ".second_name"}
            type="text"
            component={renderField}
            label="second Name"

          />
          <div className="clearfix"></div>
          <Field
            name={member + ".called_by_name"}
            type="text"
            component={renderField}
            label="second Name"

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
            name={member + ".primary_identification_document_no"}
            type="text"
            component={renderField}
            label="Primary identification document no."

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
            name={member + ".issuing_authority"}
            type="text"
            component={renderField}
            label="Issuing authority"

          />
          <div className="clearfix"></div>
          <Field
            name={member + ".place_of_issue"}
            type="text"
            component={renderField}
            label="Place of Issue"

          />
          <div className="clearfix"></div>
          <Field
            name={member + ".issue_date"}
            type="date"
            component={renderField}
            label="Issue date"

          />
          <div className="clearfix"></div>
          <Field
            name={member + ".expiry_date"}
            type="date"
            component={renderField}
            label="Expiry date"

          />
          <div className="clearfix"></div>
          <Field
            name={member + ".notes"}
            type="text"
            component={renderField}
            label="Notes"

          />

          <div className="clearfix"></div>

        </li>

      )}
    </ul>
  </div>
const handleProceed = () => {
  alert("hi");
}
const RelationInfoForm = props => {
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
  form: 'relationInfoForm', // a unique identifier for this form
  //   validate
})(RelationInfoForm)
// export default RelationInfoForm

