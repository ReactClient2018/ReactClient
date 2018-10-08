import React from "react";
import ScreeningNaturalForm from "../forms/ScreeningNaturalForm";



class ScreeningNaturalRequest extends React.Component {

    render() {
        const divStyle = {
            backgroundColor: 'white',
            overflow: 'scroll',
            
            // border: '1px solid red',
            width: '100%',
            float: 'left',
            height: '600px',
            position: 'relative'
        };
        return (
            <div style={divStyle}>
                <ScreeningTitle />
                <ScreeningPrimaryForm />
                <ScreeningNaturalForm />
            </div>
        );
    }
}
export default ScreeningNaturalRequest;

class ScreeningTitle extends React.Component {
    render() {
        return (
            <div className="x_title">
                <div styles={{
                    width: "20px"
                }}>
                    Screening Request - Natural Person{" "}
                    <p>
                        To send screening request, please enter following details, find match, review
                        then click Submit.
                    </p>
                    <a
                        className="btn btn-primary pull-right no-print"
                        id="reset-screening-n-request-form">
                        <i className="fa fa-undo" aria-hidden="true" />
                        Reset
                    </a>
                </div>

            </div>

        );
    }
}

class ScreeningPrimaryForm extends React.Component {
    render() {
        return (
            <div>
                <div className="x_content">

                    <button
                        type='button'
                        className="btn btn-primary"
                        id="screening-l-add-related-person"
                        style={{margin:'10px'}}
                        >
                        <i className="fa fa-plus"></i>
                        
                        Add related person
                    </button>
                    <button className="btn btn-primary" id="screening-l-add-related-entity"
                    style={{margin:'10px'}}
                    >
                        <i className="fa fa-plus"></i>
                        Add related entity</button>
                    <button className="btn btn-primary pull-left no-print" id="screening-n-review-btn" style={{margin:'10px'}}>
                        <i className="fa fa-file-text  "></i>
                        Review screening request</button>
                </div>

                {/* <div className="x_content"></div>
                <div className="" role="tabpanel" data-example-id="togglable-tabs">
                    <ul
                        id="screeningnTabs"
                        className="col-md-2  nav nav-tabs tabs-left no-print"
                        role="tablist">
                        <li role="presentation" className="">
                            <a
                                href="#screening-n-request-review-content"
                                role="tab"
                                id="screening-n-request-review-tab"
                                data-toggle="tab"
                                aria-expanded="false"
                                styles="display: none;">Review</a>
                        </li>
                        <li role="presentation" className="">
                            <a
                                href="#screening-request-content"
                                id="screening-request-tab"
                                role="tab"
                                data-toggle="tab"
                                aria-expanded="true">Primary customer</a>
                        </li>
                        <li role="presentation" className="">
                            <a
                                href="#screening-request-attachments"
                                id="screening-attachments-tab"
                                role="tab"
                                data-toggle="tab"
                                aria-expanded="true">Attachments</a>
                        </li>
                    </ul>

                </div>
    */}
            </div>
        );
    }
}


