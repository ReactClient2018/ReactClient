import React from "react";
import ScreeningTabTitle from "./ScreeningTabTitle.jsx";
import {UserActionCreators} from "actions";
import PropTypes from "prop-types";
import {History} from 'utils';
import {connect} from "react-redux";

class ScreeningNaturalReview extends React.Component {

    handleSubmit = event => {
    
        var sr = `{"screening_n_request_data": ` + this.fetchScreeningRequestData() + 
        `,"screening_n_related_person": [` + this.fetchScreeningRelatedPerson() + `]`+
        `,"screening_n_related_entity": [` + this.fetchScreeningRelatedEntity() + `]` + `}`;

        alert(sr);
        this.props.onSubmitScreening(sr);

    };
 
    fetchScreeningRequestData() {
        var screening_n_request_data = JSON.parse(localStorage.getItem('screening_n_request_data'));

        var data = "";
        var i;
        for (i = 0; i < screening_n_request_data.length; i++) {
            data = data + JSON.stringify(screening_n_request_data[i]);
        }

        return data;
    }

    fetchScreeningRelatedPerson() {
        alert("inside P");
        var screening_n_related_person = JSON.parse(localStorage.getItem('screening_n_related_person'));

        var data = "";
        var i;
        if (screening_n_related_person) {
            for (i = screening_n_related_person.length; i > 0; i--) {
                if (i != 1) {
                    data = data + `{"related_person_request_data":`+JSON.stringify(screening_n_related_person[i - 1]) + "},";
                } else {
                    data = data +  `{"related_person_request_data":` +JSON.stringify(screening_n_related_person[i - 1]) + "}";
                }
            }
        }

        return data;
    }
    fetchScreeningRelatedEntity() {
        // alert("inside");
        var screening_n_related_entity = JSON.parse(localStorage.getItem('screening_n_related_entity'));
        // alert(JSON.stringify(screening_n_related_entity[0]));
        var data = "";
        var i;
        if (screening_n_related_entity) {
            for (i = screening_n_related_entity.length; i > 0; i--) {
                if (i != 1) {
                    data = data + `{"related_entity_request_data":`+JSON.stringify(screening_n_related_entity[i - 1]) + "},";
                } else {
                    data = data + `{"related_entity_request_data":`+JSON.stringify(screening_n_related_entity[i - 1]) + "}";
                }
            }
        }
        alert(data);

        return data;
    }
    render() {
        const divStyle = {
            backgroundColor: 'white',
            overflowY: 'auto',
            width: '100%',
            height: '480px',
            position: 'relative'
        };
        return (
            <div style={divStyle}>
                <ScreeningTabTitle/>
                <hr/>
                <div >
                    <span>Review Screening!!!</span>
                </div>
                <hr/>
                <button
                    onClick={this.handleSubmit}
                    class="btn btn-primary"
                    type="submit"
                    color="primary">
                    Submit.
                </button>
            </div>
        );
    }

}
ScreeningNaturalReview.propTypes = {
    added: PropTypes.bool,
    onSubmitScreening: PropTypes.func.isRequired
};

const mapStateToProps = state => ({screening: state.screening});

const mapDispatchToProps = dispatch => ({
    onSubmitScreening: values => dispatch(UserActionCreators.addUser(values)),
    onClose: () => dispatch(UserActionCreators.close())
});
export default connect(mapStateToProps, mapDispatchToProps)(ScreeningNaturalReview);
