import React from "react";
import ScreeningPrimaryRequest from "../screeningnatural/ScreeningTabTitle.jsx";
import ScreeningTabTitle from '../screeningnatural/ScreeningTabTitle.jsx';
import { History } from 'utils';
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
    };
    handleProceed = () => {
        alert(JSON.stringify(this.state));
        var screening_n_attachment = localStorage.getItem("screening_n_attachment");
        screening_n_attachment = screening_n_attachment ? JSON.parse(screening_n_attachment) : [];
        // alert(screening_n_related_person.length);
        screening_n_attachment.push(this.state);

        localStorage.setItem("screening_n_attachment", JSON.stringify(screening_n_attachment));
        History.push("/screeningNaturalReview")
    }

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
            var ext = filename
                .split('.')
                .pop();
            if (imgObj) {
                var reader = new FileReader();
                reader.onload = (readerEvt) => {
                    var binaryString = readerEvt.target.result;
                    var b64 = btoa(binaryString);

                    this.setState({ scanned_content: b64 });
                     console.log(this.state.scanned_content);

                }
                reader.readAsBinaryString(imgObj);
            }
        }

    }

    render() {

        return (
            <div>
                <ScreeningTabTitle />

                <div style={{
                    backgroundColor: 'white'
                }}>
                    <form>

                        <div className="col-md-4 col-sm-6 col-xs-12 item form-group">
                            <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>
                                Attachment Type:

                        </label>
                           


                                <div class="col-md-8 col-sm-8 col-xs-8">
                                    <select
                                        name="scanned_document_type"
                                        value={this.state.scanned_document_type}
                                        onChange={this.handleChange}>
                                        <option>Select action type.</option>
                                        <option value='citizenship'>citizenship</option>
                                        <option value='passport'>passport</option>
                                        <option value='others'>others</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12 item form-group">
                                <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>Attachment</label>
                                <div className="col-md-8 col-sm-8 col-xs-8">
                                    <input name='file' type='file' onChange={this.handleFileChange}></input>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6 col-xs-12 item form-group">
                                <label class="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>notes</label>
                                <div class="col-md-8 col-sm-8 col-xs-8">
                                    <textarea
                                        name="notes"
                                        required
                                        onChange={this.handleChange}
                                        value={this.state.notes}></textarea>

                                </div>
                            </div>
                            <div>
                                {/* <button>Add Attachment</button>
                            <button>Remove Attachment</button> */}
                            </div>
                            <div>
                                <button onClick={this.handleProceed}>Proceed</button>
                            </div>

                    </form>
                </div>
                </div>
                );
            }
        }
        export default ScreeningDocuments;
