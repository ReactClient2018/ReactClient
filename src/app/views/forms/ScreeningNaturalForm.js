import React from "react";
import  {UserActionCreators} from "actions";
import PropTypes from "prop-types";
import {connect} from "react-redux"

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
            lsm_name:"",
            lsl_name: "",
            sex: "",
            mobile_number: "",
            email: "",
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]:event.target.value});
        
    }

    handleSubmit(event) {
        var json ={
            screening_n_request_data: this.state
        }
        const screening_json = JSON.stringify(json);
        alert(JSON.stringify(screening_json));
        this.props.onSubmitScreening(screening_json);
    }

    render() {
        const { handleSubmit,pristine, reset, submitting,classes,screening } = this.props;
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div class="col-md-4 col-sm-6 col-xs-12 item form-group">
                    <label class="control-label col-md-4 col-sm-4 col-xs-4">Purpose of Screening
                    </label>
                    <input type="text" name ='purpose' value={this.state.purpose} onChange={this.handleChange}/>

                </div>

                <div class="col-md-4 col-sm-6 col-xs-12 item form-group">
                    <label class="control-label col-md-4 col-md-4 col-xs-4">Customer type</label>
                    <input
                        type="text"
                        name ='customer_type'
                        value={this.state.customer_type}
                        onChange={this.handleChange}/>
                </div>
                <hr/>
                <div id="screening-request-wrap">
                    <div class="clearfix"></div>
                    <div class="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label class="control-label col-md-4 col-sm-4 col-xs-4 " >Salutation</label>
                        <input type="text" name='salutation' value={this.state.salutation} onChange={this.handleChange}/>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label class="control-label col-md-4 col-sm-4 col-xs-4">First name
                        </label>
                        <input type="text" name='first_name' value={this.state.first_name} onChange={this.handleChange}/>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label class="control-label col-md-4 col-sm-4 col-xs-4">Middle name</label>
                        <input type="text" name='middle_name' value={this.state.middle_name} onChange={this.handleChange}/>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label class="control-label col-md-4 col-sm-4 col-xs-4">Last name
                        </label>
                        <input type="text" name='last_name' value={this.state.last_name} onChange={this.handleChange}/>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label class="control-label col-md-4 col-sm-4 col-xs-4">नाम</label>
                        <input type="text"name='lsf_name' value={this.state.lsf_name} onChange={this.handleChange}/>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label class="control-label col-md-4 col-sm-4 col-xs-4">बीचकाे &nbsp; नाम</label>
                        <input type="text" name='lsm_name' value={this.state.lsm_name} onChange={this.handleChange}/>
                    </div>

                    <div class="clearfix"></div>
                    <div class="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label class="control-label col-md-4 col-sm-4 col-xs-4">थर</label>
                        <input type="text" name ='lsl_name' value={this.state.lsl_name} onChange={this.handleChange}/>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label class="control-label col-md-4 col-sm-4 col-xs-4" >Gender
                        </label>
                        <input type="text" name= 'sex' value={this.state.sex} onChange={this.handleChange}/>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label class="control-label col-md-4 col-sm-4 col-xs-4">Mobile no.
                        </label>
                        <input
                            type="text"
                            name='mobile_number'
                            value={this.state.mobile_number}
                            onChange={this.handleChange}/>
                    </div>
                    <div class="clearfix"></div>

                    <div class="col-md-6 col-sm-6 col-xs-12 item form-group">
                        <label class="control-label col-md-4 col-sm-4 col-xs-4">Email ID
                        </label>
                        <input type="text"  name ='email' value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div class="clearfix"></div>

                </div>
                <button class="btn btn-primary" type="submit" color="primary">Submit</button>
            </form>
        );
    }
}

ScreeningNaturalForm.propTypes = {
    added:PropTypes.bool,
    onSubmitScreening:PropTypes.func.isRequired
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
