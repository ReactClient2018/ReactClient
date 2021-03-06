import React from "react";
import {Auth, History} from "utils";
class ScreeningPrimaryRequestTable extends React.Component {
    render() {
        var data = localStorage.getItem('screening_n_request_data');
        if(data){
            data = JSON.parse(data)[0];
        }else{
            data = {
                purpose_of_screening_n: "",
                first_name:"",
                last_name:"",
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
                            History.push("/screeningPrimaryRequestEdit");
                        }}>Edit</div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">PURPOSE OF SCREENING
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{data.purpose_of_screening_n}</label>
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
                        <label className="control-label col-xs-4 review-key">FIRST NAME
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{data.first_name}</label>
                        </div>
                    </div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">LAST NAME
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{data.last_name}</label>
                        </div>
                    </div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">COUNTRY OF ISSUE
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">Nepal</label>
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
export default ScreeningPrimaryRequestTable;