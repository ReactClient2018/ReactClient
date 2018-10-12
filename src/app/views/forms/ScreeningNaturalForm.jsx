import React from "react";
import {UserActionCreators} from "actions";
import PropTypes from "prop-types";
import {History}  from 'utils';
import {connect} from "react-redux";
import { reduxForm, Field } from 'redux-form';
import {ConnectedCreateUserForm} from "../forms/UserForm";


class ScreeningNaturalForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            purpose_of_screening_n: "",
            customer_type: "",
            salutation: "",
            first_name: "",
            middle_name: "",
            last_name: "",
            lsf_name: "",
            lsm_name: "",
            lsl_name: "",
            sex: "",
            mobile_number: "",
            email: "",
            date_of_birth: "",
            primary_identification_document_type: "",
            primary_identification_document_no: "",
            country_of_issue: "",
            zone: "",
            province: "",
            state: "",
            district: "",
            mn_vdc: "",
            ward_no: "",
            pan_number: "",
            notes: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
     
        localStorage.removeItem("screening_n_request_data");
        localStorage.removeItem("screening_n_related_person");
        localStorage.removeItem("screening_n_related_entity");
        var screening_n_request_data = [];

        screening_n_request_data.push(this.state);
        localStorage.setItem("screening_n_request_data", JSON.stringify(screening_n_request_data));  
        // var json = {
        //     screening_n_request_data: this.state
        // };
        // const screening_json = JSON.stringify(json);
        // alert(JSON.stringify(screening_json));
        // this.props.onSubmitScreening(screening_json);
        History.push("./screeningRequest")
    };
    blackColor = {
        color: "black"
    };
    handleSignIn = values => {
        alert(JSON.stringify(values));
        History.push("/screeningNaturalReview");
        console.log(values);
    };

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
                                name="purpose_of_screening_n"
                                value={this.state.purpose_of_screening_n}
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
                            Customer type
                        </label>
                        <input
                            type="text"
                            name="customer_type"
                            placeholder="Primary account Holder"
                            value={this.state.customer_type}
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
                        <label
                            className="control-label col-md-4 col-sm-4 col-xs-4 "
                            style={this.blackColor}>
                            Salutation
                        </label>
                        <div>
                            <select
                                name="salutation"
                                value={this.state.salutation}
                                onChange={this.handleChange}>
                                <option>Select salutation</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Dr.">Dr.</option>
                                <option value="Er.">Er.</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            First name
                        </label>
                        <input
                            type="text"
                            name="first_name"
                            value={this.state.first_name}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            Middle name
                        </label>
                        <input
                            type="text"
                            name="middle_name"
                            value={this.state.middle_name}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            Last name
                        </label>
                        <input
                            type="text"
                            name="last_name"
                            value={this.state.last_name}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            नाम
                        </label>
                        <input
                            type="text"
                            name="lsf_name"
                            value={this.state.lsf_name}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            बीचकाे &nbsp; नाम
                        </label>
                        <input
                            type="text"
                            name="lsm_name"
                            value={this.state.lsm_name}
                            onChange={this.handleChange}/>
                    </div>

                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            थर
                        </label>
                        <input
                            type="text"
                            name="lsl_name"
                            value={this.state.lsl_name}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            Gender
                        </label>
                        <div>
                            <select name="sex" value={this.state.sex} onChange={this.handleChange}>
                                <option>Choose gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            Mobile no.
                        </label>
                        <input
                            type="text"
                            name="mobile_number"
                            value={this.state.mobile_number}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="clearfix"/>

                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            Email ID
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            Date of birth:
                        </label>
                        <input
                            type="text"
                            name="date_of_birth"
                            value={this.state.date_of_birth}
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
                            Primary identification document type:
                        </label>
                        <div>
                            <select
                                name="primary_identification_document_type"
                                value={this.state.primary_identification_document_type}
                                onChange={this.handleChange}>
                                <option>Choose Document type.</option>
                                <option value="Citizenship">Citizenship</option>
                                <option value="Passport">Passport</option>
                                <option value="Driving License">Driving License</option>
                                <option value="Employee Card">Employee Card</option>
                                <option value="Aadhar Card">Aaadhar Card</option>
                            </select>
                        </div>
                    </div>
                    <div className="clearfix"/>
                    <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                            Primary identification document no:
                        </label>
                        <input
                            type="text"
                            name="primary_identification_document_no"
                            value={this.state.primary_identification_document_no}
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
                            value={this.state.pan_number}
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

ScreeningNaturalForm.propTypes = {
    added: PropTypes.bool,
    onSubmitScreening: PropTypes.func.isRequired
};

const mapStateToProps = state => ({screening: state.screening});

const mapDispatchToProps = dispatch => ({
    onSubmitScreening: values => dispatch(UserActionCreators.addUser(values)),
    onClose: () => dispatch(UserActionCreators.close())
});
export default connect(mapStateToProps, mapDispatchToProps)(ScreeningNaturalForm);

