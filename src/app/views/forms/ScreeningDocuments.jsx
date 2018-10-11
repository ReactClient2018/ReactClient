import React from "react";
import ScreeningPrimaryRequest from "../screeningnatural/ScreeningTabTitle.jsx";
import ScreeningTabTitle from '../screeningnatural/ScreeningTabTitle.jsx';
// import './css/screeningDocuments.css';


class ScreeningDocuments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scanned_document_type: "",
            scanned_content: "",
            extension_text: "",
            notes: "",
            action_id: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.name);
    };
 
    handleFileChange = (e) => {


        let file = e.target.files[0];
        e.preventDefault();
        
        const imgObj = e.target.files[0];
        console.log(imgObj);
        var filename = e.target.files[0].name;
        console.log(imgObj.name);
        var fileSize = 500;
        if (filename.indexOf('.') < 0) {
            alert("You cannot upload a file without an extension");

        } else if ((imgObj.size / 1024) > fileSize) {
            alert("The maximum file size permitted is " + fileSize + "KB only.");
        } else {
            var ext = filename.split('.').pop();
            if (imgObj) {
                var reader = new FileReader();
                reader.onload = function (readerEvt) {
                    var binaryString = readerEvt.target.result;
                    var b64 = btoa(binaryString);

                    console.log(b64);

                }
                reader.readAsBinaryString(imgObj);
            }
        }

        // reader.onloadend = () => {
        //     this.setState({ scanned_content: file });
        // }
        console.log("the image is" + this.state.scanned_content);

 
    }
  


    
    render() {

        return (
            <div>
                <ScreeningTabTitle />

                <div style={{ backgroundColor: 'white' }}>
                    <form>

                        <div class="col-md-4 col-sm-6 col-xs-12 item form-group">
                            <label class="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                                Attachment Type:
                        </label>
                            <div class="col-md-8 col-sm-8 col-xs-8">
                                <select
                                    name="attachment-type"
                                    value={this.state.scanned_document_type}
                                    onChange={this.handleChange}>
                                    <option value='citizenship'>citizenship</option>
                                    <option value='passport'>passport</option>
                                    <option value='others'>others</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12 item form-group">
                            <label class="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>Attachment</label>
                            <div class="col-md-8 col-sm-8 col-xs-8">
                                <input name='file' type='file' onChange={this.handleFileChange} value={this.state.scanned_content} ></input>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12 item form-group">
                            <label class="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>notes</label>
                            <div class="col-md-8 col-sm-8 col-xs-8">
                                <textarea name="notes" required onChange={this.handleChange} value={this.state.notes}></textarea>
                            </div>
                        </div>
                        <div>
                            {/* <button>Add Attachment</button>
                            <button>Remove Attachment</button> */}
                        </div>
                        <div>
                            <button>Proceed</button>
                        </div>


                    </form>
                </div>
            </div>
        );
    }
}
export default ScreeningDocuments;

