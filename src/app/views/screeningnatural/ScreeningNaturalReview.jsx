import React from "react";
import ScreeningTabTitle from "./ScreeningTabTitle.jsx";
import { UserActionCreators } from "actions";
import PropTypes from "prop-types";
import { History } from 'utils';
import { connect } from "react-redux";
// import {formValueSelector} from "redux-form";
import { ConnectedEditUserForm } from "../forms/UserForm";
import ScreeningPrimaryRequestTable from '../screeningTableList/ScreeningPrimaryRequestTable.jsx';
import ScreeningRelatedPersonTable from '../screeningTableList/ScreeningRelatedPersonTable.jsx'
import ScreeningRelatedEntityTable from '../screeningTableList/ScreeningRelatedEntityTable.jsx'
import ScreeningDocumentsTable from '../screeningTableList/ScreeningDocumentTable.jsx'

// const selector = formValueSelector("signIn");


class ScreeningNaturalReview extends React.Component {


    handleSubmit = event => {
        var sr = `{"screening_n_request_data": ` + this.fetchScreeningRequestData() +
            `,"screening_n_related_person": [` + this.fetchScreeningRelatedPerson() + `]` +
            `,"screening_n_related_entity": [` + this.fetchScreeningRelatedEntity() + `]` + 
            `,"screening_n_attachment": [` + this.fetchScreeningDocument() + `]`+
            `}`;
        alert(sr);
        this
            .props
            .onSubmitScreening(sr);

    };
    fetchScreeningDocument(){
        var screening_n_attachment = JSON.parse(localStorage.getItem('screening_n_attachment'));
        var data = "";
        if (screening_n_attachment) {
            for (var i = screening_n_attachment.length; i > 0; i--) {
                if (i != 1) {
                    data += JSON.stringify(screening_n_attachment[i - 1]) + ",";
                } else {
                    data += JSON.stringify(screening_n_attachment[i - 1]);
                }
            }
        }
        return data;
    }

    fetchScreeningRequestData() {
        var screening_n_request_data = JSON.parse(localStorage.getItem('screening_n_request_data'));
        var data = "";
        for (var i = 0; i < screening_n_request_data.length; i++) {
            data += JSON.stringify(screening_n_request_data[i]);
        }
        return data;
    }

    fetchScreeningRelatedPerson() {
        // alert("inside P");
        var screening_n_related_person = JSON.parse(localStorage.getItem('screening_n_related_person'));
        var data = "";
        if (screening_n_related_person) {
            for (var i = screening_n_related_person.length; i > 0; i--) {
                if (i != 1) {
                    data += `{"related_person_request_data":` + JSON.stringify(screening_n_related_person[i - 1]) + "},";
                } else {
                    data += data + `{"related_person_request_data":` + JSON.stringify(screening_n_related_person[i - 1]) + "}";
                }
            }
        }
        return data;
    }
    fetchScreeningRelatedEntity() {
        // alert("inside");
        var screening_n_related_entity = JSON.parse(localStorage.getItem('screening_n_related_entity'));
        var data = "";
        if (screening_n_related_entity) {
            for (var i = screening_n_related_entity.length; i > 0; i--) {
                if (i != 1) {
                    data += `{"related_entity_request_data":` + JSON.stringify(screening_n_related_entity[i - 1]) + "},";
                } else {
                    data += `{"related_entity_request_data":` + JSON.stringify(screening_n_related_entity[i - 1]) + "}";
                }
            }
        }
        return data;
    }
    render() {
        const divStyle = {
            backgroundColor: 'white',
            overflowY: 'auto',
            width: '100%',
            height: '510px',
            position: 'relative'
        };
        var data = JSON.parse(localStorage.getItem('screening_n_request_data'));


        return (
            <div style={divStyle}>
                <ScreeningTabTitle />
                <h2 style={{ color: 'lightBlue', textAlign:'center' }}><span>Review Screening!!!</span></h2>
                <hr />
                <ScreeningPrimaryRequestTable />
                <ScreeningRelatedPersonTable />
                <ScreeningRelatedEntityTable />
                <ScreeningDocumentsTable />
                <button
                    onClick={this.handleSubmit}
                    className="btn btn-primary"
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

const mapStateToProps = state => ({ screening: state.screening });

const mapDispatchToProps = dispatch => ({
    onSubmitScreening: values => dispatch(UserActionCreators.addUser(values)),
    onClose: () => dispatch(UserActionCreators.close())
});
export default connect(mapStateToProps, mapDispatchToProps)(ScreeningNaturalReview);
