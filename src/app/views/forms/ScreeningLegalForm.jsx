import React from "react";
import {UserActionCreators} from "actions";
import PropTypes from "prop-types";
import {History}  from 'utils';
import {connect} from "react-redux";
import { reduxForm, Field } from 'redux-form';
import {ConnectedCreateUserForm} from "../forms/UserForm";


class ScreeningLegalForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            purpose_of_screening: "",
            accounts_l_sub_type: "",
            kycl_id: "",
            cust_id: "",
            date_of_establishment: "",
            date_of_establishment_bs: "",
            name_of_institution: "",
            registration_no: "",
            type_of_industry: "",
            ls_name: "",
            contact_number: "",
            mobile_number: "",
            email_id: "",
            find_match_index: "",
            has_kyc: "",
            has_cust_id: "",
            country_of_issue: "",
            zone: "",
            province: "",
            state: "",
            district: "",
            mn_vdc: "",
            ward_no: "",
            pan_number: "",
            notes: "",
            branch_sol_id:"",
            repair_screening_l_request_id:""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    
    handleDateChange=(event)=>{
        var dateFormat=event.target.value;
        console.log(dateFormat);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = event => {
     
        localStorage.removeItem("screening_l_request_data");
        localStorage.removeItem("screening_n_related_person");
        localStorage.removeItem("screening_n_related_entity");
        localStorage.removeItem("screening_n_attachment");
        var screening_l_request_data = [];

        screening_l_request_data.push(this.state);
        localStorage.setItem("screening_l_request_data", JSON.stringify(screening_l_request_data));  
   
        History.push("./screeningLRequest")
    };
    blackColor = {
        color: "black"
    };
    handleSignIn = values => {
        alert(JSON.stringify(values));
        // History.push("/screeningNaturalReview");
        console.log(values);
    };
    getValidationState=()=>{
        
    }

    render() {
        // const { handleSubmit } = this.props;
        const {
            handleSubmit,
            pristine,
            reset,
            submitting,
            classes,
            screening
        } = this.props;
        return (
           
            
            // <SignInForm onSubmit={this.handleSignIn} />
            <form onSubmit={this.handleSubmit.bind(this)}>
                <hr/>
                <div
                    className='row'
                    style={{
                    padding: '5px'
                }}>
                    <div className="col-md-4 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            Purpose of Screening:
                        </label>
                        <div className="col-md-8 col-sm-8 col-xs-8">
                            <select
                                name="purpose_of_screening"
                                value={this.state.purpose_of_screening}
                                onChange={this.handleChange}>
                                <option>Select purpose</option>
                                <option value="Apply for loan">Apply for loan</option>
                                <option value="Inward Remittance">Inward Remittance</option>
                                <option value="Money Exchange">Money Exchange</option>
                                <option value="Open new account">Open new account</option>
                                <option value="Outward Remittance">Outward Remittance</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                    </div>
                  
                    <div className="col-md-4 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-md-4 col-xs-4" style={this.blackColor}>
                            Customer Id
                        </label>
                        <input
                            type="text"
                            name="cust_id"
                            placeholder="Customer Id"
                            value={this.state.cust_id}
                            onChange={this.handleChange}/>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-md-4 col-xs-4" style={this.blackColor}>
                            Kyc Id
                        </label>
                        <input
                            type="text"
                            name="kycl_id"
                            placeholder="kycl id"
                            value={this.state.kycl_id}
                            onChange={this.handleChange}/>
                    </div>
                </div>
                <hr/>

                <div className="clearfix"/>
                <div
                    className="row"
                    style={{
                    padding: '5px'
                }}>
               
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            Name of institution
                        </label>
                        <input
                            type="text"
                            name="name_of_institution"
                            placeholder="Name of Institution"
                            value={this.state.name_of_institution}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                        नाम
                        </label>
                        <input
                            type="text"
                            name="ls_name"
                            placeholder="नाम"
                            value={this.state.ls_name}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            Date of Establishment:
                        </label>
                        <input
                            type="date"
                            name="date_of_establishment"
                            placeholder="Date of establishment"
                            value={this.state.date_of_establishment}
                            onChange={this.handleDateChange}/>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            Registration number
                        </label>
                        <input
                            type="text"
                            name="registration_no"
                            placeholder="Registration number"
                            value={this.state.registration_no}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                           Type of industry
                        </label>
                        <input
                            type="text"
                            name="type_of_industry"
                            placeholder="Type of industry"
                            value={this.state.type_of_industry}
                            onChange={this.handleChange}/>
                    </div>

                    
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            Country of Issue:
                        </label>
                        <input
                            type="text"
                            name="country_of_issue"
                            placeholder="Country"
                            value={this.state.country_of_issue}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            Province:
                        </label>
                        <input
                            type="text"
                            name="province"
                            placeholder="Province"
                            value={this.state.province}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            Zone:
                        </label>
                        <input
                            type="text"
                            name="zone"
                            placeholder="Zone"
                            value={this.state.zone}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            District:
                        </label>
                        <input
                            type="text"
                            name="district"
                            placeholder="District"
                            value={this.state.district}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            MN/VDC/City:
                        </label>
                        <input
                            type="text"
                            placeholder="MN/VDC/City"
                            name="mn_vdc"
                            value={this.state.mn_vdc}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            Ward no:
                        </label>
                        <input
                            type="text"
                            name="ward_no"
                            placeholder="Ward no."
                            value={this.state.ward_no}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            Pan no:
                        </label>
                        <input
                            type="text"
                            name="pan_number"
                            placeholder="Pan Number"
                            value={this.state.pan_number}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            Contact no:
                        </label>
                        <input
                            type="text"
                            name="contact_number"
                            placeholder="Contact Number"
                            value={this.state.contact_number}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            Email Id:
                        </label>
                        <input
                            type="text"
                            name="email_id"
                            placeholder="Email Id"
                            value={this.state.email_id}
                            onChange={this.handleChange}/>
                    </div>
                    
                </div>
                <hr/>

                <div className="clearfix"/>
                <div className="col-md-12 col-sm-12 col-xs-12 item form-group">
                    <label className="control-label col-md-2 col-sm-2 col-xs-2" style={this.blackColor}>Notes</label>
                    <div className="col-md-10 col-sm-10 col-xs-10">
                        <textarea
                            className="form-control col-sm-10 col-md-10 col-xs-10 entity-track-changes0x"
                            id="related-entity-notes0x"
                            name="notes"
                            placeholder="General comments"
                            value={this.state.notes}
                            onChange={this.handleChange}
                            rows="2"></textarea>
                    </div>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12 item form-group">
                    <div className="col-md-2 col-sm-2 col-xs-2 item form-group">
                        <label className="control-label" style={this.blackColor}>Match level<span >*</span>
                        </label>
                    </div>
                    
                </div>

                <div className="clearfix"></div>
                <hr/>

                <button className="btn btn-primary" type="submit" color="primary">
                    Proceed.
                </button>
            </form>
        );
    }
}

ScreeningLegalForm.propTypes = {
    added: PropTypes.bool,
    onSubmitScreening: PropTypes.func.isRequired
};

const mapStateToProps = state => ({screening: state.screening});

const mapDispatchToProps = dispatch => ({
    onSubmitScreening: values => dispatch(UserActionCreators.addUser(values)),
    onClose: () => dispatch(UserActionCreators.close())
});
export default connect(mapStateToProps, mapDispatchToProps)(ScreeningLegalForm);

