import React from 'react';
import {History} from "utils";
import screeningRelatedPersonEdit from '../screeningEditList/ScreeningRelatedPersonEdit.jsx'

class Templates extends React.Component{   
 
    render() {
        var data = JSON.parse(localStorage.getItem('screening_n_related_person'));
        if (data) {
            
            var dataList = data.map(function (dat, index) {
                return <div key={index}>
                    <div id="screening-n-request-review-wrap">
                        <div className="clearfix"></div>
                        <div className="col-md-6">
                            <h3>Related Person {index+1}</h3>
                        </div>
                        <div className="col-md-6 pull-right text-right">
                            <div
                                className="btn btn-primary no-print edit-buttons"
                                data-edit="screening-request-tab"
                                onClick={()=>{
                                    localStorage.setItem('screening_related_person_index',index);
                                    History.push("/screeningRelatedPersonEdit");
                                }}
                                >Edit</div>
                            <div
                                className="btn btn-danger pull-right clear-active"
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
                        <div className="clearfix"></div>
                        <div className="col-xs-12 hover-group review-group">
                            <label className="control-label col-xs-4 review-key">PURPOSE OF SCREENING
                            </label>
                            <div className="col-xs-8 review-value">
                                <label className="">{dat.purpose_of_screening_n}</label>
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
                                <label className="">{dat.first_name}</label>
                            </div>
                        </div>
                        <div className="col-xs-12 hover-group review-group">
                            <label className="control-label col-xs-4 review-key">LAST NAME
                            </label>
                            <div className="col-xs-8 review-value">
                                <label className="">{dat.last_name}</label>
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