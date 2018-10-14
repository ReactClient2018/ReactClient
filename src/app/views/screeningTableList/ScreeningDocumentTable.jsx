import React from "react";
import {Auth, History} from "utils";
class ScreeningDocumentsTable extends React.Component {
    render() {
        var data = JSON.parse(localStorage.getItem('screening_n_attachment'));
        return (
            <div>
                <div id="screening-n-request-review-wrap">
                   <div className="clearfix"></div>
                        <div className="col-md-6">
                            <h3>Documents </h3>
                        </div>
                    <div className="clearfix"></div>
                    <div className="col-md-6 pull-right text-right">
                        <div
                            className="btn btn-primary no-print edit-buttons"
                            data-edit="screening-request-tab"
                            onClick={()=>{
                                History.push("/screeningPrimaryRequestEdit");
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
                        <label className="control-label col-xs-4 review-key">DOCUMENT TYPE
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{data[0].scanned_document_type}</label>
                        </div>
                    </div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">Content
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{data[0].scanned_content}</label>
                        </div>
                    </div>
              
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">NOTES
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{data[0].notes}</label>
                        </div>
                    </div>
                   
                    <div className="clearfix"></div>
                   
                </div>
                <hr/>

            </div>

        );
    }
}
export default ScreeningDocumentsTable;