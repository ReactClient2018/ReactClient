
import React from 'react';
import { History } from "utils";
// var base64ToImage =require('base64-to-image');
var createReactClass = require('create-react-class');
var Templates = createReactClass({
    render: function () {
        var data = JSON.parse(localStorage.getItem('screening_n_attachment'));
      // let img="data:image/png;base64,"+data[0].scanned_content;
    //    console.log(data[0].scanned_content);
        if (data) {
            var dataList = data.map(function (dat, index) {
                let img="data:image/png;base64,"+dat.scanned_content;
                return <div key={index}>
                    <div id="screening-n-request-review-wrap">
                        <div className="clearfix"></div>
                        <div className="col-md-6">
                            <h3>Document {index}</h3>
                        </div>
                        <div className="col-md-6 pull-right text-right">
                            <div
                                className="btn btn-primary no-print edit-buttons"
                                data-edit="screening-request-tab"
                                onClick={() => {
                                    localStorage.setItem('screening_attachment_index', index);
                                    History.push("/screeningDocumentsEdit");
                                }}>Edit</div>

                            <div
                                className="btn btn-danger pull-right clear-active"
                                data-edit="screening-request-tab"
                                style={{ marginLeft: "10px" }}
                                onClick={function handleRemove() {
                                    data.splice(index, 1);
                                    localStorage.setItem("screening_n_attachment", JSON.stringify(data));
                                    location.reload();

                                }}>Remove</div>

                        </div>

                        <div className="clearfix"></div>
                        <div className="col-xs-12 hover-group review-group">
                            <label className="control-label col-xs-4 review-key">DOCUMENT TYPE
                            </label>
                            <div className="col-xs-8 review-value">
                                <label className="">
                                    {dat.scanned_document_type}

                                </label>
                            </div>
                        </div>
                        <div className="col-xs-12 hover-group review-group">
                            <label className="control-label col-xs-4 review-key">CONTENT
                            </label>
                            <div className="col-xs-8 review-value">
                                <label className="">
                                
                                <img src={img} style={{height:'200px', width:'200px'}} alt="Red dot" />
                                
                                </label>
                            </div>
                        </div>

                        <div className="col-xs-12 hover-group review-group">
                            <label className="control-label col-xs-4 review-key">NOTES
                            </label>
                            <div className="col-xs-8 review-value">
                                <label className="">{dat.notes}</label>
                            </div>
                        </div>

                        <div className="clearfix"></div>
                    </div>
                    <hr />
                </div>;
            })

            return <div>.{dataList}</div>
        } else {
            return <ul>.</ul>;
        }
    }
});

class ScreeningDocumentTable extends React.Component {

    render() {
        return (
            <div>
                <Templates />
            </div>
        )
    }
}
export default ScreeningDocumentTable;


