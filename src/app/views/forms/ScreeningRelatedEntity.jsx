import React, { Component } from 'react';
import ScreeningTabTitle from '../screeningnatural/ScreeningTabTitle.jsx';
import NavBar from "../../components/Screening/MainNavBar.jsx";
import "./css/screeningRelatedEntity.css";
import { History } from 'utils';
import { FormControl, ControlLabel, HelpBlock, FormGroup, ButtonToolbar } from 'react-bootstrap';
var getNepaliNumber = require('get-nepali-number');
var getNepDayOfWeek = require('get-nepday-of-week');

class ScreeningRelatedEntity extends Component {
    constructor(props) {
        super(props);
        this.state = {

            accounts_l_sub_type: "loan",
            kycl_id: "2343",
            cust_id: "23",
            name_of_institution: "wrc",
            ls_name: "virgo",
            date_of_establishment: "",
            registration_no: "23244",
            type_of_industry: "IT",
            country_of_issue: "Nepal",
            zone: "Dhaulagiri",
            district: "kaski",
            mn_vdc: "Lamachaur",
            province: "4",
            ward_no: "3",
            pan_number: "24434",
            contact_number: "23598765",
            email_id: "dfafdf@gmail.com",
            notes: "Better way to make future",
            find_match_index: "23",
            has_kyc: false,
            has_cust_id: true,
            branch_sol_id: "13244",
            date_of_establishment_bs: "",
            repair_screening_l_request_id: 232,


        }


    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.name);
    };
    handleADDateChange = (e) => {
        var BSDate = (new dateConverter(e.target.value)).ad2bs(e.target.value);
        console.log(e.target.value);
        isValidDate(e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
            date_of_establishment_bs: BSDate,

        })
    }
    handleBSDateChange = (e) => {
        var date=e.target.value;
        this.setState({
            [e.target.name]: e.target.value,
            // date_of_establishment: ADDate,

        });
       //if (isValidDate(date)) 
        {
            var ADDate = (new dateConverter(date)).bs2ad(date);
            this.setState({
                date_of_establishment: ADDate,
            })
        }

    }
    handleProceed = () => {
        var screening_n_related_entity = localStorage.getItem("screening_n_related_entity");

        screening_n_related_entity = screening_n_related_entity ? JSON.parse(screening_n_related_entity) : [];
        screening_n_related_entity.push(this.state);

        localStorage.setItem("screening_n_related_entity", JSON.stringify(screening_n_related_entity));
        if (localStorage.getItem("screening") == "natural") {
            History.push("/screeningNaturalReview");
        } else {
            History.push("/screeningLegalReview");
        }

    }
    handleReset = () => {
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
            date_of_establishment_bs: " ",
            repair_screening_l_request_id: " ",

        });
    }
    render() {
        // const {
        //     handleSubmit,
        //     pristine,
        //     reset,
        //     submitting,
        //     classes,
        //     relatedEntity
        // } = this.props;
        const divStyle = {
            backgroundColor: 'white',
            overflowY: 'auto',
            width: '100%',
            height: '600px',
            position: 'relative'
        };
        return (
            <div>
                <NavBar/>
            <div style={divStyle}>
                <ScreeningTabTitle handleResetButton={this.handleReset} />


                <div >

                    <form id="related-entity-form0x">

                        {/* <!-- for repair --> */}
                        <input
                            type="hidden"
                            name="repair_screening_l_request_id"
                            id="related-entity-screening-id0x" />
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

                            {/* <div className="col-md-8 col-sm-8 col-xs-8" id="kycl-id-wrap">
                                <div id="kycl-opt-content">
                                    <label className="control-label col-md-3 col-sm-3 col-xs-3"
                                        for="related-has-kycl0x" id="kycl-id-label"
                                        style={{ marginTop: "10px" }}>KYC ID</label>
                                    <input
                                        className="col-md-4 col-sm-4 col-xs-4 entity-track-changes0x"
                                        id="related-kycl-id0x" name="kycl_id" placeholder="KYC ID"
                                        type="text" style={{ marginRight: "10px" }}
                                        onChange={this.handleChange}
                                        value={this.state.kycl_id}
                                    />
                                    <button type="button" id="related-kycl-search-btn0x"
                                        className='btn btn-info col-md-4 col-sm-4 col-xs-4 no-print related-kycl-search-btn'
                                        disabled="disabled">Search</button>
                                </div>
                            </div> */}

                        </div>

                        <div>
                            <div className="col-md-4 col-sm-6 col-xs-12 item form-group">
                                {/* <div className="col-md-1 col-sm-1 col-xs-1">
                                    <input
                                        className="form-control entity-track-changes0x related-entity-has-cust-id"
                                        id="related-entity-has-cust-id0x" name="has_cust_id"
                                        value="true" type="checkbox" onChange={this.handleChange} />
                                </div>
                                <label className="control-label col-md-3 col-sm-3 col-xs-3"
                                    for="related-entity-has-cust-id0x"
                                    id="related-entity-cust-id-label0x" style={{ marginTop: '10px' }}>CUST
											ID
                                </label> */}
                                {/* <div className="col-md-8 col-sm-8 col-xs-8"
                                    id="related-entity-cust-id-wrap">
                                    <div id="cust-id-opt-content">
                                        <input
                                            className="col-md-4 col-sm-4 col-xs-4 entity-track-changes0x"
                                            id="related-entity-cust-id0x" name="cust_id"
                                            placeholder="CUST ID" type="text"
                                            style={{ marginRight: '10px' }} disabled="disabled" onChange={this.handleChange} value={this.state.cust_id} />
                                        <button type="button"
                                            id="related-entity-cust-id-search-btn0x"
                                            className='btn btn-info col-md-4 col-sm-4 col-xs-4 no-print related-entity-cust-id-search-btn'
                                            title="Not available yet." disabled="disabled">Search</button>
                                    </div>
                                </div> */}
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
                                        value={this.state.name_of_institution} />
                                </div>
                            </div>

                            {/* <div
                            className="col-md-6 col-sm-6 col-xs-12 item form-group cbs-generated-related-entity">
                            <label className="control-label col-md-4 col-sm-4 col-xs-4"
                                for="related-entity-cbs-cust-name0x">Customer name</label>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                <input
                                    className="form-control col-sm-8 col-md-8 col-xs-8 entity-track-changes0x"
                                    id="related-entity-cbs-cust-name0x"
                                    placeholder="Customer name" type="text" disabled="disabled" onChange={this.handleChange} value={this.state.name}/>
                            </div>
                        </div> */}

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
                                        value={this.state.ls_name} />
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
                                        type="date"
                                        path="date-of-establishment"
                                        onChange={this.handleADDateChange}
                                        value={this.state.date_of_establishment} />
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
                                        onChange={this.handleBSDateChange}
                                        value={this.state.date_of_establishment_bs} />
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
                                        value={this.state.registration_no} />
                                </div>
                            </div>

                            {/* <div
                            className="col-md-6 col-sm-6 col-xs-12 item form-group cbs-generated-related-entity">
                            <label className="control-label col-md-4 col-sm-4 col-xs-4"
                                for="related-entity-cbs-nat-id-card-num0x">National
											ID card no.</label>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                <input
                                    className="form-control col-sm-8 col-md-8 col-xs-8 entity-track-changes0x"
                                    id="related-entity-cbs-nat-id-card-num0x"
                                    placeholder="National ID card no." type="text"
                                    disabled="disabled" onChange={this.handleChange} value={this.state.national_id_card_no}/>
                            </div>
                        </div> */}

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
                                    {/* <input className="form-control col-sm-8 col-md-8 col-xs-8" type="text" name="type_of_industry" id="related-entity-type-industry0x"
                                        placeholder="Select type of industry" onfocus="this.select()"
                                        style={{ position: 'absolute', width: '278px', width: '180px', width: '188px', height: '27.9px', height: '21px', height: '18px', border: '1px solid #D3D3D3' }}
                                        onChange={this.handleChange}
                                        value={this.state.type_of_industry}
                                    /> */}
                                </div>
                            </div>
                            {/* <script>
									autoCompleteDropDown('#related-entity-type-industry0x',"#related-entity-type-of-industry0x");
									</script> */}

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

                                    {/* <input value="Nepal" className="form-control col-sm-8 col-md-8 col-xs-8 country" type="text" name="country_of_issue" id="related-entity-country0x"
                                        placeholder="Select country" onfocus="this.select()"
                                        style={{ position: 'absolute', width: '278px', width: '180px', width: '188px', height: '27.9px', height: '21px', height: '18px', border: '1px solid #D3D3D3' }}
                                        onChange={this.handleChange}
                                        value={this.state.country_of_issue}
                                    /> */}
                                </div>
                            </div>
                            {/* <script>
									autoCompleteDropDown('#related-entity-country0x',"#related-entity-country-of-issue0x");
									disableZoneAndDistrict('.country','#related-entity-zone','#related-entity-district','#related-entity-select-zone',"#related-entity-select-district");
									</script> */}
                            {/* <div
                            className="col-md-6 col-sm-6 col-xs-12 item form-group cbs-generated-related-entity">
                            <label className="control-label col-md-4 col-sm-4 col-xs-4"
                                for="related-entity-cbs-cust-perm-cntry-code0x">Customer
											perm. country code</label>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                <input
                                    className="form-control col-sm-8 col-md-8 col-xs-8 entity-track-changes0x"
                                    id="related-entity-cbs-cust-perm-cntry-code0x"
                                    placeholder="Customer permanent country code" type="text"
                                    disabled="disabled"
                                    onChange={this.handleChange}
                                    value={this.state.cust_perm_country_code}
                                />
                            </div>
                        </div> */}

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
                                        value={this.state.province} />
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
                                    {/* <!-- <input
												className="form-control col-sm-8 col-md-7 col-xs-12 entity-track-changes0x"
												id="related-zone0x" name="zone" placeholder="Zone"
												type="text" path="zone" /> --> */}
                                    <select
                                        className="form-control col-sm-8 col-md-8 col-xs-8  entity-track-changes0x rel-entity-zone"
                                        id="related-entity-zone0x"
                                        placeholder="Zone">
                                        <option value="Bagmati">Bagmati</option>
                                    </select>

                                    {/* <input className="form-control col-sm-8 col-md-8 col-xs-8 rel-entity-zone" type="text" name="zone" id="related-entity-select-zone0x"
                                        placeholder="Select zone" onfocus="this.select()"
                                        onChange={this.handleChange}
                                        style={{
                                            position: 'absolute', width: '278px', width: '180px', width: '188px',
                                            height: '27.9px', height: '21px', height: '18px', border: '1px solid #D3D3D3'
                                        }}
                                        value={this.state.zone}
                                    /> */}
                                </div>
                            </div>
                            {/* <script>
                                autoCompleteDropDown('#related-entity-select-zone0x',"#related-entity-zone0x");
									</script> */}

                            {/* <div
                            className="col-md-6 col-sm-6 col-xs-12 item form-group cbs-generated-related-entity">
                            <label className="control-label col-md-4 col-sm-4 col-xs-4"
                                for="related-entity-cbs-cust-perm-addr0x">Customer
											permanent address</label>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                <input
                                    className="form-control col-sm-8 col-md-8 col-xs-8 entity-track-changes0x"
                                    id="related-entity-cbs-cust-perm-addr0x"
                                    placeholder="Customer permanent address" type="text"
                                    disabled="disabled"
                                    onChange={this.handleChange}
                                    value={this.state.cust_perm_address}
                                    />
                            </div>
                        </div> */}

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

                                    {/* <input className="form-control col-sm-8 col-md-8 col-xs-8 rel-entity-district" type="text" name="district" id="related-entity-select-district0x"
                                        placeholder="Select district" onfocus="this.select()"
                                        onChange={this.handleChange}
                                        style={{
                                            position: 'absolute', width: '278px', width: '180px', width: '188px',
                                            height: '27.9px', height: '21px', height: '18px', border: '1px solid #D3D3D3'
                                        }}
                                        value={this.state.district}
                                    /> */}
                                </div>
                            </div>
                            {/* <script>
									autoCompleteDropDown('#related-entity-select-district0x','#related-entity-district0x');
									populateAndAutoChangeArrayDistrict('.rel-entity-district','.rel-entity-zone');
									</script>; */}

                            {/* <div
                            className="col-md-6 col-sm-6 col-xs-12 item form-group cbs-generated-related-entity">
                            <label className="control-label col-md-4 col-sm-4 col-xs-4"
                                for="related-entity-cbs-district0x">District</label>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                <input
                                    className="form-control col-sm-8 col-md-8 col-xs-8 entity-track-changes0x"
                                    id="related-entity-cbs-district0x" placeholder="District"
                                    type="text" disabled="disabled"
                                    onChange={this.handleChange} value={this.state.district}/>
                            </div>
                        </div> */}

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
                                        value={this.state.mn_vdc} />
                                </div>
                            </div>

                            {/* <div
                            className="col-md-6 col-sm-6 col-xs-12 item form-group cbs-generated-related-entity">
                            <label className="control-label col-md-4 col-sm-4 col-xs-4"
                                for="related-entity-cbs-cust-perm-city-code0x">Customer
											permanent city code</label>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                <input
                                    className="form-control col-sm-8 col-md-8 col-xs-8 entity-track-changes0x"
                                    id="related-entity-cbs-cust-perm-city-code0x"
                                    placeholder="Customer permanent city code" type="text"
                                    disabled="disabled"
                                    onChange={this.handleChange} value={this.state.cust_perm_city_code}/>
                            </div>
                        </div> */}

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
                                        value={this.state.ward_no} />
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
                                        value={this.state.pan_number} />
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
                                        value={this.state.contact_number} />
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
                                        value={this.state.email_id} />
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
                                        className="entity-track-changes0x" />
                                    <label className="control-label col-md-2" for="related-low0x">Low</label>
                                    <input
                                        type="radio"
                                        name="find_match_index"
                                        checked="checked"
                                        id="related-medium0x"
                                        value="0.5"
                                        className="entity-track-changes0x" />
                                    <label className="control-label col-md-3" for="related-medium0x">Medium</label>
                                    <input
                                        type="radio"
                                        name="find_match_index"
                                        id="related-high0x"
                                        value="0.7"
                                        className="entity-track-changes0x" />
                                    <label className="control-label col-md-3" for="related-high0x">High</label>
                                </div>
                            </div>

                            <div className="clearfix"></div>
                            <hr /> {/* <div className='col-md-2'>
                                <button type="button"
                                    id="find-natural-related-entity-match-btn0x"
                                    className='btn btn-info find-natural-related-entity-match-btn'>Find
										match</button>
                                <span id="find-match-loader-entity0x" style={{ display: 'none' }}><img
                                    alt="" src="./static/images/loader.gif" /></span>
                            </div>
                            <input type="submit" className="formSubmit" style={{ display: "none" }} /> */}
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
            </div>

        );
    }

}

