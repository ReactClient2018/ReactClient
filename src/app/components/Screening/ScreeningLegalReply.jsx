import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {History} from "utils";
import {ScreeningActionCreators} from "actions";
import NavBar from "./MainNavBar.jsx"
class ScreeningLegalReply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cust_id: "",
            cbs_name: "",
            account_id: ""

        }
    }

    handleSubmit = event => {
        var sr = JSON.stringify(this.state);
        var id = JSON.parse(localStorage.getItem("screeningLRequestList"))[localStorage.getItem('screening_l_notification_index')].id;
        // alert(sr + id );
        this.props.onSubmitScreening(sr, id);
        // this.props.onReview();
        History.push("/screeningLegalResponse");

    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    render() {
        const divStyle = {
            backgroundColor: 'white',
            overflowY: 'auto',
            width: '100%',
            height: '650px',
            position: 'relative'
        };
        var json = JSON.parse(localStorage.getItem("screeningLRequestList"));
        var approved = json[localStorage.getItem('screening_l_notification_index')].approved;

        if (approved) {
            return (
                <div style={divStyle}>
                    <ScreeningReplyTemplate/>
                    <hr/>
                    <div className="clearfix"></div>

                    <div
                        style={{
                        backgroundColor: 'white'
                    }}>
                        <form>
                            <div className="col-md-4 col-sm-6 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-4 col-sm-4 col-xs-4"
                                    style={this.blackColor}>
                                    Customer Id:
                                </label>
                                <div className="col-md-8 col-sm-8 col-xs-8">
                                    <input
                                        type="text"
                                        name="cust_id"
                                        placeholder="Cust Id"
                                        value={this.state.cust_id}
                                        onChange={this.handleChange}/>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-4 col-sm-4 col-xs-4"
                                    style={this.blackColor}>CBS generated name:</label>
                                <div className="col-md-8 col-sm-8 col-xs-8">
                                    <input
                                        type="text"
                                        name="cbs_name"
                                        placeholder="CBS name"
                                        value={this.state.cbs_name}
                                        onChange={this.handleChange}/>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12 item form-group">
                                <label
                                    className="control-label col-md-4 col-sm-4 col-xs-4"
                                    style={this.blackColor}>Account Id:</label>
                                <div className="col-md-8 col-sm-8 col-xs-8">
                                    <input
                                        type="text"
                                        name="account_id"
                                        placeholder="Account Id"
                                        value={this.state.account_id}
                                        onChange={this.handleChange}/>

                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div>
                                <button onClick={this.handleSubmit}>Submit</button>
                            </div>

                        </form>
                    </div>
                </div>

            )
        } else {
            return (
                <div style={divStyle}>
                    <ScreeningReplyTemplate/>
                </div>
            )
        }

    }
}
ScreeningLegalReply.propTypes = {
    added: PropTypes.bool,
    onSubmitScreening: PropTypes.func.isRequired,
    onReview: PropTypes.func.isRequired
};

const mapStateToProps = state => ({screening: state.screening});

const mapDispatchToProps = dispatch => ({
    onSubmitScreening: (values, id) => dispatch(ScreeningActionCreators.updateScreeningLReply(values, id)),
    onReview: values => dispatch(ScreeningActionCreators.fetchScreening())

});
export default connect(mapStateToProps, mapDispatchToProps)(ScreeningLegalReply);

class ScreeningReplyTemplate extends React.Component {
    handleReview = event => {
        // this.props.onReview();
        History.push("/screeningLegalResponse");
    }
    render() {
        var json = JSON.parse(localStorage.getItem("screeningLRequestList"));
        var screening_data = json[localStorage.getItem('screening_l_notification_index')].screening_l_request_data;
        var action = json[localStorage.getItem('screening_l_notification_index')].screening_l_action;
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
                            <label className="">{json[localStorage.getItem('screening_l_notification_index')].id}</label>
                        </div>
                    </div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">PURPOSE OF SCREENING
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{screening_data.purpose_of_screening}</label>
                        </div>
                    </div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">NAME OF INSTITUTION
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{screening_data.name_of_institution}</label>
                        </div>
                    </div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">REGISTRATION NUMBER
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{screening_data.registration_no}</label>
                        </div>
                    </div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">TYPE OF INDUSTRY
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{screening_data.tyep_of_industry}</label>
                        </div>
                    </div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">COUNTRY OF ISSUE
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{screening_data.country_of_issue}</label>
                        </div>
                    </div>
                    <div className="col-xs-12 hover-group review-group">
                        <label className="control-label col-xs-4 review-key">KYCL ID
                        </label>
                        <div className="col-xs-8 review-value">
                            <label className="">{screening_data.kycl_id}</label>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="clearfix"/>
                <ActionTemplate/>
                <hr/>
                <div className="clearfix"/>

            </div>
        );
    }
}
class ActionTemplate extends React.Component {
    render() {
        var json = JSON.parse(localStorage.getItem("screeningLRequestList"));
        var action = json[localStorage.getItem('screening_l_notification_index')].screening_l_action;
        if (action) {
            var dataList = action.map(function (data, index) {
                return <div key={index}>
                    <div id="screening-n-request-review-wrap">
                        <div className="clearfix"></div>
                        <div className="col-md-6">
                            <h3>Action Log {index + 1}
                            </h3>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-xs-12 hover-group review-group">
                            <label className="control-label col-xs-4 review-key">REASON:
                            </label>
                            <div className="col-xs-8 review-value">
                                <label className="">{data.reason}</label>
                            </div>
                        </div>
                        <div className="col-xs-12 hover-group review-group">
                            <label className="control-label col-xs-4 review-key">ACTION:
                            </label>
                            <div className="col-xs-8 review-value">
                                <label className="">{data.action_type}</label>
                            </div>
                        </div>
                        <div className="col-xs-12 hover-group review-group">
                            <label className="control-label col-xs-4 review-key">ACTION DATE:
                            </label>
                            <div className="col-xs-8 review-value">
                                <label className="">{data.reply_date}</label>
                            </div>
                        </div>
                        <div className="col-xs-12 hover-group review-group">
                            <label className="control-label col-xs-4 review-key">ACTION TIME:
                            </label>
                            <div className="col-xs-8 review-value">
                                <label className="">{data.reply_time}</label>
                            </div>
                        </div>

                    </div>
                </div>

            })
            return <div>{dataList}</div>
        } else {
            return <ul>.</ul>;
        }
    }
}