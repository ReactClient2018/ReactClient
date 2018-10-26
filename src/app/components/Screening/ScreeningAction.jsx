import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {History} from "utils";
import {UserActionCreators} from "actions";
import NavBar from "./CheckerNavBar.jsx"
class ScreeningAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            action_type: "",
            checker: "",
            reason: ""
        }
    }
    handleReview = event =>{
        // this.props.onReview();
        // location.reload();
        History.push("/screeningNotification");
    }

    handleSubmit = event => {
        var sr = JSON.stringify(this.state);
        var id = JSON.parse(localStorage.getItem("screeningNRequestList"))[localStorage.getItem('screening_n_notification_index')].id;
        this.props.onSubmitScreening(sr, id);
        this.props.onReview();
        History.push("/screeningNotification");

    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    render() {
        var json = JSON.parse(localStorage.getItem("screeningNRequestList"));
        var screening_data = json[localStorage.getItem('screening_n_notification_index')].screening_n_request_data;
        return (
            <div>
                <NavBar/>
                <div className="col-md-6 pull-right text-right">
                    <div
                        className="btn btn-primary no-print edit-buttons"
                        data-edit="screening-request-tab"
                        onClick={this.handleReview}>Return to Review Page</div>
                </div>
                <hr/>
                <div id="screening-n-request-review-wrap">
                    <div className="clearfix"></div>
                    <div className="col-md-6">
                        <h3>Primary Customer
                        </h3>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">ID
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{json[localStorage.getItem('screening_n_notification_index')].id}</label>
                        </div>
                    </div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">PURPOSE OF SCREENING N
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{screening_data.purpose_of_screening_n}</label>
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
                            <label className="">{screening_data.first_name}</label>
                        </div>
                    </div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">LAST NAME
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{screening_data.last_name}</label>
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
                <div className="clearfix"></div>
                <div className="clearfix"></div>

                <div style={{
                    backgroundColor: 'white'
                }}>
                    <form>
                        <div className="col-md-4 col-sm-6 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-sm-4 col-xs-4"
                                style={this.blackColor}>
                                Action :
                            </label>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                <select
                                    name="action_type"
                                    value={this.state.action_type}
                                    onChange={this.handleChange}>
                                    <option>Select action type.</option>
                                    <option value='low risk'>Proceed-Low Risk</option>
                                    <option value='medium risk'>Proceed-Medium Risk
                                    </option>
                                    <option value='high risk'>Proceed-High Risk</option>
                                    <option value='reject'>Reject</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-sm-4 col-xs-4"
                                style={this.blackColor}>Forward To</label>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                <select
                                    name="checker"
                                    value={this.state.forwardTo}
                                    onChange={this.handleChange}>
                                    <option>Forward To.</option>
                                    <option value='Regional Compliance'>Regional Compliance</option>
                                    <option value='Central Compliance'>Central Compliance</option>
                                    <option value='Branch Manager'>Branch Manager</option>
                                    <option value='Regional Manager'>Regional Manager</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12 item form-group">
                            <label
                                className="control-label col-md-4 col-sm-4 col-xs-4"
                                style={this.blackColor}>Reason</label>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                <textarea
                                    name="reason"
                                    required
                                    onChange={this.handleChange}
                                    value={this.state.reason}></textarea>

                            </div>
                        </div>
                        <div>
                            {/* <button>Add Attachment</button>
                            <button>Remove Attachment</button> */}
                        </div>
                        <div>
                            <button onClick={this.handleSubmit}>Submit</button>
                        </div>

                    </form>
                </div>
            </div>

        )
    }
}
ScreeningAction.propTypes = {
    added: PropTypes.bool,
    onSubmitScreening: PropTypes.func.isRequired,
    onReview: PropTypes.func.isRequired
};

const mapStateToProps = state => ({screening: state.screening});

const mapDispatchToProps = dispatch => ({
    onSubmitScreening: (values, id) => dispatch(UserActionCreators.updateScreeningNatural(values, id)),
    onReview:values => dispatch(UserActionCreators.fetchScreening())
    
});
export default connect(mapStateToProps, mapDispatchToProps)(ScreeningAction);

// export default ScreeningAction;