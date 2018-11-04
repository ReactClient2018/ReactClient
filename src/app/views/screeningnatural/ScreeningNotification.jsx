import React from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import {History} from 'utils';
import Navbar from "../../components/Screening/CheckerNavBar.jsx";

class ScreeningNotification extends React.Component {

    submitClick = (event) => {
        History.push("./screeningAction");
    };
    fetchScreeningNaturalData = () => {

        var data = [];
        var json = JSON.parse(localStorage.getItem("screeningNRequestList"));
        for (var i = 0; i < json.length; i++) {
            var screening_data = json[i].screening_n_request_data;
            if (screening_data) {
                var details = {
                    id: json[i].id,
                    purpose_of_screening: screening_data.purpose_of_screening_n,
                    first_name: screening_data.first_name,
                    middle_name: screening_data.middle_name,
                    last_name: screening_data.last_name,
                    date: ''
                }
                data.push(details);
            }
        }
        return data;
    }
    fetchScreeningLegalData = () => {

        var data = [];
        var json = JSON.parse(localStorage.getItem("screeningLRequestList"));
        for (var i = 0; i < json.length; i++) {
            var screening_data = json[i].screening_l_request_data;
            if (screening_data) {
                var details = {
                    id: json[i].id,
                    purpose_of_screening: screening_data.purpose_of_screening,
                    name_of_institution: screening_data.name_of_institution,
                    date_of_establishment: screening_data.date_of_establishment,
                    registration_no: screening_data.registration_no,
                    country_of_issue: screening_data.country_of_issue,
                    type_of_industry: screening_data.type_of_industry,
                    date: ''
                }
                data.push(details);
            }
        }
        return data;

    }
    render() {

        const dataNatural = this.fetchScreeningNaturalData();
        const dataLegal = this.fetchScreeningLegalData();
        const columnsLegal = [
            {
                Header: 'ID',
                accessor: 'id'
            }, {
                Header: 'Purpose of screening',
                accessor: 'purpose_of_screening'
            }, {
                Header: 'Name',
                accessor: 'name_of_institution'
            }, {
                Header: 'Date of establishment',
                accessor: 'date_of_establishment'
            }, {
                Header: 'Registration Number',
                accessor: 'registration_no'
            }, {
                Header: 'Country of issue',
                accessor: 'country_of_issue'
            }, {
                Header: 'Type of industry',
                accessor: 'type_of_industry'
            },  {
                Header: 'Screening request date',
                accessor: 'date'
            }, {
                Header: 'Screening request time',
                accessor: 'time'
            }, {
                Header: 'Details',
                width: 125,
                accessor: 'tender_list',
                style: {
                    cursor: 'pointer'
                },
                Cell: props => <button onClick={() => this.submitClick(props.value)}>Review
                    </button>
            }
        ]
        const columnsNatural = [
            {
                Header: 'ID',
                accessor: 'id'
            }, {
                Header: 'Purpose of screening',
                accessor: 'purpose_of_screening'
            }, {
                Header: 'First Name',
                accessor: 'first_name'
            }, {
                Header: 'Middle Name',
                accessor: 'middle_name'
            }, {
                Header: 'Last Name',
                accessor: 'last_name'
            }, {
                Header: 'नाम',
                accessor: 'lsf'
            }, {
                Header: 'बीचको नाम',
                accessor: 'lsm'
            }, {
                Header: 'थर',
                accessor: 'lsl'
            }, {
                Header: 'Screening request date',
                accessor: 'date'
            }, {
                Header: 'Screening request time',
                accessor: 'time'
            }, {
                Header: 'Details',
                width: 125,
                accessor: 'tender_list',
                style: {
                    cursor: 'pointer'
                },
                Cell: props => <button onClick={() => this.submitClick(props.value)}>Review
                    </button>
            }
        ]
        const divStyle = {
            backgroundColor: 'white',
            overflowY: 'auto',
            width: '100%',
            height: '510px',
            position: 'relative'
        };

        return (
            <div>
                <Navbar/>
                <div style={divStyle}>
                    <h3
                        style={{
                        color: 'lightBlue',
                        textAlign: 'center'
                    }}>
                        <span>Review Screening Natural!!!</span>
                    </h3>
                    <ReactTable
                        data={dataNatural}
                        columns={columnsNatural}
                        defaultPageSize={9}
                        pageSizeOptions={[6, 10, 18]}
                        getTdProps={(state, row, rowInfo, column, instance) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                console.log(row.index);
                                localStorage.removeItem("screening_n_notification_index");
                                localStorage.setItem("screening_n_notification_index", row.index);
                                if (handleOriginal) {
                                    handleOriginal();
                                }
                            }
                        }
                    }}/>
                       <h3
                        style={{
                        color: 'lightBlue',
                        textAlign: 'center'
                    }}>
                        <span>Review Screening Legal!!!</span>
                    </h3>
                    <ReactTable
                        data={dataLegal}
                        columns={columnsLegal}
                        defaultPageSize={9}
                        pageSizeOptions={[6, 10, 18]}
                        getTdProps={(state, row, rowInfo, column, instance) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                console.log(row.index);
                                localStorage.removeItem("screening_l_notification_index");
                                localStorage.setItem("screening_l_notification_index", row.index);
                                if (handleOriginal) {
                                    handleOriginal();
                                }
                            }
                        }
                    }}/>
                </div>
            </div>
        );
    }

}

export default ScreeningNotification;
