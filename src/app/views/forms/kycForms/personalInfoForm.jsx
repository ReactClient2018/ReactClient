import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import NavBar from "../../../components/Screening/MainNavBar.jsx";
import SideNavPage from "../viewKYCRequests.jsx";
const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
        <div className="x_content">
            <div class="col-md-6 col-sm-6 col-xs-12 item form-group">
                <label class="control-label col-md-4 col-sm-4 col-xs-4">{label}</label>
                <div>
                    <input {...input}
                        type={type}


                    ></input>
                    {touched &&
                        ((error && <span>{error}</span>) ||
                            (warning && <span>{warning}</span>))}
                </div>
            </div>
        </div>

    )
const handleSubmitClick = () => {
    alert("Hi");
}
const PersonalInfoForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div>
       
        <div class="container-fluid main-container">
           <SideNavPage/>
            <div class="col-md-10 content">
    
                <div class="row">
        <form onSubmit={handleSubmit}>
            <div class="col-md-6 col-sm-6 col-xs-12 item form-group"></div>
            <Field
                name="primary_sol_id"
                type="text"
                component={renderField}
                label="Primary Sol ID"
                input={{
                    disabled: true,
                    placeholder: '',
                }}
            />
            <Field
                name="Verified Record"
                type="checkbox"
                component={renderField}
                label="VerifiedRecord"

            />
            <Field
                name="entity_CRE_flag"
                type="text"
                component={renderField}
                label="Entity CRE flag"
                input={{
                    disabled: true,
                    placeholder: '',
                }}
            />
            <Field
                name="cust_id"
                type="text"
                component={renderField}
                label="Cust ID"
                input={{

                    placeholder: 'custId',
                }}
            />
            <Field
                name="cust_id"
                type="text"
                component={renderField}
                label="Customer ID"
                input={{
                    disabled: "true",
                    placeholder: '',
                }}
            />
            <Field
                name="screening_id"
                type="text"
                component={renderField}
                label="Screening ID"
            />
            <Field
                name="cust_title_code"
                type="text"
                component={renderField}
                label="Customer title code"
                input={{
                    disabled: "true",
                    placeholder: '',
                }}
            />
            <div class="col-md-6 col-sm-6 col-xs-12 item form-group">
                <label class="control-label col-md-4 col-sm-4 col-xs-4">Salutation</label>

                <Field name="salutation" component="select">
                    <option />
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="other">other</option>
                </Field>
            </div>
            <Field
                name="customer_name"
                type="text"
                component={renderField}
                label="Customer Name"
                input={{
                    disabled: "true",
                    placeholder: '',
                }}
            />
            <Field
                name="first_name"
                type="text"
                component={renderField}
                label="First Name"
                input={{

                    placeholder: 'first name',
                }}
            />
            <Field
                name="customer__first_name"
                type="text"
                component={renderField}
                label="Customer first Name"
                input={{
                    disabled: "true",
                    placeholder: '',
                }}
            />
            <Field
                name="middle_name"
                type="text"
                component={renderField}
                label="Middle Name"
                input={{

                    placeholder: 'middleName',
                }}
            />
            <Field
                name="customer_middle_name"
                type="text"
                component={renderField}
                label="Customer Middle Name"
                input={{
                    disabled: "true",
                    placeholder: '',
                }}
            />
            <Field
                name="last_name"
                type="text"
                component={renderField}
                label="Last Name"
                input={{

                    placeholder: 'lastName',
                }}
            />
            <Field
                name="customer_last_name"
                type="text"
                component={renderField}
                label="Customer Last Name"
                input={{
                    disabled: "true",
                    placeholder: '',
                }}
            />
            <Field
                name=""
                type="text"
                component={renderField}
                label="सम्बोधन"
                input={{

                    placeholder: 'सम्बोधन',
                }}
            />
            <Field
                name="native_lang_title_code"
                type="text"
                component={renderField}
                label="Native language title code"
                input={{
                    disabled: "true",
                    placeholder: '',
                }}
            />
            <Field
                name=""
                type="text"
                component={renderField}
                label="नाम"
                input={{

                    placeholder: 'नाम',
                }}
            />
            <Field
                name="native_lang_name"
                type="text"
                component={renderField}
                label="Native language name"
                input={{
                    disabled: "true",
                    placeholder: '',
                }}
            />
            <Field
                name=""
                type="text"
                component={renderField}
                label="बीचको नाम"
                input={{

                    placeholder: 'बीचको नाम',
                }}
            />
            <div className="clearfix"></div>
            <Field
                name=""
                type="text"
                component={renderField}
                label="थर"
                input={{

                    placeholder: 'थर',
                }}
            />
            <hr></hr>
            <div className="clearfix"></div>
            <Field
                name="second_name"
                type="text"
                component={renderField}
                label="second Name"
                input={{

                    placeholder: "seceond name",
                }}
            />
            <hr></hr>
            <Field
                name="customer_short_name"
                type="text"
                component={renderField}
                label="Customer short Name"
                input={{
                    disabled: 'true',
                    placeholder: "",
                }}
            />
            <div className="clearfix"></div>
            <Field
                name="previous_name"
                type="text"
                component={renderField}
                label="Previous Name"
                input={{

                    placeholder: "previous name",
                }}
            />
            <div className="clearfix"></div>
            <div class="col-md-6 col-sm-6 col-xs-12 item form-group">
                <label> &nbsp;&nbsp; Gender</label>


                <div>
                    <Field
                        name="gender"
                        type="radio"
                        component="input"
                    />
                    male
    
                <Field
                        name="gender"
                        type="radio"
                        component="input"
                    />
                    female
                <Field
                        name="gender"
                        type="radio"
                        component="input"
                    />
                    other
                </div>
            </div>
           
            <Field
                name="customer_sex"
                type="text"
                component={renderField}
                label="Customer sex"
                input={{
                    disabled: 'true',
                    placeholder: "",
                }}
            />
             <div className="clearfix"></div>
            <Field
                name="date_of_birth"
                type="text"
                component={renderField}
                label="Date of Birth(AD)"
                input={{
                    
                    placeholder: "Date of birth(AD)",
                }}
            />
            <Field
                name="date_of_birth"
                type="text"
                component={renderField}
                label="Date of Birth(AD)"
                input={{
                    disabled: 'true',
                    placeholder: "Date of birth(AD)",
                }}
            />
             <Field
                name="date_of_birth"
                type="text"
                component={renderField}
                label="Date of Birth(BS)"
                input={{
                    
                    placeholder: "Date of birth(BS)",
                }}
            />
            <Field
                name="date_of_birth"
                type="text"
                component={renderField}
                label="Date of Birth(BS)"
                input={{
                    disabled: 'true',
                    placeholder: "",
                }}
            />
            <Field
                name="age"
                type="text"
                component={renderField}
                label="Age"
                input={{
                    // value:"18",
                    placeholder: "age",
                }}
            />
            <div className="clearfix"></div>
             <Field
                name="minor"
                type="checkbox"
                component={renderField}
                label="minor"
            />
            <Field
                name="customer_minor_flag"
                type="text"
                component={renderField}
                label="customer minor flag"
                input={{
                    disabled:'true',
                    placeholder: "",
                }}
                
            />
        </form>
        </div>
            </div>
            </div>
        </div>
    )
}
export default reduxForm({
    form: 'personalInfoForm'
})(PersonalInfoForm);