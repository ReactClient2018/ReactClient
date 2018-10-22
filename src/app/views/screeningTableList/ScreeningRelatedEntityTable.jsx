import React from 'react';
import {History} from "utils";

var createReactClass = require('create-react-class');
var Templates = createReactClass({
    render: function () {
        var data = JSON.parse(localStorage.getItem('screening_n_related_entity'));
        if (data) {
            var dataList = data.map(function (dat, index) {
                return <div key={index}>
                    <div id="screening-n-request-review-wrap">
                        <div className="clearfix"></div>
                        <div className="col-md-6">
                            <h3>Related Entity {index +1}</h3>
                        </div>
                        <div className="col-md-6 pull-right text-right">
                            <div
                                className="btn btn-primary no-print edit-buttons"
                                data-edit="screening-request-tab"
                                onClick={()=>{
                                    localStorage.setItem('screening_related_entity_index',index);
                                    History.push("/screeningRelatedEntityEdit");
                                }}>Edit</div>

                            <div
                                className="btn btn-danger pull-right clear-active"
                                data-edit="screening-request-tab"
                                style={{marginLeft:"10px"}}
                                onClick={ function handleRemove() {
                                    data.splice(index, 1);
                                    localStorage.setItem("screening_n_related_entity",JSON.stringify(data));
                                    location.reload(); 
                        
                                }}>Remove</div>

                        </div>

                        <div className="clearfix"></div>
                        <div className="col-xs-12 hover-group review-group">
                            <label className="control-label col-xs-4 review-key">CUSTOMER TYPE
                            </label>
                            <div className="col-xs-8 review-value">
                                <label className="">{dat.accounts_l_sub_type}</label>
                            </div>
                        </div>
                        <div className="col-xs-12 hover-group review-group">
                            <label className="control-label col-xs-4 review-key">NAME OF INSTITUTION
                            </label>
                            <div className="col-xs-8 review-value">
                                <label className="">{dat.name_of_institution}</label>
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
                            <label className="control-label col-xs-4 review-key">REGISTRATION NUMBER
                            </label>
                            <div className="col-xs-8 review-value">
                                <label className="">{dat.registration_no}</label>
                            </div>
                        </div>
                        <div className="col-xs-12 hover-group review-group">
                            <label className="control-label col-xs-4 review-key">TYPE OF INDUSTRY
                            </label>
                            <div className="col-xs-8 review-value">
                                <label className="">{dat.type_of_industry}</label>
                            </div>
                        </div>
                        <div className="col-xs-12 hover-group review-group">
                            <label className="control-label col-xs-4 review-key">COUNTRY OF ISSUE
                            </label>
                            <div className="col-xs-8 review-value">
                                <label className="">{dat.country_of_issue}</label>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <hr/>
                </div>;
            })

            return <div>.{dataList}</div>
        } else {
            return <ul>.</ul>;
        }
    }
});

class ScreeningRelatedEntityTable extends React.Component {

    render() {
        return (
            <div>
                <Templates/>
            </div>
        )
    }
}
export default ScreeningRelatedEntityTable;