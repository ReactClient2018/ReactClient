import React from "react";
import {Auth, History} from "utils";

class ScreeningTabTitle extends React.Component {
    
    handleReset=()=>{
        this.props.handleResetButton();
    }

    render() {
        return (
            <div className="x_title">
                <div styles={{
                    width: "20px"
                }}>
                    <p>
                        To send screening request, please enter following details, find match, review
                        then click Submit.
                    </p>
                    <button  style={{marginButtom:'20px'}}
                        className="btn btn-primary pull-right no-print"
                        id="reset-screening-n-request-form"  type="button" onClick={this.handleReset}>
                        
                        Reset
                    </button>
                </div>
               
                <ScreeningPrimaryTab/>
            </div>
        );
    }
}
export default ScreeningTabTitle;


class ScreeningPrimaryTab extends React.Component {
    handleRelatedPerson=()=>{
        History.push("/screeningRelatedPerson");
    }
    handleRelatedEntity=()=>{
        History.push("/screeningRelatedEntity");
    }
    handleScreeningReview=()=>{
        History.push("/screeningLegalReview")
    }
    handleScreeningDocuments=()=>{
        History.push("/screeningDocuments");
    }
    render() {
        return (
            <div>
                <div className="x_content">

                    <button onClick={this.handleRelatedPerson}
                        type='button'
                        className="btn btn-primary"
                        style={{
                        margin: '10px'
                    }}
                        id="screening-l-add-related-person">
                        <i className="fa fa-plus"></i>
                        Add related person
                    </button>
                    <button onClick={this.handleRelatedEntity}
                        type='button'
                        className="btn btn-primary"
                        style={{
                        margin: '10px'
                    }}
                        id="screening-l-add-related-entity">
                        <i className="fa fa-plus"></i>
                        Add related entity
                    </button>
                    <button onClick={this.handleScreeningDocuments}
                        className="btn btn-primary"
                        style={{
                        margin: '10px'
                    }}
                        id="screening-l-add-related-entity">
                        <i className="fa fa-plus"></i>
                        Add Documents</button>
                        
                    <button onClick={this.handleScreeningReview}
                        className="btn btn-primary pull-left no-print"
                        style={{
                        margin: '10px'
                    }}
                        id="screening-n-review-btn">
                        <i className="fa fa-file-text  "></i>
                        Review screening request</button>
                </div>
  
            </div>
        );
    }
}

