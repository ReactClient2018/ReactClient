import React from 'react';
import {History} from "utils";

class Templates extends React.Component{   
 
    render() {
        var data = JSON.parse(localStorage.getItem('screening_n_related_person'));
        if (data) {
            
            var dataList = data.map(function (dat, index) {
                return <div key={index}>
                    <div id="screening-n-request-review-wrap">
                        <div class="clearfix"></div>
                        <div class="col-md-6">
                            <h3>Related Person {index}</h3>
                        </div>
                        <div class="col-md-6 pull-right text-right">
                            <div
                                class="btn btn-primary no-print edit-buttons"
                                data-edit="screening-request-tab"
                                onClick={()=>{
                                    History.push("/screeningRelatedPerson");
                                }}
                                >Edit</div>
                            <div
                                class="btn btn-danger pull-right clear-active"
                                data-edit="screening-request-tab"
                                style={{
                                marginLeft: "10px"
                            }}
                                onClick={ function handleRemove() {
                                    // var data = JSON.parse(localStorage.getItem('screening_n_related_person'));
                                    data.splice(index, 1);
                                    localStorage.setItem("screening_n_related_person",JSON.stringify(data));
                                    location.reload();
                                   
                        
                                }}
                                >Remove</div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-xs-12 hover-group review-group">
                            <label class="control-label col-xs-4 review-key">PURPOSE OF SCREENING N
                            </label>
                            <div class="col-xs-8 review-value">
                                <label class="">{dat.purpose_of_screening_n}</label>
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
                                <label class="">{dat.first_name}</label>
                            </div>
                        </div>
                        <div class="col-xs-12 hover-group review-group">
                            <label class="control-label col-xs-4 review-key">LAST NAME
                            </label>
                            <div class="col-xs-8 review-value">
                                <label class="">{dat.last_name}</label>
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
                    </div>
                    <hr/>
                </div>;
            })

            return <div>{dataList}</div>
        } else {
            return <ul>.</ul>;
        }
    }
}

class ScreeningRelatedPersonTable extends React.Component {
    render() {
        return (
            <div>
                <Templates/>
            </div>
        )
    }
}
export default ScreeningRelatedPersonTable;