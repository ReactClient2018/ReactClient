import React from "react";
import { UserActionCreators } from "actions";
import PropTypes from "prop-types";
import { connect } from "react-redux"

class ScreeningNaturalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            purpose: "",
            customer_type: "",
            salutation: "",
            first_name: "",
            middle_name: "",
            last_name: "",
            lsf_name: "",
            lsm_name: "",
            lsl_name: "",
            sex: "",
            mobile_number: "",
            email: "",

        };


    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }

    handleSubmit = (event) => {
        var json = {
            screening_n_request_data: this.state
        }
        const screening_json = JSON.stringify(json);
        alert(JSON.stringify(screening_json));
        this.props.onSubmitScreening(screening_json);
    }
    blackColor = {
        color: 'black'
    };
    render() {
        const { handleSubmit, pristine, reset, submitting, classes, screening } = this.props;
        return (
            <div>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <div className='row' style={{ padding: '20px' }}>
                        <div className="col-md-4 col-sm-6 col-xs-12 item form-group">
                            <label className="control-label col-md-6 col-sm-4 col-xs-4" style={this.blackColor}> Purpose of Screening
                    </label>
                            <input type="text" name='purpose' value={this.state.purpose} onChange={this.handleChange} />

                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12 item form-group">
                            <label className="control-label col-md-6 col-md-4 col-xs-4" style={this.blackColor}>Customer type</label>
                            <input
                                type="text"
                                name='customer_type'
                                value={this.state.customer_type}
                                onChange={this.handleChange} />
                        </div>
                    </div>
                    <hr />
                    <div id="screening-request-wrap">
                        <div className="clearfix"></div>
                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label className="control-label col-md-4 col-sm-4 col-xs-4 " style={this.blackColor}>Salutation</label>
                            <input type="text" name='salutation' value={this.state.salutation} onChange={this.handleChange} />
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>First name
                        </label>
                            <input type="text" name='first_name' value={this.state.first_name} onChange={this.handleChange} />
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>Middle name</label>
                            <input type="text" name='middle_name' value={this.state.middle_name} onChange={this.handleChange} />
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>Last name
                        </label>
                            <input type="text" name='last_name' value={this.state.last_name} onChange={this.handleChange} />
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>नाम</label>
                            <input type="text" name='lsf_name' value={this.state.lsf_name} onChange={this.handleChange} />
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>बीचकाे &nbsp; नाम</label>
                            <input type="text" name='lsm_name' value={this.state.lsm_name} onChange={this.handleChange} />
                        </div>

                        <div className="clearfix"></div>
                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>थर</label>
                            <input type="text" name='lsl_name' value={this.state.lsl_name} onChange={this.handleChange} />
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>Gender
                        </label>
                            <input type="text" name='sex' value={this.state.sex} onChange={this.handleChange} />
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>Mobile no.
                        </label>
                            <input
                                type="text"
                                name='mobile_number'
                                value={this.state.mobile_number}
                                onChange={this.handleChange} />
                        </div>
                        <div className="clearfix"></div>

                        <div className="col-md-6 col-sm-6 col-xs-12 item form-group">
                            <label className="control-label col-md-4 col-sm-4 col-xs-4" style={this.blackColor}>Email ID
                        </label>
                            <input type="text" name='email' value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="clearfix"></div>

                    </div>
                    <button className="btn btn-primary" type="submit" color="primary">Submit</button>

                </form>
            </div>
        );
    }
}

ScreeningNaturalForm.propTypes = {
    added: PropTypes.bool,
    onSubmitScreening: PropTypes.func.isRequired
}

const mapStateToProps = (state) => (
    {
        screening: state.screening
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        onSubmitScreening: (values) => dispatch(
            UserActionCreators.addUser(values)
        ),
        onClose: () => dispatch(
            UserActionCreators.close()
        )
    }
);
export default connect(mapStateToProps, mapDispatchToProps)(ScreeningNaturalForm)
