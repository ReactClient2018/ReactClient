import React, { Component } from "react";
import { Field, reduxForm, formValueSelector,getFormValues } from 'redux-form'
import NavBar from "../../../components/Screening/MainNavBar.jsx";
import SideNavPage from "../viewKYCRequests.jsx";
import { connect } from 'react-redux'
const renderField = ({
    input,
    label,
    type,
   
    meta: { touched, error, warning }
      }) => (
        <div className="x_content">
        
            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                <label className="control-label col-md-4 col-sm-4 col-xs-4">{label}</label>
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
let PersonalInfoForm = props => {
    const { handleSubmit, pristine, reset, submitting, id} = props
    return (
        <div>
       
        <div className="container-fluid main-container">
           <SideNavPage/>
            <div className="col-md-10 content">
    
                <div className="row">
                <div><h2>Personal information<small>&nbsp;(please fill the personal information)</small></h2></div>
        <form onSubmit={handleSubmit}>
            <div className="col-md-6 col-sm-6 col-xs-12 item form-group"></div>
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
                
            />
            <Field
                name="CBScust_id"
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
            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                <label className="control-label col-md-4 col-sm-4 col-xs-4">Salutation</label>

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
                
            />
            <div className="clearfix"></div>
            <Field
                name=""
                type="text"
                component={renderField}
                label="थर"
                
            />
            <hr></hr>
            <div className="clearfix"></div>
            <Field
                name="second_name"
                type="text"
                component={renderField}
                label="second Name"
               
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
                
            />
            <div className="clearfix"></div>
            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
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
            <hr/>
            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                <label className="control-label col-md-4 col-sm-4 col-xs-4"><b>Additional Information</b></label>
           </div>
                <div className="clearfix"></div>
            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                <label className="control-label col-md-4 col-sm-4 col-xs-4">Customer type</label>
               
                <Field name="customer_type" component="select">
                    <option />
                    <option value="1.1-FORGN DIPTIC &amp; GRANT COM">1.1-FORGN DIPTIC &amp; GRANT COM</option>
                    <option value="1.10A-OTHERS (FRGN) - RESIL">1.10A-OTHERS (FRGN) - RESIL</option>
                    <option value="1.10B-OTHERS (FRGN)-NON RESIL">1.10B-OTHERS (FRGN)-NON RESIL</option>
                    <option value="1.2-PROJECTS BY FOREIGN GOVT.">1.2-PROJECTS BY FOREIGN GOVT.</option>
                    <option value="1.3-INTERL ORG(INCLUDG UNO)">1.3-INTERL ORG(INCLUDG UNO)</option>
                    <option value="1.4.1-OTH INT NON-GOVT ORG RESI">1.4.1-OTH INT NON-GOVT ORG RESI</option>
                    <option value="1.4.2-OTH INT NONGOVT ORG N-RES">1.4.2-OTH INT NONGOVT ORG N-RES</option>
                    <option value="1.5-FOREIGN BANKS">1.5-FOREIGN BANKS</option>
                        <option value="1.6-OTHER FRGN FINANCIAL INST">1.6-OTHER FRGN FINANCIAL INST</option>
                        <option value="1.7-FOREIGN AIRLINES">1.7-FOREIGN AIRLINES</option>
                        <option value="1.8.1-INDIAN PENSION CAMP">1.8.1-INDIAN PENSION CAMP</option>
                        <option value="1.8.2-BRITISH PENSION CAMP">1.8.2-BRITISH PENSION CAMP</option>
                        <option value="1.9.1-FRGN NATIONALS - RESIL">1.9.1-FRGN NATIONALS - RESIL</option
                        ><option value="1.9.2-FRGN NATIONALS - NON RESI">1.9.2-FRGN NATIONALS - NON RESI</option>
                        <option value="1.9.3-FOREIGN NATIONALS-RESIDENTIAL/INDIAN">1.9.3-FOREIGN NATIONALS-RESIDENTIAL/INDIAN</option>
                        <option value="1.9.4-FOREIGN NATIONALS-NON-RESIDENTIAL/INDIAN">1.9.4-FOREIGN NATIONALS-NON-RESIDENTIAL/INDIAN</option
                        ><option value="2-MUNICIPALITY/VDC/DDC">2-MUNICIPALITY/VDC/DDC</option>
                        <option value="3.1.1-FIN INS HAVNG A CLASS LIC">3.1.1-FIN INS HAVNG A CLASS LIC</option>
                        <option value="3.1.2-FIN INS HAVNG B CLASS LIC">3.1.2-FIN INS HAVNG B CLASS LIC</option>
                            <option value="3.1.3-FIN INS HAVNG C CLASS LIC">3.1.3-FIN INS HAVNG C CLASS LIC</option>
                            <option value="3.1.4-FIN INS HAVNG D CLASS LIC">3.1.4-FIN INS HAVNG D CLASS LIC</option>
                            <option value="3.1.5-FIN INST - COOPERATIVES">3.1.5-FIN INST - COOPERATIVES</option>
                                <option value="3.1.6-FIN INSTITUTION - NGOS">3.1.6-FIN INSTITUTION - NGOS</option>
                                <option value="3.1.7-FIN INS POSTAL SAVING BAN">3.1.7-FIN INS POSTAL SAVING BAN</option>
                                <option value="3.1.8-RURAL DEVELOPMENT BANK">3.1.8-RURAL DEVELOPMENT BANK</option>
                                <option value="3.1.9-OTHER FINANCIAL INSTITUTION">3.1.9-OTHER FINANCIAL INSTITUTION</option>
                                <option value="3.2.1-OTHER FIN INST - NIDC">3.2.1-OTHER FIN INST - NIDC</option>
                                <option value="3.2.2-OTH FIN INS-ADB (NON COM)">3.2.2-OTH FIN INS-ADB (NON COM)</option>
                                <option value="3.3.1-FIN INST - INSURANCE COMP">3.3.1-FIN INST - INSURANCE COMP</option>
                                <option value="3.3.2-FIN INST - EPF">3.3.2-FIN INST - EPF</option>
                                <option value="3.3.3-FIN INSTITUTIONS - CIT">3.3.3-FIN INSTITUTIONS - CIT</option>
                                <option value="3.3.4-GRATUITY FUNDS AND RETIREMENT FUNDS">3.3.4-GRATUITY FUNDS AND RETIREMENT FUNDS</option>
                                <option value="3.4.1-RURAL SELF HELP FUND">3.4.1-RURAL SELF HELP FUND</option>
                                <option value="3.4.2-MONEY CHANGERS">3.4.2-MONEY CHANGERS</option>
                                <option value="3.4.3-STOCK BROKERS">3.4.3-STOCK BROKERS</option>
                                <option value="3.4.4-STOCK EXCHANGE">3.4.4-STOCK EXCHANGE</option>
                                <option value="3.4.5-OTHER INTERMEDIARY FINANCIAL UNITS - OTHERS">3.4.5-OTHER INTERMEDIARY FINANCIAL UNITS - OTHERS</option>
                                <option value="3.4.6-REMITTANCE AGENCY">3.4.6-REMITTANCE AGENCY</option>
                                <option value="4.1.1-NON FIN GOVT.INST-INDUSL">4.1.1-NON FIN GOVT.INST-INDUSL</option>
                                <option value="4.1.2-NON FIN GOVT.INST-TRADG">4.1.2-NON FIN GOVT.INST-TRADG</option>
                                <option value="4.1.3-NON FIN GOVT.INST-OTHERS">4.1.3-NON FIN GOVT.INST-OTHERS</option>
                                <option value="4.2.1-NON FIN NON GOVT.INST-IND">4.2.1-NON FIN NON GOVT.INST-IND</option>
                                <option value="4.2.2-NON FIN NON GOVT INST-TRG">4.2.2-NON FIN NON GOVT INST-TRG</option>
                                <option value="4.2.3-NON FIN NON GOVT INST-OTH">4.2.3-NON FIN NON GOVT INST-OTH</option>
                                <option value="5.1-SCHOOLS  CAMPUSES">5.1-SCHOOLS  CAMPUSES</option>
                                <option value="5.2-HOSPITAL  NURSING HOMES">5.2-HOSPITAL  NURSING HOMES</option>
                                <option value="5.3.1-NON PROFI ORG OTHERS RESI">5.3.1-NON PROFI ORG OTHERS RESI</option>
                                <option value="5.3.2-NON PROFI ORG OTHER N-RES">5.3.2-NON PROFI ORG OTHER N-RES</option>
                                <option value="6.1-INDIVIDUALS - RESIDENTIAL">6.1-INDIVIDUALS - RESIDENTIAL</option>
                                <option value="6.2-INDIVIDUALS - NON RESIL">6.2-INDIVIDUALS - NON RESIL</option>
                                <option value="6.2.1-NON RESIDENTIAL - INDIVIDUALS/INDIAN">6.2.1-NON RESIDENTIAL - INDIVIDUALS/INDIAN</option>
                                <option value="6.2.2-NON RESIDENTIAL - INDIVIDUALS / FOREIGNER">6.2.2-NON RESIDENTIAL - INDIVIDUALS / FOREIGNER</option>
                                <option value="7.1-OTHERS - RESIDENTIAL">7.1-OTHERS - RESIDENTIAL</option>
                                    <option value="7.2-OTHERS - NON-RESIDENTIAL">7.2-OTHERS - NON-RESIDENTIAL</option>
                                    <option value="8-CASHIERS"> deposits'="">8-CASHIERS' DEPOSITS</option>
                                    <option value="F1.1-F. DIPLOMATIC AND GRANT COMMISSIONS">F1.1-F. DIPLOMATIC AND GRANT COMMISSIONS</option>
                                    <option value="F1.2-F. PROJECTS UNDERTAKEN BY FOREIGN  GOVT">F1.2-F. PROJECTS UNDERTAKEN BY FOREIGN  GOVT</option>
                                    <option value="F1.3-F. INTL ORGANIZATIONS (INCLUDING UNO)">F1.3-F. INTL ORGANIZATIONS (INCLUDING UNO)</option>
                                    <option value="F1.5-FOREIGN BANKS">F1.5-FOREIGN BANKS</option>
                                    <option value="F1.6-F. OTHER FINANCIAL INSTITUTIONS">F1.6-F. OTHER FINANCIAL INSTITUTIONS</option>
                                    <option value="F1.7-F. FOREIGN AIRLINES">F1.7-F. FOREIGN AIRLINES</option>
                                    <option value="F1101-F.OTHERS RESIDENTIAL">F1101-F.OTHERS RESIDENTIAL</option>
                                    <option value="F1102-F. OTHERS  NON RESIDENTIAL">F1102-F. OTHERS  NON RESIDENTIAL</option>
                                    <option value="F141-F. OTHER INT NGO  RESIDENTIAL">F141-F. OTHER INT NGO  RESIDENTIAL</option>
                                    <option value="F142-F. OTHER INT NGO  NOR RESIDENTIAL">F142-F. OTHER INT NGO  NOR RESIDENTIAL</option>
                                    <option value="F181-F. INDIAN GOVT. PENSION CAMP">F181-F. INDIAN GOVT. PENSION CAMP</option><option value="F182-F. BRITISH GOVT. PENSION CAMP">F182-F. BRITISH GOVT. PENSION CAMP</option><option value="F191-F. NATIONAL RESIDENTIAL">F191-F. NATIONAL RESIDENTIAL</option><option value="F192-F. NATIONAL NON RESIDENTIAL">F192-F. NATIONAL NON RESIDENTIAL</option><option value="F193-F. NATIONAL RESIDENTIAL/INDIAN">F193-F. NATIONAL RESIDENTIAL/INDIAN</option><option value="F194-F. NATIONAL NON RESIDENTIAL/INDIAN">F194-F. NATIONAL NON RESIDENTIAL/INDIAN</option><option value="F2.1-DOMESTIC INST &amp; CO.  &quot;A&quot; CLASS LICENSED INSTITUTIO">F2.1-DOMESTIC INST &amp; CO.  "A" CLASS LICENSED INSTITUTIO</option><option value="F2.2-DOMESTIC INST &amp; CO. RESIDENTIAL">F2.2-DOMESTIC INST &amp; CO. RESIDENTIAL</option><option value="F2.3-DOMESTIC INST &amp; CO. NON-RESIDENTIAL">F2.3-DOMESTIC INST &amp; CO. NON-RESIDENTIAL</option><option value="F3.1-F. INDIVIDUALS RESIDENTIAL">F3.1-F. INDIVIDUALS RESIDENTIAL</option><option value="F3.2-F. INDIVIDUALS NON RESIDENTIAL">F3.2-F. INDIVIDUALS NON RESIDENTIAL</option><option value="NA-NOT APPLICABLE">NA-NOT APPLICABLE</option>
                    <option value="ZZ-IMPERSONAL ACCOUNTS">ZZ-IMPERSONAL ACCOUNTS</option>
                </Field>
                {/* <input className="form-control col-sm-8 col-md-8 col-xs-8 ui-autocomplete-input" type="text" name="customer_type" id="customer-type" placeholder="Select customer type" onFocus="this.select()"  autoComplete="off"/> */}
            </div>
            
            <Field
            name="type_code"
            type="text"
            component={renderField}
            label="Type Code"
            input={{
                disabled:'true',
                placeholder:''
            }}/>                        
            
            <Field
            name="customer_group"
            type="text"
            component={renderField}
            label="Customer group"
            input={{
                placeholder:'customer group',
                disabled:"true"      
            }}/>
            
             <Field
            name="customer_group"
            type="text"
            component={renderField}
            label="Customer group"
           />
            <div className="clearfix"></div>
            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
											<label id="lab-customer-constitution" className="control-label col-md-4 col-sm-4 col-xs-4" for="customer-constitution">Customer constitution </label>
											<div className="col-md-8 col-sm-8 col-sx-8">
											<Field	component="select" name="customer_constitution">
													<option value="">Select customer constitution</option>
													<option style={{backgroundColor: '#aaa'}}></option>
												<option value="ASSOCIATION">ASSOCIATION</option>
                                                <option value="CLUB">CLUB</option>
                                                <option value="CORPORATION">CORPORATION</option>
                                                <option value="INDIVIDUAL JOINT">INDIVIDUAL JOINT</option>
                                                <option value="INDIVIDUAL">INDIVIDUAL</option>
                                                <option value="INTERNATIONAL NON GOVERNMENT ORGANIZATION">INTERNATIONAL NON GOVERNMENT ORGANIZATION</option>
                                                <option value="NON GOVERNMENT ORGANIZATION">NON GOVERNMENT ORGANIZATION</option>
                                                <option value="OTHERS">OTHERS</option><option value="PARTNERSHIP">PARTNERSHIP</option>
                                                <option value="PRIVATE LTD.">PRIVATE LTD.</option> 
                                                <option value="PROPRIETORSHIP">PROPRIETORSHIP</option>
                                                <option value="PUBLIC LTD.">PUBLIC LTD.</option>
                                                <option value="SCHOOL/COLLEGE">SCHOOL/COLLEGE</option>
                                                <option value="TRUST">TRUST</option>
                                                ></Field>
											</div>
										</div>
    <Field
            name="customer_constitution"
            type="text"
            component={renderField}
            label="Customer constitution"
            input={{
                placeholder:'',
                disabled:'true'
                
            }}/>
            
            
            <Field
            name="customer_community"
            type="text"
            component={renderField}
            label="Customer community"
            />
            <Field
            name="customer_community_code"
            type="text"
            component={renderField}
            label="Customer community code"
            input={{
                placeholder: '',
                disabled:'true'
                
                
            }}/>
            <Field
            name="customer_religion"
            type="text"
            component={renderField}
            label="Customer religion"
            />
            <Field
            name="customer_caste_Code"
            type="text"
            component={renderField}
            label="Customer caste code"
            input={{
                placeholder:'',
                disabled:'true'
                
                
            }}/>
            <Field
            name="customer_employee_id"
            type="text"
            component={renderField}
            label="Customer employee ID"
            />
            <Field
            name="customer_employee_id"
            type="text"
            component={renderField}
            label="Customer employee ID"
            input={{
                placeholder:'',
                disabled:'true'
                
            }}/>
            <Field
            name="customer_status_code"
            type="text"
            component={renderField}
            label="Customer status code"
            input={{
                placeholder:'customer status code',
                
                
            }}/>
            <Field
            name="customer_status_code"
            type="text"
            component={renderField}
            label="Customer status code"
            input={{
                placeholder:'customer status code',
                disabled:'true'
                
            }}/>
            <Field
            name="non_resident_external"
            type="radio"
            component={renderField}
            label="Non-resident external"
            />
            <Field
            name="customer_nre_flag"
            type="text"
            component={renderField}
            label="Customer NRE flag"
            input={{
                placeholder:'',
                disabled:'true'
                
                
            }}/>
            <Field
            name="customer_open_date"
            type="date"
            component={renderField}
            label="Customer open date"
            />
             <Field
            name="customer_open_date"
            type="text"
            component={renderField}
            label="Customer open date"
            input={{
                disabled:'true',
              
            }}/>
            <Field
            name="record_created_by"
            type="text"
            component={renderField}
            label="Record Created by"
           />
            <div className="clearfix"></div>
            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
            <button className="control-label col-md-4 col-sm-4 col-xs-4" style={{backgroundColor:'lightblue'}} type="submit">Proceed</button>
            </div>
        </form>
        </div>
            </div>
            </div>
        </div>
    )
}



PersonalInfoForm = reduxForm({
  form: 'personalInfoForm'  // a unique identifier for this form
})(PersonalInfoForm)

// Decorate with connect to read form values
const selector = formValueSelector('personalInfoForm') // <-- same as form name
PersonalInfoForm = connect(
  state => {
   
    const values=getFormValues("personalInfoForm")(state)
    console.log(values);
    if(values!==null){
      //  alert(JSON.stringify(values))
      console.log(JSON.stringify(values));
    }
    return {
        
    }
   
  }
)(PersonalInfoForm)

export default PersonalInfoForm