import React from "react";
import {Auth, History} from "utils";
class ScreeningLegalPrimaryTable extends React.Component {
    render() {
        var data = localStorage.getItem('screening_l_request_data');
        if(data){
            data = JSON.parse(data)[0];
        }else{
            data = {
                purpose_of_screening: "",
                name_of_institution:"",
                type_of_industry:"",
                country_of_issue:""
            };
        }

        return (
            <div>
             
                <div id="screening-n-request-review-wrap">
                    <div className="clearfix"></div>
                    <div className="col-md-6">
                        <h3>Primary Customer
                        </h3>
                    </div>
                    <div className="clearfix"></div>
                    <div className="clearfix"></div>
                    <div className="col-md-6 pull-right text-right">
                        <div
                            className="btn btn-primary no-print edit-buttons"
                            data-edit="screening-request-tab"
                            onClick={() => {
                            History.push("/screeningLegalPrimaryEdit");
                        }}>Edit</div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">PURPOSE OF SCREENING
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{data.purpose_of_screening}</label>
                        </div>
                    </div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">ACCOUNTS N SUB TYPE
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">Primary account holder</label>
                        </div>
                    </div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">MIGRATED
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">false</label>
                        </div>
                    </div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">NAME OF INSTITUTION
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{data.name_of_institution}</label>
                        </div>
                    </div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">TYPE OF INDUSTRY
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{data.type_of_industry}</label>
                        </div>
                    </div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">COUNTRY OF ISSUE
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{data.country_of_issue}</label>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    {/* <div className="col-md-12 col-sm-12 col-xs-12">
                        <h4>
                            <div className="alert alert-danger" role="alert">No Nominee has been assigned.</div>
                        </h4>
                    </div> */}
                </div>
                <hr/>

            </div>

        );
    }
}
export default ScreeningLegalPrimaryTable;