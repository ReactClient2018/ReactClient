import React from "react";
import {Auth, History} from "utils";

class ScreeningTabTitle extends React.Component {
    
    handleReset=()=>{
        this.props.handleResetButton();
    }

    render() {
        return (
            <div class="x_title">
                <div styles={{
                    width: "20px"
                }}>
                    Screening Request - Natural Person{" "}
                    <p>
                        To send screening request, please enter following details, find match, review
                        then click Submit.
                    </p>
                    <button  style={{marginButtom:'20px'}}
                        class="btn btn-primary pull-right no-print"
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
        History.push("/screeningNaturalReview")
    }
    handleScreeningDocuments=()=>{
        History.push("/screeningDocuments");
    }
    render() {
        return (
            <div>
                <div class="x_content">

                    <button onClick={this.handleRelatedPerson}
                        type='button'
                        class="btn btn-primary"
                        style={{
                        margin: '10px'
                    }}
                        id="screening-l-add-related-person">
                        <i class="fa fa-plus"></i>
                        Add related person
                    </button>
                    <button onClick={this.handleRelatedEntity}
                        type='button'
                        class="btn btn-primary"
                        style={{
                        margin: '10px'
                    }}
                        id="screening-l-add-related-entity">
                        <i class="fa fa-plus"></i>
                        Add related entity
                    </button>
                    <button onClick={this.handleScreeningDocuments}
                        class="btn btn-primary"
                        style={{
                        margin: '10px'
                    }}
                        id="screening-l-add-related-entity">
                        <i class="fa fa-plus"></i>
                        Add Documents</button>
                        
                    <button onClick={this.handleScreeningReview}
                        class="btn btn-primary pull-left no-print"
                        style={{
                        margin: '10px'
                    }}
                        id="screening-n-review-btn">
                        <i class="fa fa-file-text  "></i>
                        Review screening request</button>
                </div>

              {/* <div class="x_content">
                <div class="" role="tabpanel" data-example-id="togglable-tabs">
                    <ul
                        id="screeningnTabs"
                        class="col-md-2  nav nav-tabs tabs-left no-print"
                        role="tablist">
                        <li role="presentation" class="">
                            <a
                                href="#screening-n-request-review-content"
                                role="tab"
                                id="screening-n-request-review-tab"
                                data-toggle="tab"
                                aria-expanded="false"
                                style={{display: "none"}}>Review</a>
                        </li>
                        <li role="presentation" class="">
                            <a
                                href="#screening-request-content"
                                id="screening-request-tab"
                                role="tab"
                                data-toggle="tab"
                                aria-expanded="true">Primary customer</a>
                        </li>
                        <li role="presentation" class="">
                            <a
                                href="#screening-request-attachments"
                                id="screening-attachments-tab"
                                role="tab"
                                data-toggle="tab"
                                aria-expanded="true">Attachments</a>
                        </li>
                    </ul>

                </div> 
                </div> */}
  
            </div>
        );
    }
}

