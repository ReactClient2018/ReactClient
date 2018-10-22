import React, {Component} from 'react';
import ScreeningTabTitle from '../screeningnatural/ScreeningTabTitle.jsx';
import {History} from 'utils';
class ScreeningRelatedEntityEdit extends Component {
    constructor(props) {
        super(props);
        var data = JSON.parse(localStorage.getItem('screening_n_related_entity'));
        var dat =data[localStorage.getItem('screening_related_entity_index')];
        this.state = dat;

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.name);
    };
    handleProceed = () => {
        var screening_n_related_entity = localStorage.getItem("screening_n_related_entity");

        screening_n_related_entity = screening_n_related_entity ? JSON.parse(screening_n_related_entity):[];
        screening_n_related_entity.splice(localStorage.getItem('screening_related_entity_index'),1);
        screening_n_related_entity.push(this.state);
      
        localStorage.setItem("screening_n_related_entity", JSON.stringify(screening_n_related_entity));
        History.push("/screeningNaturalReview");

    }
    handleReset=()=>{
        this.setState({
            accounts_l_sub_type: " ",
            kycl_id: " ",
            cust_id: " ",
            name_of_institution: " ",
            ls_name: " ",
            date_of_establishment: " ",
            registration_no: " ",
            type_of_industry: " ",
            country_of_issue: " ",
            zone: " ",
            district: " ",
            mn_vdc: " ",
            province: " ",
            ward_no: " ",
            pan_number: " ",
            contact_number: " ",
            email_id: " ",
            notes: " ",
            find_match_index: " ",
            has_kyc: false,
            has_cust_id: true,
            branch_sol_id: " ",
            date_of_establishment_bs:" ",
            repair_screening_l_request_id: " ",
            
        });
    }
 
    render() {
        const divStyle = {
            backgroundColor: 'white',
            overflowY: 'auto',
            width: '100%',
            height: '600px',
            position: 'relative'
        };
        return (
            <div style={divStyle}>
                <ScreeningTabTitle handleResetButton={this.handleReset}/>

                <div style={{
                    backgroundColor: 'white'
                }}>
                    <form id="related-entity-form0x">

                        {/* <!-- for repair --> */}
                        <input
                            type="hidden"
                            name="repair_screening_l_request_id"
                            id="related-entity-screening-id0x"/>
                        <div className="col-md-6 col-sm-12 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-sm-4 col-sx-4 "
                                for="related-accounts-l-sub-type0x">Customer type
                                <span
                                    style={{
                                    color: "#FF0000"
                                }}>*</span>
                            </label>
                            <div className="col-md-8 col-sm-8 col-sx-8">
                                <select
                                    className="form-control col-sm-8 col-md-8 col-xs-8 accounts-l-sub-type-entity entity-track-changes0x"
                                    id="related-accounts-l-sub-type-entity0x"
                                    name="accounts_l_sub_type"
                                    required="required"
                                    onChange={this.handleChange}
                                    value={this.state.accounts_l_sub_type}>
                                    <option value="">Select person type</option>
                                    <option value='loan'>loan</option>
                                    <option value='credit'>credit</option>
                                </select>
                            </div>

                          

                        </div>

                        <div>
                            <div className="col-md-4 col-sm-6 col-xs-12 item form-group">
                               
                            </div>
                            <div className="clearfix"></div>

                            <div className="col-md-6 col-sm-12 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-4 col-sm-4 col-xs-12"
                                    for="related-name-of-institution0x"
                                    required="required">Name Of Institution
                                    <span
                                        style={{
                                        color: '#FF0000'
                                    }}>*
                                    </span>
                                </label>
                                <div className="col-md-8 col-sm-8 col-xs-12">
                                    <input
                                        className="form-control col-sm-8 col-md-7 col-xs-12 entity-track-changes0x"
                                        id="related-name-of-institution0x"
                                        required="required"
                                        name="name_of_institution"
                                        placeholder="Name of Institution"
                                        type="text"
                                        path="name-of-institution"
                                        oninvalid="setCustomValidity('Name of insititution is required')"
                                        oninput="setCustomValidity('')"
                                        onChange={this.handleChange}
                                        value={this.state.name_of_institution}/>
                                </div>
                            </div>

                           

                            <div className="clearfix"></div>

                            <div className="col-md-6 col-sm-12 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-4 col-sm-4 col-xs-12"
                                    for="related-entity-ls-name0x">नाम
                                </label>
                                <div className="col-md-8 col-sm-8 col-xs-12">
                                    <input
                                        className="form-control col-sm-8 col-md-7 col-xs-12 entity-track-changes0x"
                                        id="related-entity-ls-name0x"
                                        name="ls_name"
                                        placeholder="नाम"
                                        lang="ne"
                                        type="text"
                                        path="ls-name"
                                        onChange={this.handleChange}
                                        value={this.state.ls_name}/>
                                </div>
                            </div>

                            <div className="clearfix"></div>

                            <div className="col-md-6 col-sm-12 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-4 col-sm-4 col-xs-12"
                                    for="related-entity-date-of-establishment0x">Date of establishment
                                </label>
                                <div className="col-md-8 col-sm-8 col-xs-12 related-date-of-establishment">
                                    <input
                                        className="form-control col-sm-8 col-md-7 col-xs-12 entity-track-changes0x related-date-of-establishment"
                                        id="related-entity-date-of-establishment0x"
                                        name="date_of_establishment"
                                        placeholder="Date of establishment (AD)"
                                        type="text"
                                        path="date-of-establishment"
                                        onChange={this.handleChange}
                                        value={this.state.date_of_establishment}/>
                                </div>

                            </div>

                            {/* <!-- nepali date --> */}
                            <div className="clearfix"></div>
                            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-4 col-sm-4 col-xs-4"
                                    for="related-np-date-of-establishment0x">Date of establishment (BS)</label>
                                <div className="col-md-8 col-sm-8 col-xs-8">
                                    <input
                                        className="form-control col-sm-8 col-md-8 col-xs-8 track-changes"
                                        id="related-np-date-of-establishment0x"
                                        name="date_of_establishment_bs"
                                        placeholder="YYYY-MM-DD(eg. 2072-05-02)"
                                        type="text"
                                        onChange={this.handleChange}
                                        value={this.state.date_of_establishment_bs}/>
                                </div>
                            </div>
                            {/* <!-- end of nepali date --> */}

                            <div className="clearfix"></div>

                            <div className="col-md-6 col-sm-12 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-4 col-sm-4 col-xs-12"
                                    for="related-entity-registration-number0x">
                                    Registration Number {/* <!-- <span style='color: #FF0000;'>* </span> --> */}
                                </label>
                                <div className="col-md-8 col-sm-8 col-xs-12">
                                    <input
                                        className="form-control col-sm-8 col-md-7 col-xs-12 entity-track-changes0x"
                                        id="related-entity-registration-number0x"
                                        name="registration_no"
                                        placeholder="Registration Number"
                                        type="text"
                                        path="registration-no"
                                        oninvalid="setCustomValidity('Registration number is required')"
                                        oninput="setCustomValidity('')"
                                        onChange={this.handleChange}
                                        value={this.state.registration_no}/>
                                </div>
                            </div>

                           

                            <div className="clearfix"></div>

                            <div className="col-md-6 col-sm-12 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-4 col-sm-4 col-xs-12"
                                    for="related-entity-type-of-industry0x">
                                    Type of industry {/* <!-- <span
											style='color: #FF0000;'>*</span> --> */}
                                </label>
                                <div className="col-md-8 col-sm-8 col-xs-12">
                                    <select
                                        className="form-control col-sm-8 col-md-7 col-xs-12 industry-type entity-track-changes0x"
                                        id="related-entity-type-of-industry0x"
                                        path="industryType">
                                        <option value='software'>software</option>
                                        <option
                                            disabled
                                            style={{
                                            backgroundColor: '#aaa'
                                        }}></option>
                                    </select>
                                  
                                </div>
                            </div>
                           
                            <div className="clearfix"></div>

                            <div className="col-md-6 col-sm-12 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-4 col-sm-4 col-xs-12"
                                    for="related-entity-country-of-issue0x">
                                    Country {/* <!-- <span
                                            style={{color: '#FF0000'}}>*</span> --> */}
                                </label>
                                <div className="col-md-8 col-sm-8 col-xs-12">
                                    <select
                                        className="form-control col-sm-8 col-md-7 col-xs-12 country entity-track-changes0x"
                                        id="related-entity-country-of-issue0x"
                                        placeholder="Country of Issue"
                                        path="country">
                                        <option value="Nepal">Nepal</option>

                                    </select>

                                    
                                </div>
                            </div>
                            

                            <div className="clearfix"></div>
                            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-4 col-sm-4 col-xs-4"
                                    for="related-entity-province0x">
                                    Province</label>
                                <div className="col-md-8 col-sm-8 col-xs-8">
                                    <input
                                        className="form-control col-sm-8 col-md-8 col-xs-8 entity-track-changes0x"
                                        id="related-entity-province0x"
                                        name="province"
                                        placeholder="Province"
                                        type="text"
                                        value={this.state.province}/>
                                </div>
                            </div>

                            <div className="clearfix"></div>

                            <div className="col-md-6 col-sm-12 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-4 col-sm-4 col-xs-12"
                                    for="related-entity-zone0x">
                                    Zone
                                </label>
                                <div className="col-md-8 col-sm-8 col-xs-12">
                                  
                                    <select
                                        className="form-control col-sm-8 col-md-8 col-xs-8  entity-track-changes0x rel-entity-zone"
                                        id="related-entity-zone0x"
                                        placeholder="Zone">
                                        <option value="Bagmati">Bagmati</option>
                                    </select>

                                  
                                </div>
                            </div>
                        

                           
                            <div className="clearfix"></div>

                            <div className="col-md-6 col-sm-12 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-4 col-sm-4 col-xs-12"
                                    for="related-entity-district0x">
                                    District
                                </label>
                                <div className="col-md-8 col-sm-8 col-xs-12">
                                    {/* <!-- <input
												className="form-control col-sm-8 col-md-7 col-xs-12 entity-track-changes0x"
												id="related-district0x" name="district"
												placeholder="District" type="text" path="district" /> --> */}
                                    <select
                                        className="form-control col-sm-8 col-md-8 col-xs-8 entity-track-changes0x rel-entity-district"
                                        id="related-entity-district0x"
                                        placeholder="District">
                                        <option value="Kathmandu">Kathmandu</option>
                                    </select>

                                </div>
                            </div>
                          

                            <div className="clearfix"></div>

                            <div className="col-md-6 col-sm-12 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-4 col-sm-4 col-xs-12"
                                    for="related-entity-mn-vdc0x">
                                    MN/VDC
                                </label>
                                <div className="col-md-8 col-sm-8 col-xs-12">
                                    <input
                                        className="form-control col-sm-8 col-md-7 col-xs-12 entity-track-changes0x"
                                        id="related-entity-mn-vdc0x"
                                        name="mn_vdc"
                                        placeholder="MN/VDC"
                                        type="text"
                                        path="mn-vdc"
                                        onChange={this.handleChange}
                                        value={this.state.mn_vdc}/>
                                </div>
                            </div>

                           

                            <div className="clearfix"></div>

                            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-4 col-sm-4 col-xs-4"
                                    for="related-entity-ward-no0x">Ward no.</label>
                                <div className="col-md-8 col-sm-8 col-xs-8">
                                    <input
                                        className="form-control col-sm-8 col-md-8 col-xs-8 entity-track-changes0x"
                                        id="related-entity-ward-no0x"
                                        name="ward_no"
                                        placeholder="Ward no."
                                        type="text"
                                        onChange={this.handleChange}
                                        value={this.state.ward_no}/>
                                </div>
                            </div>

                            <div className="clearfix"></div>

                            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-4 col-sm-4 col-xs-4"
                                    for="related-entity-pan-number0x">PAN no.</label>
                                <div className="col-md-8 col-sm-8 col-xs-8">
                                    <input
                                        className="form-control col-sm-8 col-md-8 col-xs-8 entity-track-changes0x"
                                        id="related-entity-pan-number0x"
                                        name="pan_number"
                                        placeholder="PAN number"
                                        type="number"
                                        maxlength="15"
                                        onChange={this.handleChange}
                                        value={this.state.pan_number}/>
                                </div>
                            </div>

                            <div className="clearfix"></div>

                            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-4 col-sm-4 col-xs-4"
                                    for="related-entity-contact-no0x">Contact no.</label>
                                <div className="col-md-8 col-sm-8 col-xs-8">
                                    <input
                                        className="form-control col-sm-8 col-md-8 col-xs-8 entity-track-changes0x"
                                        id="related-entity-contact-no0x"
                                        name="contact_number"
                                        placeholder="Contact number"
                                        type="text"
                                        onChange={this.handleChange}
                                        value={this.state.contact_number}/>
                                </div>
                            </div>

                            <div className="clearfix"></div>

                            <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-4 col-sm-4 col-xs-4"
                                    for="related-entity-email-id0x">Email ID</label>
                                <div className="col-md-8 col-sm-8 col-xs-8">
                                    <input
                                        className="form-control col-sm-8 col-md-8 col-xs-8 entity-track-changes0x"
                                        id="related-entity-email-id0x"
                                        name="email_id"
                                        placeholder="Email ID"
                                        type="email"
                                        onChange={this.handleChange}
                                        value={this.state.email_id}/>
                                </div>
                            </div>

                            <div className="clearfix"></div>

                            <div className="col-md-12 col-sm-12 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-2 col-sm-2 col-xs-2"
                                    for="related-entity-notes0x">Notes</label>
                                <div className="col-md-10 col-sm-10 col-xs-10">
                                    <textarea
                                        className="form-control col-sm-10 col-md-10 col-xs-10 entity-track-changes0x"
                                        id="related-entity-notes0x"
                                        name="notes"
                                        placeholder="General comments"
                                        rows="2"
                                        value={this.state.notes}></textarea>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 col-xs-12 item form-group">
                                <div className="col-md-2 col-sm-2 col-xs-2 item form-group">
                                    <label className="control-label">Match level<span style={{
                color: '#FF0000'
            }}>*</span>
                                    </label>
                                </div>
                                <div className="col-md-8" id="related-radioheads0x">
                                    <input
                                        type="radio"
                                        name="find_match_index"
                                        required="required"
                                        id="related-low0x"
                                        value="0.2"
                                        className="entity-track-changes0x"/>
                                    <label className="control-label col-md-2" for="related-low0x">Low</label>
                                    <input
                                        type="radio"
                                        name="find_match_index"
                                        checked="checked"
                                        id="related-medium0x"
                                        value="0.5"
                                        className="entity-track-changes0x"/>
                                    <label className="control-label col-md-3" for="related-medium0x">Medium</label>
                                    <input
                                        type="radio"
                                        name="find_match_index"
                                        id="related-high0x"
                                        value="0.7"
                                        className="entity-track-changes0x"/>
                                    <label className="control-label col-md-3" for="related-high0x">High</label>
                                </div>
                            </div>

                            <div className="clearfix"></div>
                            <hr/>
                        </div>

                    </form>
                    <form id="related-entity-match-info0x"></form>
                    <div id="navigation">
                        <div id="next-navigation">
                            <button
                                className="btn btn-primary screening-n-related-entity-proceed-btn"
                                name="next"
                                type="button"
                                id="screening-n-related-entity-proceed-btn0x"
                                onClick={this.handleProceed}>Proceed</button>
                        </div>
                    </div>
                    <div className="clearfix"></div>

                </div>
            </div>

        );
    }

}


export default ScreeningRelatedEntityEdit;