// ScreeningRelatedEntity.propTypes = {     added: PropTypes.bool,
// onSubmitScreeningRelatedEntity: PropTypes.func.isRequired }; const
// mapStateToProps = state => ({relatedEntity: state.relatedEntity}); const
// mapDispatchToProps = dispatch => ({     onSubmitScreeningRelatedEntity:
// values => dispatch(UserActionCreators.addScreeningRelatedEntity(values)),
// onClose: () => dispatch(UserActionCreators.close()) }); export default
// connect(mapStateToProps, mapDispatchToProps)(ScreeningRelatedEntity);

export default ScreeningRelatedEntity;

function dateConverter(fullDate) {
    var currentDate = new Date();
    console.log("the date is" + currentDate);

    var defaults = {
        lang: 'ne',   //possible values: ne for nepali text, en for english text
        //dateFormat: 'yyyy/mm/dd',     // not implemented yet
        monthFormat: 'full',  //possible values: full for full name, short for short name
        daysFormat: 'min',    //possible values: full for full name, short for short name and min for minified name
    },
        ne = {
            monthsName: ['बैशाख', 'जेष्ठ', 'आषाढ', 'श्रावण', 'भाद्र', 'आश्विन', 'कार्तिक', 'मंसिर', 'पौष', 'माघ', 'फाल्गुन', 'चैत्र'],
            monthsShortName: ['बै', 'जे', 'आषा', 'श्रा', 'भा', 'आश', 'का', 'मं', 'पौ', 'मा', 'फा', 'चै'],
        },
        en = {
            monthsName: ['Baisakh', 'Jestha', 'Ashadh', 'Shrawan', 'Bhadra', 'Ashwin', 'Kartik', 'Mangsir', 'Paush', 'Mangh', 'Falgun', 'Chaitra'],
            monthsShortName: ['Bai', 'Je', 'As', 'Shra', 'Bha', 'Ash', 'Kar', 'Mang', 'Pau', 'Ma', 'Fal', 'Chai'],
        },
        engDaysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        engDaysShortName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        engMonthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        engMonthsShortName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        daysInYear = 365,
        minMonth = 1,
        minDays = 1,
        maxMonth = 12,
        maxDays = 32,
        nums = {
            0: '०',
            1: '१',
            2: '२',
            3: '३',
            4: '४',
            5: '५',
            6: '६',
            7: '७',
            8: '८',
            9: '९'
        },
        base_ad = { year: 2017, month: 2, day: 11, dayOfWeek: 6 },  // dayOfWeek: 0 for sunday, 1 for monday and so on
        base_bs = { year: 2073, month: 10, day: 29, dayOfWeek: 6 },
        calendar_data = {
            '1978': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '1979': [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
            '1980': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '1981': [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
            '1982': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '1983': [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
            '1984': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '1985': [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
            '1986': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '1987': [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
            '1988': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '1989': [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '1990': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '1991': [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
            '1992': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
            '1993': [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '1994': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '1995': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
            '1996': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
            '1997': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '1998': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '1999': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '2000': [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
            '2001': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2002': [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
            '2003': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '2004': [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
            '2005': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2006': [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
            '2007': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '2008': [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365],
            '2009': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2010': [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
            '2011': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '2012': [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
            '2013': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2014': [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
            '2015': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '2016': [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
            '2017': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2018': [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
            '2019': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
            '2020': [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2021': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2022': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
            '2023': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
            '2024': [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2025': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2026': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '2027': [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
            '2028': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2029': [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30, 365],
            '2030': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '2031': [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
            '2032': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2033': [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
            '2034': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '2035': [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365],
            '2036': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2037': [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
            '2038': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '2039': [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
            '2040': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2041': [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
            '2042': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '2043': [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
            '2044': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2045': [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
            '2046': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '2047': [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2048': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2049': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
            '2050': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
            '2051': [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2052': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2053': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
            '2054': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
            '2055': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2056': [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30, 365],
            '2057': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '2058': [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
            '2059': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2060': [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
            '2061': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '2062': [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31, 365],
            '2063': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2064': [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
            '2065': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '2066': [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365],
            '2067': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2068': [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
            '2069': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '2070': [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
            '2071': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2072': [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
            '2073': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
            '2074': [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2075': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2076': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
            '2077': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
            '2078': [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2079': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
            '2080': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
            '2081': [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30, 366],
            '2082': [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
            '2083': [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30, 365],
            '2084': [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30, 365],
            '2085': [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30, 366],
            '2086': [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
            '2087': [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30, 366],
            '2088': [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30, 365],
            '2089': [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
            '2090': [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
            '2091': [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30, 366],
            '2092': [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30, 366]
        }

    /*
     * gathered data below; if anybody can validate below, thanks!
     * A hacky way is to iterate for the unknown dates is to use daysPerYear and loop through
     *
     '2093': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 366 ],
     '2094': [ 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30, 365 ],
     '2095': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30, 366 ],
     '2096': [ 30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 364 ],
     '2097': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 366 ],
     '2098': [ 31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 30, 31, 366 ],
     '2099': [ 31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30, 365 ],
     '2100': [ 31, 32, 31, 32, 30, 31, 30, 29, 30, 29, 30, 30, 365 ]
     */

    function countDaysInYear(year) {
        if (typeof calendar_data[year] === 'undefined') {
            return daysInYear;
        }

        return calendar_data[year][12];
    }

    function isLeapYear(year) {
        return (daysInYear !== countDaysInYear(year));
    }

    function countBSDays(date) {
        var dayCount = 0;
        var dateArr = date.split('-').map(function (str) {
            return Number(str);
        });

        var dateObj = { year: dateArr[0], month: dateArr[1], day: dateArr[2] };

        var inc = false;
        if (dateArr[0] > base_bs.year) {
            inc = true;
        }
        else if (dateArr[0] === base_bs.year && dateArr[1] > base_bs.month) {
            inc = true;
        }
        else if (dateArr[0] === base_bs.year && dateArr[1] === base_bs.month && dateArr[2] > base_bs.day) {
            inc = true;
        }

        var start = {};
        var end = {};
        var factor = 1;

        if (inc === true) {
            start = base_bs;
            end = dateObj;
        }
        else {
            start = dateObj;
            end = base_bs;
            factor = -1;
        }

        for (var i = start.year; i <= end.year; i++) {
            dayCount += calendar_data[i][12];
        }

        for (var i = 0; i < start.month - 1; i++) {
            dayCount -= calendar_data[start.year][i];
        }

        //dayCount += calendar_data[start.year][12 - 1];

        for (var i = end.month - 1; i < 12; i++) {
            dayCount -= calendar_data[end.year][i];
        }

        dayCount -= start.day;
        dayCount += end.day;
        return (dayCount * factor);
    }

    function countADDays(date) {
        var dayCount = 0, i = 0;
        var dateArr = date.split('-').map(function (str) {
            return Number(str);
        });

        var dateObj = { year: dateArr[0], month: dateArr[1] - 1, day: dateArr[2] };

        var date1 = new Date(base_ad.year, base_ad.month - 1, base_ad.day);
        var date2 = new Date(dateObj.year, dateObj.month, dateObj.day);
        var timeDiff = date2.getTime() - date1.getTime();
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return { diffDays: diffDays, dateInAd: date2 };
    }

    function offsetBSDays(dayData) {
        var dayCount = dayData.diffDays,
            dateInAd = dayData.dateInAd;
        var bs_date = JSON.parse(JSON.stringify(base_bs));
        if (dayCount >= 0) {
            bs_date.day += dayCount;
            while (bs_date.day > calendar_data[bs_date.year][bs_date.month - 1]) {
                bs_date.day -= calendar_data[bs_date.year][bs_date.month - 1];
                bs_date.month++;
                if (bs_date.month > 12) {
                    bs_date.year++;
                    bs_date.month = 1;
                }
            }
        }
        else {
            dayCount = Math.abs(dayCount);
            while (dayCount >= 0) {
                if (dayCount < calendar_data[bs_date.year][bs_date.month - 1]) {
                    dayCount = calendar_data[bs_date.year][bs_date.month - 1] - dayCount;
                    break;
                }
                dayCount -= calendar_data[bs_date.year][bs_date.month - 1];
                bs_date.month--;
                if (bs_date.month === 0) {
                    bs_date.year--;
                    bs_date.month = 12;
                }
            }
            bs_date.day = dayCount;
        }
        var month = dateInAd.getMonth(),
            dayOfWeek = dateInAd.getDay();
        var npDayOfWeek = getNepDayOfWeek(dayOfWeek),
            enDayOfWeek = getNepDayOfWeek(dayOfWeek, { 'lang': 'en' });

        var totalDays = calendar_data[bs_date.year][bs_date.month - 1]
        var dateObj = {
            ne: {
                year: getNepaliNumber(bs_date.year),
                month: getNepaliNumber(bs_date.month),
                day: getNepaliNumber(bs_date.day),
                strMonth: ne.monthsName[bs_date.month - 1],
                strShortMonth: ne.monthsShortName[bs_date.month - 1],
                dayOfWeek: getNepaliNumber(dayOfWeek),
                strDayOfWeek: npDayOfWeek['full'],
                strShortDayOfWeek: npDayOfWeek['short'],
                strMinDayOfWeek: npDayOfWeek['min'],
                totalDaysInMonth: getNepaliNumber(totalDays)
            },
            en: {
                year: bs_date.year,
                month: bs_date.month,
                day: bs_date.day,
                strMonth: en.monthsName[bs_date.month - 1],
                strShortMonth: en.monthsShortName[bs_date.month - 1],
                dayOfWeek: dayOfWeek,
                strDayOfWeek: enDayOfWeek['full'],
                strShortDayOfWeek: enDayOfWeek['short'],
                strMinDayOfWeek: enDayOfWeek['min'],
                totalDaysInMonth: totalDays
            }
        }
        //return dateObj;
        if (bs_date.month < 10) {
            bs_date.month = "0" + bs_date.month;
        }
        if (bs_date.day < 10) {
            bs_date.day = "0" + bs_date.day;
        }

        return (bs_date.year + '-' + bs_date.month + '-' + bs_date.day);
    }

    function offsetADDays(dayCount) {
        var date = new Date(base_ad.year, base_ad.month - 1, base_ad.day);
        date.setDate(date.getDate() + dayCount);
        var month = date.getMonth() + 1,
            dayOfWeek = date.getDay();
        // var dateObj = {
        //     year: date.getFullYear(),
        //     month: month + 1,
        //     strMonth: engMonthsName[month],
        //     strShortMonth: engMonthsShortName[month],
        //     day: date.getDate(),
        //     dayOfWeek: dayOfWeek,
        //     strDayOfWeek: engDaysName[dayOfWeek],
        //     strShortDayOfWeek: engDaysShortName[dayOfWeek]
        // }
        //return dateObj;
        var year = date.getFullYear();
        var day = date.getDate();
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        return (year + '-' + month + '-' + day);
    }

    this.bs2ad = function (date) {
        return offsetADDays(countBSDays(date));
    }

    this.ad2bs = function (date) {
        return offsetBSDays(countADDays(date));
    }

}

function isValidDate(dateStr) {
    console.log(dateStr);
    // Checks for the following valid date formats:
    // MM/DD/YYYY
    // Also separates date into month, day, and year variables
    var datePat = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    //var datePat=/^\d{4}[\/]\d{1,2}[\/]\d{1,2}$/;
    console.log(datePat);
    var matchArray = dateStr.match(datePat); // is the format ok?
    console.log(matchArray);
    if (matchArray == null) {
        //alert("Date must be in MM/DD/YYYY format")
        return false;
    }

    let month = matchArray[1]; // parse date into variables
    let day = matchArray[3];
    let year = matchArray[4];
    if (month < 1 || month > 12) { // check month range
        alert("Month must be between 1 and 12");
        return false;
    }
    if (day < 1 || day > 31) {
        alert("Day must be between 1 and 31");
        return false;
    }
    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
        alert("Month " + month + " doesn't have 31 days!")
        return false;
    }
    if (month == 2) { // check for february 29th
        var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
        if (day > 29 || (day == 29 && !isleap)) {
            alert("February " + year + " doesn't have " + day + " days!");
            return false;
        }
    }
    return true;  // date is valid
}
