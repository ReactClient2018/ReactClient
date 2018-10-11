import React from "react";

class ScreeningPrimaryRequestTable extends React.Component {
    handleEdit=()=>{
        alert("Edit Called!!!");
    }
    render() {
        var data = JSON.parse(localStorage.getItem('screening_n_request_data'));
        return (
            <div>
                <div id="screening-n-request-review-wrap">
                    <div class="clearfix"></div>
                    <div class="col-md-6">
                        <h3>Primary Customer</h3>
                    </div>
                    <div class="col-md-6 pull-right text-right">
                        <div
                            class="btn btn-primary no-print edit-buttons"
                            data-edit="screening-request-tab"
                            onClick={this.handleEdit}>Edit</div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-xs-12 hover-group review-group">
                        <label class="control-label col-xs-4 review-key">PURPOSE OF SCREENING N
                        </label>
                        <div class="col-xs-8 review-value">
                            <label class="">{data[0].purpose_of_screening_n}</label>
                        </div>
                    </div>
                    <div class="col-xs-12 hover-group review-group">
                        <label class="control-label col-xs-4 review-key">ACCOUNTS N SUB TYPE
                        </label>
                        <div class="col-xs-8 review-value">
                            <label class="">Primary account holder</label>
                        </div>
                    </div>
                    <div class="col-xs-12 hover-group review-group">
                        <label class="control-label col-xs-4 review-key">MIGRATED
                        </label>
                        <div class="col-xs-8 review-value">
                            <label class="">false</label>
                        </div>
                    </div>
                    <div class="col-xs-12 hover-group review-group">
                        <label class="control-label col-xs-4 review-key">FIRST NAME
                        </label>
                        <div class="col-xs-8 review-value">
                            <label class="">{data[0].first_name}</label>
                        </div>
                    </div>
                    <div class="col-xs-12 hover-group review-group">
                        <label class="control-label col-xs-4 review-key">LAST NAME
                        </label>
                        <div class="col-xs-8 review-value">
                            <label class="">{data[0].last_name}</label>
                        </div>
                    </div>
                    <div class="col-xs-12 hover-group review-group">
                        <label class="control-label col-xs-4 review-key">COUNTRY OF ISSUE
                        </label>
                        <div class="col-xs-8 review-value">
                            <label class="">Nepal</label>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    {/* <div class="col-md-12 col-sm-12 col-xs-12">
                        <h4>
                            <div class="alert alert-danger" role="alert">No Nominee has been assigned.</div>
                        </h4>
                    </div> */}
                </div>
                <hr/>

            </div>

        );
    }
}
export default ScreeningPrimaryRequestTable;